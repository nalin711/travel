
const search_text = document.getElementById('search')
const searchBtn = document.getElementById('searchBtn')
const clearBtn = document.getElementById('clearBtn')
const result_display = document.querySelector('.overlay_text')

/* 
Fetch data from the travel_recommendation_api.json file using the fetch API method, 
from there you can fetch travel-related details, such as the name of the place. 
You need to have your own images for every imageUrl in the JSON file.
*/

// Fetch data from the travel_recommendation_api.json file
function searchLocation() {
    search = search_text.value.toLowerCase();
    fetch('http://localhost:8000/travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {
            /* do operations on data */
            console.log(Object.keys(data));
            
            const result = data[`${search}`];

            for (let i of result) {
                console.log(Object.keys(i));
                let newdiv = document.createElement('div');
                newdiv.innerHTML = '';
                // inser image
                // insert name
                // insert description
                newdiv.innerHTML += `<p>${Object.values(i)}</p>`;
                result_display.appendChild(newdiv);
            }
        })
        .catch(error => {
            console.error('Error',error);
        });
}

/*get value from search bar
function searchLocation(){
    search = search_text.value.toLowerCase();
    switch(search){
        case 'beaches':
            console.log('beaches searched');
            displayLocation(recommendations.beaches);
            break;
        case 'temples':
            break;
        case 'countries':
            console
            break;
    }
}
*/

function reset() {
    document.getElementById('search').value='';
}

function displayLocation(data) {
    let newdiv = document.createElement('div');
    newdiv.innerHTML = '';
    newdiv.innerHTML += `<p>${data}</p>`;
    result.appendChild(newdiv);
    console.log("displaylocation called");
}
searchBtn.addEventListener('click', searchLocation)
clearBtn.addEventListener('click', reset)