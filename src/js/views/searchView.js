import { elements } from './base';
export const getInput = ()=> elements.searchInput.value;
export const clearInput = () =>{
    elements.searchInput.value='';
} 
export const clearResult= () =>{
    elements.searchResult.innerHTML='';
} 

const renderAddress = address => {
    const template =`<li>${address.street} ${address.zip_code} ${address.city}</li>`;
    elements.searchResult.insertAdjacentHTML('beforeend',template);
}
export const renderResults = address =>{
    address.forEach(renderAddress);
}