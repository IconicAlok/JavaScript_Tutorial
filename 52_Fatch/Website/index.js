
// Fetch = function used for HTTP request to fetch resouces.
//          (JSON style data, images, files)
//          simplifies asynchronous data fetching in Javascript and 
//          used for iteracting with APIs to retrieve and send 
//          data asynchronously over the web.
//          fetch(url, {options})
//          fetch(url, {method:"GET"/"PUT"/"POST"/"DELETE"}) default is GET

// fetchData()

/*
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then(response => {
    if(!response.ok){
      throw new Error("could not fetch resources")
    }
    return response.json()
  })
  .then(data => console.log(data))
  .catch(error => console.log(error))
*/




// fetchData()

async function fetchData(){
  try {
    const pokemonName = document.getElementById("pokemonName").value.toLowerCase()
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    if(!response){
      throw new Error("Could not fetch resource")
    }
    const data = await response.json();
    // console.log(data)
    const pokemonSprite = data.sprites.front_default
    const imgElement = document.getElementById("pokemonSprite")

    imgElement.src = pokemonSprite
    imgElement.style.display = "block"

  } catch (error) {
    console.error(error)
  }
}
