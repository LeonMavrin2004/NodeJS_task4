// מגישים:
// ליאון מברין
// דניאל ברששת

const fs = require('fs');

const names = ["1.txt", "2.txt", "3.txt", "4.txt", "5.txt", "6.txt", "7.txt", "8.txt", "9.txt", "10.txt"]

let outputText = ""

for(let i = 0; i < names.length; i++)
{
  const text = fs.readFileSync(`inputs/${names[i]}`, 'utf-8')
  const lines = text.split(/\r?\n/)
  const outputLines = lines.slice(0, i + 1)

  outputText += outputLines.join('\n') + '\n'
}

fs.writeFileSync('output.txt', outputText)


