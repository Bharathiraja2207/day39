const fs=require("fs")
const data="current date stamp"
fs.writeFile("current-date-stamp.txt",data,(err)=>{console.log('file created')})
