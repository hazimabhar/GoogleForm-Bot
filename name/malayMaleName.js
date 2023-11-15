function getFirstName(){
    const arr =[
        "Muhammad",
        "Ahmad",
        "Mohamad",
        "Mohd",
        "Muhd",      
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

function getLastName(){
    const arr =[
        "Ali",
        "Abu",
        "Harith",
        "Amir",
        "Adam",
        "Hafiz",
        "Iqbal",
        "Khalid",
        "Farhan",
        "Arif",
        "Faiz",
        "Iman",
        "Luqman",
        "Rayyan",
        "Syafiq",
        "Irfan",
        "Zahir",
        "Mikael",
        "Emir",
        "Arshad"
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

function getLastNameFather(){
    const arr =[
        "Fazli",
        "Khairul",
        "Abdullah",
        "Azahar",
        "Harun",
        "Azman",
        "Rosli",
        "Fadli",
        "Akhmal",
        "Jefri",
        "Ammar",
        "Aqil",
        "Nizam",
        "Amirul",
        "Afiq"
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

function getRandomMalayMaleName(){
    return(
        getFirstName()+ " " +
        getLastName()+ " " +
        "Bin"+ " " +
        getFirstName()+ " " +
        getLastNameFather()
    )
}

module.exports = getRandomMalayMaleName;