const readline = require("readline")
const { printLyric } = require("./lib")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function start(lyric){   
  const questionAnswered = data =>{
    let answer = data.toString().trim().toUpperCase()
    if (answer !== "Y" && answer !=="N"){
      console.log("Not the answer I want.")
      start()
    }else{
      printLyric(answer,lyric)
    }
  }
  rl.question("Do you want to see all the lyric(compard to one line each time)? Y/N \n", questionAnswered)

}

module.exports = {start}