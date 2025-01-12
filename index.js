
const retourEnHaut = document.getElementById("retour_en_haut");


retourEnHaut.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

window.onload = function() {
    setTimeout(function() {
        alert("Bienvenue sur Mon portofolio cher visiteur !");
    }); 
};

