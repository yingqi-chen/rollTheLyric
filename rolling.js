const fs = require('fs')
const log = require('single-line-log').stdout;

const file = fs.readFile("./lyric.txt", (err,data)=>{
    if(err) {
        console.log(err)
     } else{
         printLyric(data.toString())
     }
})

function printLyric(lyric){
  const reg = /\[(\d{2})\:(\d{2})\.(\d{2})\]\s*(.+)/
  const lines = lyric.split("\n")
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
        log(content)
        log.clear()
      },time)
    }
  }

}
