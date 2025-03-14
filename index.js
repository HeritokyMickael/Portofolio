
const retourEnHaut = document.getElementById("retour_en_haut");


retourEnHaut.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

var i =0;
var txt ='Bienvenue sur mon portfolio';
var speed= 400;

function MachineEcrire(){
    if( i < txt.length){
        document.getElementById("typewriter").innerHTML += txt.charAt(i);
        i++;
        setTimeout(MachineEcrire , speed);
    }
}

MachineEcrire();