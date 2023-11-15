function getFamailyName(){
    const arr =[
        'Wang',
        'Zhang',
        'Li',
        'Liu',
        'Chen',
        'Yang',
        'Huang',
        'Zhao',
        'Wu',
        'Zhou',
        'Sun',
        'Zhu',
        'Lu',
        'Cai',
        'Shen',
        'Qian',
        'Peng',
        'Du',
    ]

    const randomizer = Math.floor(Math.random() * arr.length)
    return arr[randomizer]
}
function getFirstName(){
    const arr = [
        'Yi',
        'Wei',
        'Mei',
        'Jun',
        'Yang',
        'Ming',
        'Xue',
        'Hao',
        'Ling',
        'Jie',
        'Lin',
        'Chen',
        'Xin',
        'Rui',
    ]
    const randomizer = Math.floor(Math.random() * arr.length)
    return arr[randomizer]
}
function getLastName(){
    const arr = [
        'Lin',
        'Nan',
        'Hui',
        'Yu',
        'Rui',
        'Yi',
        'Tian',
        'Fei',
        'Ming',
        'Ran',
        'Yue',
        'Fan',
        'Ze',
        'Xuan',
        'Yang',
        'Mei',
        'Hua'
    ]
    const randomizer = Math.floor(Math.random() * arr.length)
    return arr[randomizer]
}
function getrandomChineseName(){
    return (
        getFamailyName()+ " "+
        getFirstName()+ " "+ 
        getLastName()
    )

}

module.exports = getrandomChineseName;