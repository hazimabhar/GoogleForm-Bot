//change the array based on the id on google form

function getAnswer11(){
    const arr =[
        "i29",
        "i32",
        "i35",
        "i38",
        "i41",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswer11