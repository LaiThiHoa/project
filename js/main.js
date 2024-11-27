const loginButton = document.querySelector(".btn");
loginButton.addEventListener("click", (event) => {
  event.preventDefault(); // Ngăn form gửi đi
  window.location.href = "../Bank/home.html"; // Chuyển hướng đến trang Register
});
const sendResetMailButton = document.getElementById("sendmail");
sendResetMailButton.addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href = "../sendmail.html";
});
const returnLogin = document.getElementById("returnlogin");
returnLogin.addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href = "../Bank/home.html";
});
const success = document.getElementById("success");
success.addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href = "../Bank/home.html";
});
const register = document.getElementById("register");
register.addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href = "../Bank/home.html";
});
