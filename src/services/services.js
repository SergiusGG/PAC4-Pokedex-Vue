import axios from "axios"

const pokeApi = axios.create({
    baseURL:`https://pokeapi.co/api/v2/pokemon`,
//      random : Math.round(Math.random()*1279),
//  urlDef: baseURL + random,
    withCredentials:false,
    headers:{
        Accept:"application/json",
        "Content-Type":"application/json",
    }
})

export default{
    getPkm(){
        // const url=`https://pokeapi.co/api/v2/pokemon/?offset=10&limit=10`;

        // let values =+prompt("Introduce numero pokemons");
        // const pokimons=new Array;

        // for(let i=1;i<=values; i++){

        
            // const url=`https://pokeapi.co/api/v2/pokemon`;
            // const random = Math.round(Math.random()*1279);
            // const urlDef= url + random;
        return pokeApi.get("/"+Math.round(Math.random()*1279));

        // pokimons.push(pokeApi.get(urlDef));


        // }
        // for (let index = 0; index < numPkm; index++) {
      
            
        // }
    //     console.log(pokimons);
    //    return pokimons;
      


    },

    getOnePkm(name){
        // const url=`https://pokeapi.co/api/v2/pokemon/bulbasaur`;
        //   const random = Math.round(Math.random(10)*1279);
        //   const urlDef= url + random;
        // const url=`https://pokeapi.co/api/v2/pokemon/${id}`;

        return pokeApi.get("/"+name);
    },
    getSearchPkm(){

        return pokeApi.get("/");

      


    },
}