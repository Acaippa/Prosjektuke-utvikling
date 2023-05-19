
function calculateEmmisions() { 
    // Etter CO2 utslipp
    // Hent verdiene fra inputtene
    let drivingDistance = document.getElementsByName("kjøredistanse")[0].value
    let Co2Emisions = document.getElementsByName("Etter_CO2_utslipp")[0].value

    let resultInput = document.getElementsByName("Etter_CO2_utslipp_result")[0]

    // Vi må først gjøre at inputten ikke er disabled før vi endrer verdien. Etter det gjør vi den disabled igjen så brukeren ikke kan endre på den.
    resultInput.disabled = false
    resultInput.value = drivingDistance * (Co2Emisions / 1000)
    resultInput.disabled = true
}

function calculateEmmisionsPerLength() {
    // Etter forbruk per mil
    // Hent verdiene fra inputtene
    let drivingDistance = document.getElementsByName("kjøredistanse")[0].value
    let Co2EmisionsLength = document.getElementsByName("Etter_forbruk_per_mil")[0].value
    let fuelType = document.getElementsByName("Fuel")[0]
    fuelType = fuelType[fuelType.selectedIndex].value


    let resultInput = document.getElementsByName("Etter_forbruk_per_mil_result")[0]

    // Gjør at inputten ikke er disabled, og gjør kalkulasjoner basert på drivstofftypen før vi gjør inputten disabled igjen.
    resultInput.disabled = false
    if (fuelType == "Gas"){
        resultInput.value = (drivingDistance * Co2EmisionsLength * 2.32) / 10
    } else {
        resultInput.value = (drivingDistance * Co2EmisionsLength * 2.66) / 10
    }
    resultInput.disabled = true
}

    
document.getElementsByName("Etter_CO2_utslipp")[0].onchange = addEventListener("change", calculateEmmisions)
document.getElementsByName("Etter_forbruk_per_mil")[0].onchange = addEventListener("change", calculateEmmisionsPerLength)
