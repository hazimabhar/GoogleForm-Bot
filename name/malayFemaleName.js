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
        "Najwa",
        "Dhiya",
        "Ezzah",
        "Zara",
        "Syafiqah",
        "Syifa",
        "Maisarah",
        "Anisah",
        "Aleeya",
        "Maryam",
        "Khadijah",
        "Safiya",
        "Suraya"
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
        "Arshad",
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