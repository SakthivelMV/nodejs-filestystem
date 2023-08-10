 //Task 1: Create a Endpoint API to create a time stamp

const fs = require("fs")
const timestamp = (new Date().toISOString());
fs.writeFile("current date-time.txt",timestamp,(err)=>{
    console.log("Time stamp file created")
})


// Task 2: Create a  API Endpoint to show all the text files in the folder

fs.readdir("./Timestamp", (err,files)=>{
console.log("All files", files)
});