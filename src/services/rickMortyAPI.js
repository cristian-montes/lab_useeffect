const URL = 'https://rickandmortyapi.com/api/character';


export const fetchRequest = async () => {
    const res = await fetch(URL);
    const jsonRes = await res.json();
 
   return jsonRes.results.map(({id, name, gender, image, origin, status, species})=>({
        id,
        name,
        gender, 
        image, 
        origin, 
        status, 
        species

    }))
    
};