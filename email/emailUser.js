function getEmail(){
    const arr =[
        '@google.com',
        '@outlook.com',
        '@yahoo.com',
    ]
    const randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
}

function getEmailUser(name){
    let formattedEmail = name.toLowerCase().replace(/\s/g, '')
    let emailDomain = getEmail();
    return (
        formattedEmail + emailDomain
    )
}

module.exports = getEmailUser;