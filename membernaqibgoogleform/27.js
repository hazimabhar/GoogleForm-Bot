//change the array based on the id on google form

function getAnswerFaiz27(){
    const arr =[
        "Johor",
        "Melaka",
        "Negeri Sembilan",
        "Pahang",
        "Perak",
        "Pulau Pinang",
        "Sabah",
        "Sarawak",
        "Selangor",
        "Terengganu",
        "Wilayah Persekutuan (Kuala Lumpur, Putrajaya, Labuan)",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz27