function getFirstName() {
    const arr = [
        'Arjun',
        'Krishna',
        'Rahul',
        'Nikhil',
        'Dev',
        'Aryan',
        'Kabir',
        'Aarav',
        'Vivaan',
        'Aditya',
        'Yash',
        'Ishaan',
        'Pranav',
        'Siddhant',
        'Reyansh',
        'Neil',
        'Viraj',
        'Abhimanyu',
        'Samarth',
        'Rohan'
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}
function getLastName() {
    const arr = [
        'Aamir',
        'Ajay',
        'Akshay',
        'Amitabh',
        'Anil',
        'Govinda',
        'Hrithik',
        'Irrfan',
        'Jackie',
        'Kalyan',
        'Mohanlal',
        'Nagarjuna',
        'Prasanna',
        'Rajiv',
        'Salman',
        'Sanjay',
        'Shahrukh',
        'Sunny',
        'Vikram',
        'Vivek'
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}
function getRandomIndianMaleName(){
    return(
        getFirstName()+ " "+
        "A/L" + " "+
        getLastName()
    )
}

module.exports = getRandomIndianMaleName;