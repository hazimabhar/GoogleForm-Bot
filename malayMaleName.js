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
        "Arif"
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