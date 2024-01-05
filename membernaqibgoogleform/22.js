//change the array based on the id on google form

function getAnswerFaiz22(){
    const arr =[
        "Faculty of Quranic & Sunnah Studies ",
        "Faculty of Leadership & Management",
        "Faculty of Syariah & Law",
        "Faculty Economics & Muamalat",
        "Faculty of Science & Technology",
        "Faculty of Medicine & Health Science",
        "Faculty of Major Language Studies",
        "Faculty of Dentistry",
        "Faculty of Engineering & Built Environment",
        "Tamhidi Centre",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz22