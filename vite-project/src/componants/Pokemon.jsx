import { useEffect, useState } from "react"
import Card from "./Card";

function Pokemon() {
    const [pokemon ,setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const API = "https://pokeapi.co/api/v2/pokemon?limit=100";

    const fetchPokemon = async () => {
        try {
            const res = await fetch(API);
            const data = await res.json();
            const detailedPokemonData = data.results.map(async (obj) => {
                const res = await fetch(obj.url);
                const data = await res.json();
                return data
            });
            const detailsRes = await Promise.all(detailedPokemonData);
            setPokemon(detailsRes);
            setLoading(false);
              
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchPokemon();
    },[]);

return (
    <div className="pokemon-container">
            {!loading ? pokemon.map(currPoken => {
                // console.log(currPoken.types.map(type => type.name))
                    return <Card 
                    name={currPoken.name} 
                    key={currPoken.id}
                    image={currPoken.sprites.other.dream_world.front_default} 
                    types={currPoken.types}/>
            }) : <p>Loading...</p>}
    </div>
)
}

export default Pokemon