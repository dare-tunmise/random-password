const words = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 
'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 
'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 
's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '!', '@', '#', '%', '^', '&', '~' ];




const btn = document.querySelector(".password-btn");

const passWord = document.querySelector(".password-box");

btn.addEventListener("click", () =>{
    let password = "";
    for( let i = 0; i < words.length; i++) {
        password += words[randomNumber()];
        passWord.textContent = password;
    }

});

function randomNumber() {
    return Math.floor(Math.random() * words.length);
}

