const URL = 'https://rickandmortyapi.com/api/character';


export const fetchRequest = async () => {
    const res = await fetch(URL);
    const jsonRes = await res.json();
    
    const data =jsonRes.results;
    
    return data;
    
};

export const fetchOneCharacter = async (id) => {
    const res = await fetch(`${URL}/${id}`);

    const desiredCharacter = await res.json();
     
    return desiredCharacter;
}