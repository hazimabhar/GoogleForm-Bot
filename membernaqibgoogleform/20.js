//change the array based on the id on google form

function getAnswerFaiz20(){
    const arr =[
        "Johor",
        "Kedah",
        "Kelantan",
        "Melaka",
        "Negeri Sembilan",
        "Pahang",
        "Pulau Pinang",
        "Perak",
        "Perlis",
        "Selangor",
        "Terengganu",
        "Sabah",
        "Sarawak",
        "Wilayah Persekutuan",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz20