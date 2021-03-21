
async function main(){
    let element = document.getElementById('pokemonOffset');
    let offset = element.value * 20;
    element.value = parseFloat(offset)+1;
    let url = "https://pokeapi.co/api/v2/pokemon/?offset="+offset+"&limit=20";

    let data = await getDataFromUrl(url);
   // await displayData(data);
}

async function getDataFromUrl(url) {

    console.log('Fetch started')

    fetch(url)
      .then(response => {
        // response is here raw response
        // developer should decode response(parse it depending on data type (JSON), check response status (404 responses will also happen here))
        console.log('Response', { response })

        // status can be better checked (e.g. interval 199-299, `ok` property, ...)
        if (response.status === 200) {
          response.json().then(decodedData => {
            console.log('Decoded response', decodedData)
            displayData(decodedData.results);
          })
        } else {
          console.log('Response status code is not OK!')
        }
      })
      // if error occurs log to console as error
      .catch(console.error)
      // finally will be always called when promise finished (`then` or `catch`)
      .finally(() => {
        console.log('Fetch finished!')
      })
}


function deleteElement(id){
    document.getElementById(id).remove();
}

async function displayData(data){
    let innerContainer = document.getElementById('data-container');
    let ul = document.createElement("UL");
    ul.classList.add("mx-3")

    for(let i=0; i<data.length; ++i){
        let li = document.createElement("LI");

        li.classList.add("list-element");
        li.title ="Delete element";
        li.innerText = data[i].name;
        li.id = data[i].name;
        li.onclick = function() { 
            this.remove();
        };

        ul.appendChild(li);
    }

    innerContainer.appendChild(ul);
}
