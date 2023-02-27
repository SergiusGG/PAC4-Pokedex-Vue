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
   
        return pokeApi.get("/"+Math.round(Math.random()*1008));

      

    },

    getOnePkm(name){
       

        return pokeApi.get("/"+name);
    },
    getSearchPkm(){

        return pokeApi.get("/");

      


    },

    getBulbasaur(){
            
            return pokeApi.get("/bulbasaur");
    
    
    },
    getChar(){
            
        return pokeApi.get("/charmander");


},
getSqrt(){
            
    return pokeApi.get("/squirtle");


},
getPika(){
            
    return pokeApi.get("/pikachu");


}
    
}
