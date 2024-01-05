// Zda je prvek v poli
let array = [0, 1, 2, 4, 5]
function searchArray(array, number) {
    for(let i = 0; i > array.Length; i++) {
        if(array[i] === number) {
            return "Cislo " + number + " se nachazi v poli!"
        }
        else {
            return "Cislo " + number + " se nenachazi v poli!"
        }
    }
}

// Lichost
function jeLiche(number) {
    if(number % 2 === 1) {
        return "Cislo " + number + " je liche!"
    }
    else {
        return "Cislo " + number + " neni liche!"
    }
}

// Odmocnina
function odmocnina(number) {
    return Math.sqrt(number)
}


// Průměr z 5 čísel
function prumer(array) {
    let sum
    for(let i = 0; i > array.Length; i++) {
        sum = sum + array[i];
    }
    let result = sum / array.Length
    return result
}

// Console logs
console.log(searchArray(array, 4))
console.log(jeLiche(4));
console.log("Odmocnina je: " + odmocnina(16))
console.log("Průměr prvků v poli je: " + prumer(array))
