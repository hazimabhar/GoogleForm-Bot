//change the array based on the id on google form

function getAnswerFaiz3(){
    const arr =[
        "When I think of a smartphone, my smartphone brand is one of the brands that come to my mind, Strongly Disagree",
        "When I think of a smartphone, my smartphone brand is one of the brands that come to my mind, Disagree",
        "When I think of a smartphone, my smartphone brand is one of the brands that come to my mind, Neutral",
        "When I think of a smartphone, my smartphone brand is one of the brands that come to my mind, Agree",
        "When I think of a smartphone, my smartphone brand is one of the brands that come to my mind, Strongly Agree",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz3