/////////////////////////////////////////////////////
//          IMPORT API
/////////////////////////////////////////////////////
import { geoAPI } from "./api/geolocation-api";

////////////////////////////////////////////////////
//          D O M 
////////////////////////////////////////////////////
const searchEl = document.getElementById('search');

searchEl.addEventListener('input',async ()=>{
    if(searchEl.value.trim() === ''){
        searchEl.classList.add('error')
        return;
    }
    try{
    searchEl.classList.remove('error');
    const city = await geoAPI({city:searchEl.value.trim()});
    console.log(city[0]);
    }catch(err){
        console.log(err);
    }
})