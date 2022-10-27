// this is a function to return a random element from an array
function randomElementFromArray(inputArray){
    let randomIndex = Math.floor(Math.random() * inputArray.length)
    return inputArray[randomIndex]
} 
let titlesstart = ["The", "A", "Some"]
let titlesmiddle = ["Ancient", "Gorgeous", "Shy"]
let titlesend = ["Village", "Kingdom", "Island"]

let titlestart = randomElementFromArray(titlesstart)
let titlemiddle = randomElementFromArray(titlesmiddle)
let titleend = randomElementFromArray (titlesend)

let title = titlestart + " " + titlemiddle + " " + titleend
document.getElementById("heading").innerHTML = title 

let openingLines = ["In a overgrown forest", "In the depths of the lake", "In the hidden library"]
let pronouns = ["i", "we", "she", "he", "they"]
let verbs = ["ran", "danced", "trailed", "leaped", "read"]
let adverbs = ["wildy", "slowly", "beautifully", "sleepily", "curiously"]

let openingLine = randomElementFromArray(openingLines)
let pronoun = randomElementFromArray(pronouns)
let verb = randomElementFromArray (verbs)
let adverb = randomElementFromArray (adverbs)

let poem = openingLine + " " + pronoun + " " + verb + " " + adverb

let longPoem = ""

for(let i = 0; i < 10; i++){
let openingLine = randomElementFromArray(openingLines)
let pronoun = randomElementFromArray(pronouns)
let verb = randomElementFromArray (verbs)
let adverb = randomElementFromArray (adverbs)
    longPoem += openingLine + " " + pronoun + " " + verb + " " + adverb + ". " 
    longPoem += "<br>"
}

document.getElementById("para").innerHTML = longPoem 
console.log(longPoem)



