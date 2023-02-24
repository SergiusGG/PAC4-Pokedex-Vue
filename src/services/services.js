import axios from "axios"

const pokeApi = axios.create({
    baseURL:`https://pokeapi.co/api/v2/pokemon`,
    withCredentials:false,
    headers:{
        Accept:"application/json",
        "Content-Type":"application/json",
    }
})

export default{
    getPkm(){
   
        return pokeApi.get("/"+Math.round(Math.random()*1279));

      

    },

    getOnePkm(name){
       

        return pokeApi.get("/"+name);
    },
    getSearchPkm(){

        return pokeApi.get("/");

      


    },

    getListPkm(){
            
            return pokeApi.get("/"+Math.round(Math.random()*10));
    
    
    }
    
}