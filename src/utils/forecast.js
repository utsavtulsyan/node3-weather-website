const request=require('request')
const forecast=(longitude,latitude,callback)=>{
    const url='https://api.darksky.net/forecast/fb6290290683ef5762ef91220f6661db/'+encodeURIComponent(longitude)+','+encodeURIComponent(latitude)
    request({url:url,json:true},(error,{body})=>{
        if(error){
            callback('Unable to connect to weather service',undefined)
        }else if(body.error){
            callback('cannot find location',undefined)
        }else{
            callback(undefined,body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + '. there is ' + body.currently.precipProbability * 100 + '% chance of rain.')
        }
    })
}
module.exports=forecast