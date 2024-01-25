let name = "kartik"
let age  = 21

console.log(`my name is ${name} and i am ${age} year old `)

let newstring = new String('kartik-sir-kargwal')
console.log(newstring[2])
console.log(newstring.__proto__)

console.log(newstring.length)
console.log(newstring.toUpperCase())

console.log(newstring.charAt(7))
console.log(newstring.indexOf('g'))

const naestring = newstring.substring(0 , 4)
console.log(naestring)

const anotherstring = newstring.slice(-9 , 0)
console.log(anotherstring)

const stringone = '    kartiktrimspace    '
console.log(stringone)
console.log(stringone.trim())

const url = 'https//kartik%20.com'
console.log(url.includes('kartik'))
console.log(url.replace('%20' ,'--'))

console.log(newstring.split('-')) //split conver string to array ('-' breakdown point)



