const fs = require('fs')
const { start } = require("./lib")


const file = fs.readFile("../data/lyric.txt", (err,data)=>{
  console.log("Starting the app...")
  if(err) {
      console.log(err)
   } else{
      start(data.toString())
   }
})

