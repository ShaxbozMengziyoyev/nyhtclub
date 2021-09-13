var info = alert("Iltimos ma`lumotlaringizni kirgizing!");
var firstName = prompt("Ismingiz.").trim() .toUpperCase();
var sureName = prompt("Familyangiz.").trim() .toUpperCase();


var header = document.createElement('h1');
document.body.append(header);
var age = prompt('Yoshingizni kiriting') .trim() .toUpperCase();
var yourAge = 18;
if (age >= yourAge) {
  header.textContent = firstName + " Yoshingiz tog`ri keldi.\n Sizga bu ishni qilish mumkin";
  document.body.style.backgroundColor = "green";
  header.style.color = "black"
  header.style.textAlign = "center"
  header.style.marginTop = "50px"
}else {
  header.textContent = firstName +  "Sizning yoshingiz to`g`ri kelmadi. \n Sizga bu ishni qilish mumkin emas";
  document.body.style.backgroundColor = "red";
  header.style.color = "white";
  header.style.textAlign = "center"
  header.style.marginTop = "50px"
}

var send = alert("Malumotlar olindi");

console.log(`Ismigiz: ${firstName}, Yosh: ${age}`);