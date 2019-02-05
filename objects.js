let outputElement = document.querySelector("#container")
outputElement.innerHTML = ""

salesByWeek.forEach(sale => {
    console.log(sale)
    outputElement.innerHTML += "<hr/>"
    const car = (Object.entries(sale)[0][1])
    const agentValues = Object.entries(sale)[2][1]
    outputElement.innerHTML += `
    <h1>${agentValues["first_name"]} ${agentValues["last_name"]} </h1>
    `
    
    const entry = Object.entries(car)
    entry.forEach((key) => {
        outputElement.innerHTML += `
        <div>${key[0]} : ${key[1]} </div>
        `
    })
    outputElement.innerHTML += `<h3> ${sale.gross_profit} </h3>
    `
    })