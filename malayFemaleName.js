function getFirstName(){
    const arr =[
        "Nur",
        "Nor",
        "Nurul",
        "Siti",      
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

function getLastName(){
    const arr =[
        "Aisyah",
        "Farah",
        "Ain",
        "Balqis",
        "Hani",
        "Anis",
        "Fatihah",
        "Fatimah",
        "Alia",
        "Najwa"
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}
function getFirstNameFather(){
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
function getLastNameFather(){
    const arr =[
        "Alias",
        "Ismail",
        "Abdullah",
        "Azahar",
        "Harun",
        "Azman",
        "Rosli",
        "Fadli",
        "Akhmal",
        "Jefri"
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

function getRandomMalayFemaleName(){
    return(
        getFirstName()+ " " +
        getLastName()+ " " +
        "Binti"+ " " +
        getFirstNameFather()+ " " +
        getLastNameFather()
    )
}

module.exports = getRandomMalayFemaleName;