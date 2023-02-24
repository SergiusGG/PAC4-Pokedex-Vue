// const apikey="https://pokeapi.co/api/v2/pokemon/"

export default function getPkm(keyword){
    const apiUrl=`https://pokeapi.co/api/v2/pokemon/pikachu/`
    return fetch(apiUrl)
    .then((res)=>res.json())
    .then((response)=>{
        const {results}=response
        const pkm=results.map((sprite)=>{
            const {sprites, name, id}=sprite
            const {url}= sprite.sprites.front_default
            return {name, id, url}
        })
        return pkm
    })
}