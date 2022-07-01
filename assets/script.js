const h1 = document.getElementById("page-title");
const button = document.getElementById("mode-selector");
const footer = document.querySelector("footer");
const body = document.querySelector("body");

const mudaCor = () => {
    h1.classList.toggle("dark-mode"); 
    button.classList.toggle("dark-mode");  
    footer.classList.toggle("dark-mode");  
    body.classList.toggle("dark-mode");

    
};

const addText = () => {
    let darkMode = "Dark Mode";
    let lightMode =  "Light Mode";
    
    if(body.classList.contains("dark-mode")){
        h1.innerHTML = darkMode + " ON";
        button.innerHTML = lightMode;
        return;
    }

    h1.innerHTML = lightMode + " ON";
    button.innerHTML = darkMode;
};

const inicia = ()=>{
    mudaCor();
    addText()
};

button.addEventListener("click", inicia);