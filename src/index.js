function displayName(response) {
    new Typewriter("#baby", {
        strings: response.data.answer,
        autoStart: true,
        delay: 75, 
        cursor: "✨", 
      });
}


function generateName(event) {
    event.preventDefault(); 
    

    let instructionsInput = document.querySelector("#user-instructions"); 
    let apiKey = "3a6a306aaebc0ebof78e0326570tda46"; 
    let prompt = `Generate a baby's name based on ${instructionsInput.value}`; 
    let context = "You know a baby name expert and know the best names for babies. Please provide the user with the top 3 names for their new baby. List only the names with commas in between and without numbering them please."; 
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`

    console.log(`Prompt`); 
   

    axios.get(apiUrl).then(displayName); 

}

let nameFormElement = document.querySelector("#name-generator-form"); 
nameFormElement.addEventListener("submit", generateName); 
