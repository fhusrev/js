let userName = prompt("Adınızı Giriniz");

if (!userName.trim().length > 0) {
  alert("Hatalı Giriş Yaptınız!");
  location.reload();
}

document.querySelector("#myName").innerHTML = `${userName
  .trim()[0]
  .toUpperCase()}${userName.trim().slice(1)}`;

let gunler = [
  "Pazar",
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
];

function zamanGoster() {
  let t = new Date();
  let saat = t.getHours();
  let dakika = t.getMinutes();
  let saniye = t.getSeconds();
  let gun = gunler[t.getDay()];
  document.querySelector("#myClock").innerHTML = `${
    saat < 10 ? "0" + saat : saat
  }:${dakika < 10 ? "0" + dakika : dakika}:${
    saniye < 10 ? "0" + saniye : saniye
  } ${gun}`;
}

setInterval(zamanGoster, 1000);
zamanGoster();

// function Tik(tikDegeri) {
//     if (tikDegeri < 10) {
//         tikDegeri = "0" + tikDegeri;
//     }
//     return tikDegeri;
// }

console.log(userName);
