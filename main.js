people_info = [
  {
    name: "guido",
    profession: "bungalow builder",
    age: 17,
    country: "canaland",
    city: "sydurn",
    catchphrase: "what a piece of wood!"
  },
  {
    name: "petra",
    profession: "jet plane mechanic",
    age: 31,
    country: "greenmark",
    city: "bostork",
    catchphrase: "that's my engine, bub"
  },
  {
    name: "damian",
    profession: "nursery assistant",
    age: 72,
    country: "zimbia",
    city: "bekyo",
    catchphrase: "with great responsibility comes great power"
  }
]

const capitalize = function(str){
  let capitalizedStr = ""
  capitalizedStr += str[0].toUpperCase(); //add the first letter of the str, capitalized
  capitalizedStr += str.slice(1) //add the rest of str normallyreturn capitalizedStr
  return capitalizedStr
}

const getAge = function(age){
  if(age < 21){
    return 'Underage'
  }
  if(age > 55){
    return '55+ years old'
  }
  return `${age} years old`
}

const getLocation = function(country, city){
  return `${capitalize(country)}, ${capitalize(city)}`
}

const getProffesion = function(prof){
  let returnedProf = ''
  let wordsArray = prof.split(" ")
  for (word of wordsArray){
    returnedProf += `${capitalize(word)} `
  }
  return returnedProf
}

const getphrase = function(catchphrase){
  return capitalize(catchphrase)
}

const getSummary = function(person){
  let summary = ""
  let personName = capitalize(person.name)
  summary += personName
  summary += ` is an ${getAge(person.age)} `
  summary += getProffesion(person.profession)//call function for profession
  summary += `from ${getLocation(person.country, person.city)}. `//call function for country + city
  summary += `${personName} loves to say "${getphrase(person.catchphrase)}".`//call function for catchphrasereturn summary
  return summary
}


for(let person of people_info){
  console.log(getSummary(person))
}




const story = "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage."
const specialChars = [",", ".", "'", '"',"?", "!", ";"]



const cleanText = function(text, specialChars){
  let cleanedText = text
  for(spclChar of specialChars){
    cleanedText = cleanedText.split(spclChar).join("")
  }
  return cleanedText
}

const countAllWords = function(str){

  const objToReturn = {}
  const strArray = str.split(' ')
  for (word of strArray) {
    (objToReturn[word]>0)?objToReturn[word]+=1:objToReturn[word]=1
  }
  return objToReturn
}

const countWords = function(story, specialChars){

  story = cleanText(story, specialChars)
  return countAllWords(story)

  console.log(story)
}



const wordCounts = countWords(story, specialChars)

console.log(wordCounts)