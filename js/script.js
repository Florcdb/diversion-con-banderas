
/*document.getElementById(countries-list)

const countrieslist = async(countrieId)  => { 
try {
    const response = await fetch('https://restcountries.com/v3/all');
    console.log('https://restcountries.com/v3/all')
    if(!response.ok){
        throw new Error('Ha surgido un error', response.status);
    }
    const data = await response.json();
    const dataFilterId = data.filter((data) => data.countrieId == countrieId);
    return dataFilterId;
    } catch (error) {
        console.log(countrieslist)

    console.log('Error al obtener los datos', error);
  } 
}*/

document.addEventListener('DOMContentLoaded', function(){

const countrieslist = document.getElementById("countries-list");
fetch("https://restcountries.com/v3/all")
  .then((Response)=> Response.json())
  .then((data) => {
    console.log(data)

  const countries = data.sort()

    for (const country of countries){
        countrieslist.innerHTML +=`<li>
        <div class="bandera"> ${country.flag} </div> 
        <div class="nombre"> ${country.name.common}</div>  
        </li> `
    }
    //arrays.sort(countrieslist)


const infocountries= document.getElementById('infocountries');
document.addEventListener('click', function(){
    for (const infocountry of infocountries){
         infocountries.innerHTML +=`
         <div>
         Capital: ${country.capital} <br>
        Population : ${country.population} <br>
        Car Side: ${country.car.side}
        </div>`
    }
})


})
    .catch((error) => {
        console.error('Error al obtener los datos:', error);
  
    })

    
})



/*La información se ordena alfabéticamente.
Al clickar en cada una de las banderas tendrá que mostrar la información 
detallada en una ventana flotante del país seleccionado.
 La Muestra información detallada sobre el país seleccionado, 
 incluyendo la bandera, la capital, la población, 
 el lado de la carretera por el que se circula.
Tendrá un botón cerrar para hacer desaparecer esa información.*/
