function getFirstName() {
    const arr = [
        'Priya',
        'Anjali',
        'Lakshmi',
        'Diya',
        'Pooja',
        'Riya',
        'Aanya',
        'Ishita',
        'Janani',
        'Mahi',
        'Nandini',
        'Parijat',
        'Saanvi',
        'Tanisha',
        'Disha',
        'Esha',
        'Himani',
        'Ira',
        'Jiya',
        'Kavya'
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
        'Vivek',
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
function getRandomFemaleIndianName(){
    return(
        getFirstName() + ' ' + 
        "A/P" + " " +
        getLastName() 
    )
}

module.exports = getRandomFemaleIndianName;