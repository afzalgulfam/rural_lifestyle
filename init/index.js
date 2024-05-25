const mongoose=require("mongoose");
const initData=require("./data.js");
const Listing=require("../models/listing.js");



main().catch((err)=>{
    console.log(err);
});



async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/Rural-Lifestyle");
}


const initdb=async ()=>{
    await Listing.deleteMany({});
    initData.data=initData.data.map((obj)=>({...obj,owner:"662dfe5dfafca00701a2c5c7"}));
   await Listing.insertMany(initData.data);
}

initdb();