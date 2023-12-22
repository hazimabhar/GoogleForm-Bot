//change the array based on the id on google form

function getAnswerFaiz7(){
    const arr =[
        "Developer",
        "Doctor",
        "Lawyer",
        "Accountant",
        "Marketing Manager",
        "Human Resource Manager",
        "Finance Manager",
        "Project Manager",
        "System Analyst",
        "Data Scientist",
        "Web Developer",
        "Graphic Designer",
        "Civil Engineer",
        "Mechanical Engineer",
        "Electrical Engineer",
        "Chemical Engineer",
        "Petroleum Engineer",
        "Teacher",
        "Nurse",
        "Police Officer",
        "Firefighter",
        "Paramedic",
        "Social Worker",
        "Counselor",
        "Journalist",
        "Librarian",
        "Architect",
        "Interior Designer",
        "Pilot",
        "Air Traffic Controller",
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

module.exports = getAnswerFaiz7