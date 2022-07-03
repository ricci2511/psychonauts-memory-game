const API_URL = 'https://psychonauts-api.herokuapp.com/api/characters?limit=12';

export const fetchCharacters = async () => {
    const response = await fetch(`${API_URL}`);
    const data = await response.json();
    return data;
};
