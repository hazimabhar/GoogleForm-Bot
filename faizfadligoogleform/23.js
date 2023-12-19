//change the array based on the id on google form

function getAnswerFaiz23(){
    const arr =[
        "i271",
        "i274",
        "i277",
        "i280",
        "i283",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz23