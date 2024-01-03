//change the array based on the id on google form

function getAnswerFaiz28(){
    const arr =[
        "Apple",
        "Samsung",
        "Xiaomi",
        "Huawei",
        "Vivo",
        "LG",
        "Oppo",
        "Redmi",
        "Realmi",


    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz28