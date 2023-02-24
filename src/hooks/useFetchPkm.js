// import PruebaGetPkm from "../services/PruebaGetPkm"
// import getPkm from "../services/PruebaGetPkm"
import pokeApi from "../services/services.js"

const services={
    // async getPkmsApi(keyWord){
    //     return await pokeApi.getPkm(keyWord)
    // }
    async getPkmsApi(){
        return await pokeApi.getPkm()
    }
}



export {
    services
}