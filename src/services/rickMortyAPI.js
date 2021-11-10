const URL = 'https://rickandmortyapi.com/api/character';


export const fetchRequest = async () => {
    const res = await fetch(URL);
    const jsonRes = await res.json();
    
    const data =jsonRes.results;
    
    return data;
    
};