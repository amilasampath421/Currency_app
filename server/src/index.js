const express = require ("express");
const cors = require ("cors");
const axios = require ("axios");

const app = express();

//middlwears

app.use(express.json());
app.use(cors());

//all currencies
app.get("/getAllCurrencies",async(req,res)=>{
    const nameURL ="https://openexchangerates.org/api/currencies.json?app_id=5a79a7e0dfd9432c8fa1dc9fa85ee66a";
 

    try{   const namesResponce = await axios.get(nameURL);
        const nameData =namesResponce.data;
    
        return res.json(nameData);
    }catch(err){cconsole.error(err);
    }
})

app.listen(5000 ,()=>{
    console.log("SERVER STARTED");
});
