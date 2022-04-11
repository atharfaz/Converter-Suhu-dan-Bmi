const bodyParser = require("body-parser")
const express = require("express")
const app = express()

app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}))

app.get('/convert/celcius/:suhu',(req,res)=>{
    const celcius = Number(req.params.suhu)
    res.json({
        celcius,
        result:{
            reamur : celcius * 4 / 5,
            farenheit : celcius * 9 / 5 + 32,
            kelvin : celcius +273,
        },
    });
});
app.get('/convert/kelvin/:suhu',(req,res)=>{
    const kelvin = Number(req.params.suhu)
    res.json({
        kelvin,
        result:{
            celcius : kelvin - 273,
            reamur : 4/9 * (kelvin-273),
            farenheit : (kelvin - 273)* 9/5 +32,
        },
    });
});
app.get('/convert/reamur/:suhu',(req,res)=>{
    const reamur = Number(req.params.suhu)
    res.json({
        reamur,
        result : {
            celcius : reamur *5 / 4,
            farenheit : reamur * 9/4 + 32,
            kelvin : reamur * 5/4 + 273,
        },
    })
})
app.get('/convert/farenheit/:suhu',(req,res)=>{
    const farenheit = Number(req.params.suhu)
    res.json({
        farenheit,
        result : {
            celcius : (farenheit - 32 ) *5/9,
            kelvin : ((farenheit - 32 ) *5/9)+273,
            reamur  : (farenheit - 32 ) *4/9,
        },
    })
})
const port = 3000;
app.listen(port, () => console.log(`app running on port ${port}`))