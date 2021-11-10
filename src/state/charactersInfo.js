// /* eslint-disable react-hooks/exhaustive-deps */

// import { useEffect, useState } from "react";
// import { fetchRequest } from "../services/rickMortyAPI";


// export const useCharacterData =  () =>{
//     const [loading, setLoading] = useState(true);
//     const [ characters, setCharacters] = useState([]);

//     useEffect( () => {
//         const charactersData = await fetchRequest();
//         setCharacters(charactersData);
//         setLoading(false);

//     },[]); // second argument '[]'is passed to only activate this hook on the first render.

//     return {loading, characters}
// };

