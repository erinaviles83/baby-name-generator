function generateName(event) {
    event.preventDefault(); 

    let nameElement = document.querySelector("#baby"); 

    new Typewriter('#baby', {
  strings: "Your baby's new name!",
  autoStart: true,
  delay: 75, 
  cursor: "✨", 
});
}



let nameFormElement = document.querySelector("#name-generator-form"); 
nameFormElement.addEventListener("submit", generateName); 
