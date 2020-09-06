import axios from 'axios';
import * as searchView from './views/searchView';
import { elements } from './views/base';
async function getEmployeeRes(){
    try {
        let q=searchView.getInput();
        let res=await axios('https://www.yellow-24.cab/yellow_cabs/webservice/common/getMongoDbAddress?q='+q);
        res=res.data;
        console.log(res);    
        searchView.clearResult();
        searchView.clearInput();
        searchView.renderResults(res);
        
    } catch (error) {
        console.log(error);
    }
}
elements.searchBtn.onclick = ()=>{
    getEmployeeRes();
}