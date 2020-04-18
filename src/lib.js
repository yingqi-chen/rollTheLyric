const log = require('single-line-log').stdout;


function printLyric(answer, lyric){
  console.log("Printing the Lyric...")

  const reg = /\[(\d{2})\:(\d{2})\.(\d{2})\]\s*(.+)/
  const lines = lyric.split("\n")

  loopAllLines(answer,lines,reg)
 
}

function loopAllLines(answer,lines,reg){
    
  for(let i = 0; i<lines.length; i++){
    let line = lines[i];
    let matches = reg.exec(line)
    
    if(matches){
      let minute = parseFloat(matches[1])
      let second = parseFloat(matches[2])
      let millsecond = parseFloat(matches[3])
      let content = matches[4]
      let time = minute*60*1000 + second*1000 + millsecond
      
      setTimeout(function(){
        answer==="Y"? console.log(content) : log(content)
      },time)
    }
  }
}

module.exports = {
    printLyric
}
