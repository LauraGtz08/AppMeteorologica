// TERMINAL:
// npm init
// npm install request
// npm install --save @iamtraction/google-translate


// INCLUSIÓN DEL MÓDULO "REQUEST"
const request = require('request');
const traslate = require('@iamtraction/google-translate');
const translate = require('@iamtraction/google-translate');
// CONSTRUIR URL QUE USA LA API (URL ? LLAVE ÚNICA AL REGISTRARSE &query ALTITUD Y LATITUD DEL LUGAR)
// GRADOS FAHRENHEIT: 
// const url = ('http://api.weatherstack.com/current?access_key=71338e241ac5f393c02bf43d8728bd7a&query=19.2433,%20-103.725&units=f'); 
const url = ('http://api.weatherstack.com/current?access_key=71338e241ac5f393c02bf43d8728bd7a&query=19.2433,%20-103.725'); 


// request({url: url}, (error, response) => {
//     //console.log(response)
//     const data = JSON.parse(response.body)
//     console.log(data.current)
// })

// request({url: url, json:true}, (error, response) => {
//     //console.log(response.body.current)
//     console.log("El clima es: " + response.body.current.weather_descriptions)
//     console.log("La temperatura es de: " + response.body.current.temperature + " ° C")
//     console.log("Sin embargo, se percibe de: " + response.body.current.feelslike + " ° C")
//     console.log("La probabilidad de lluvias es del: " + response.body.current.precip + " %")
// })

let weather_description
request({url:url, json:true}, (error,response) => {
    weather_description = response.body.current.weather_descriptions[0]
    translate(weather_description, {from: 'en', to: 'es'}).then(respuesta => {
        console.log("El clima es: " + respuesta.text)
    }).catch(error => {
        console.log(error)
    })
    
    console.log("La temperatura es de: " + response.body.current.temperature + " ° C")
    console.log("Sin embargo, se percibe de: " + response.body.current.feelslike + " ° C")
    console.log("La probabilidad de lluvias es del: " + response.body.current.precip + " %")   
})