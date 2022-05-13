const activePage= window.location.pathname;

const navlinks= document.querySelectorAll('nav a').forEach(link => {
    if (link.href.includes(`${activePage}`)) {
        link.classList.add('active');
    }
});



var i = 0;
var txt = 'Thank you. Our phone number is 052-4829014';
var speed = 50;
      
function typeWriter() {
    if (i < txt.length) {
        document.getElementById("ourPhoneNumber").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
        }
      }
