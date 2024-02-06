alert("This will take you on Encryption/Decryption Site.");

function buttonclick() {
  document.querySelector("#enc-btn").addEventListener("click", function () {
    document.querySelector("#decryption").style.display = "none";
    document.querySelector("#encryption").style.display = "block";
    document.querySelector("#enc-btn").style.backgroundColor = "#333";
    document.querySelector("#dec-btn").style.backgroundColor = "#222";
    document.querySelector("#maindiv>h1 span img").style.rotate = "0deg";
  });
  document.querySelector("#dec-btn").addEventListener("click", function () {
    document.querySelector("#encryption").style.display = "none";
    document.querySelector("#decryption").style.display = "block";
    document.querySelector("#dec-btn").style.backgroundColor = "#333";
    document.querySelector("#enc-btn").style.backgroundColor = "#222";
    document.querySelector("#maindiv>h1 span img").style.rotate = "180deg";
  });
}
buttonclick();
