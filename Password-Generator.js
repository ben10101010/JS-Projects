function WriteToFile(password, passwordName) { //Logs passwords to a text file
 
    const fs = require('fs') 

var logger = fs.createWriteStream('passwords.txt', {
  flags: 'a'
})
logger.write("Generated Password for "+ passwordName +": " + password) //format for the logging
logger.write("\n__________________________\n")
logger.end()
 } 

function generateWord(length){
  let result = '';
  let characters2 = '1234567890'
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890@_#$!&'
  let characterLength = characters.length
  for (i=0;i<length;i++){ //generates random letters based on length
    result += characters.charAt(Math.floor(Math.random() * characterLength))
}
return result;
}

let generate = generateWord(12) //generates the password
console.log(generate) //logs the password to console
WriteToFile(generate, "name"); //logs the password to the file, the name part is to name the password so it wont get lost.
