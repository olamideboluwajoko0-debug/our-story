function checkPassword(){
    const password =document.getElementById('password').value;
    const loginScreen =document.getElementById('login-screen');
    const errorMessage= document.getElementById('error-message');
    if (password == 'moonandsun')
    {
        loginScreen.style.display ='none';

    } else{
        errorMessage.textContent= 'wrong password'
    }      
}

const heart =document.createElement('div');
heart.className = "love-heart";

for (let i = 0; i  < 300; i ++){
    const word = document.createElement('span');
    word.textContent = 'I LOVE U ';

    const t = Math.random()*
Math.PI *2;
    
    const x = 16 *Math.pow(Math.sin(t),3);
    const y = 13 * Math.cos(t)- 5 * Math.cos(2 *t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);

    word.style.left = 'calc(50% + ' + (x * 15) + 'px)';
    word.style.top = 'calc(50% - ' + (y * 15) + 'px)';
     
    heart.appendChild(word)

}

document.body.appendChild(heart);
