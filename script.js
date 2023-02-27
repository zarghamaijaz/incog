const typingWrap = document.querySelector("#typing-animation");

if(typingWrap){
    var i = 0;
    const txt = typingWrap.innerText;
    var speed = 50;
    typingWrap.innerHTML = "";

function typeWriter() {
        if (i < txt.length) {
          typingWrap.innerHTML += txt.charAt(i);
          i++;
          setTimeout(typeWriter, speed);
        }
    }
    typeWriter();
}