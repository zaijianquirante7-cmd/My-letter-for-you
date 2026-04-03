const message = `Hi juuu!!! I hope you're reading this, i don't really know how to say it. But i just want to be honest for this time. Wala nang pasikot sikot, i really admire you so much. it didn't happen all at once it just slowly grew everytime when i see you. ewan ko, para akong nababaliw HHAHAHHAHA.. I put so many efforts js to made this for you. but it is all worth it. Since g9, You're the only person that i admire. i am not expecting anything, i don't want to pressure you. I just want you to know on what i feel:))

Whatever your answer is, I'll respect it. i just hope this doesn't change the way you see me..:)) `;
   
function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;


    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 60);
      }
    }

    typeWriter();
  }, 600);
}