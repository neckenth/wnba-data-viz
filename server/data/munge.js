const { readFileSync, createWriteStream } = require('fs')
const rosterWriteStream = createWriteStream('./roster.json')
const statsWriteStream = createWriteStream('./stats.json')

const arrToObj = (arr, key) => {
    const newArr =  arr.reduce((acc, elem) => {
        acc[elem[key]] = elem
        return acc
    }, {})
    console.log(JSON.stringify(newArr))
    return JSON.stringify(newArr)
}

const fileStrToArr = (path) => {
    let data = readFileSync(path).toString()
    const arr = JSON.parse(data)
    return arrToObj(arr, 'pid')
}

rosterWriteStream.write(fileStrToArr('./roster.js'));
<<<<<<< HEAD
statsWriteStream.write(fileStrToArr('./stats.js'));
=======
statsWriteStream.write(fileStrToArr('./stats.js'));
>>>>>>> 19de831893befd9f8faf11c2c4fbb7b69027fc91
