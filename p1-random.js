/*
    CIT 281 Project 1
    Name: sshina
*/
// Courtesy of the assignment page
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function randomLower(){
    let result = "";
    let limit = getRandomInteger(5, 26);
    console.log(limit);
    for (let i = 0; i < limit; i++) result += "qwertyuiopasdfghjklzxcvbnm"[Math.floor(Math.random()*26)];
    return result;
}
console.log(randomLower());
