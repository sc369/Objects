let outputElement = document.querySelector("#container")
outputElement.innerHTML += "<h1>Car List</h1>"

salesByWeek.forEach((car) => {
    outputElement.innerHTML += "<hr/>"
    let carEntries = (Object.entries(car))
    carEntries.forEach((entry) => {
console.log(entry)

    const entryType = ( typeof entry[1])
if (entryType !== "object") {
    outputElement.innerHTML += `<div>${entry[0]}: ${entry[1]}</div>`
} 


// if (entry[1].length === undefined) {
    // console.log("undefined")
// } else {
//     console.log(entry[1])
// }

//     })
// })
// const vehicleProp = (Object.entries(car)[0][1])
// console.log(vehicleProp.length)

//     console.log(Object.entries(car)[3][1])
// if ((Object.entries(car)[0][1]).length === undefined) {

// console.log("undefined")
// } else {
//     console.log("exists")
}

)

})

