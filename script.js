let ism = prompt ("Ismingizni kiriting")
let age = prompt("Yoshingizni kiritng")
let surname = prompt("Familyangizni kiriting ")

document.getElementById("malumot").innerText = "Sizning ismingiz: " +ism

document.getElementById("age").innerText = "Sizning yoshingiz: " +age

document.getElementById("surname").innerText = "Sizning familyangiz: " +surname

document.body.style.backgroundColor = 'aqua'
document.getElementById("malumot").style.color = 'blue'
document.getElementById("malumot").style.fontSize = '50px'
document.getElementById("malumot").style.textAlign = 'center'

document.getElementById("age").style.color = 'blue'
document.getElementById("age").style.fontSize = '50px'
document.getElementById("age").style.textAlign = 'center'

document.getElementById("surname").style.color = 'blue'
document.getElementById("surname").style.fontSize = '50px'
document.getElementById("surname").style.textAlign = 'center'