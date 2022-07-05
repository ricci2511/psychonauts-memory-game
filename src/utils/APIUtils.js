const API_URL = 'https://psychonauts-api.herokuapp.com/api/characters';

export const fetchCharacters = async (currentDifficulty) => {
    const response = await fetch(
        `${API_URL}?limit=${currentDifficulty.maxScore}`
    );
    const data = await response.json();
    return data;
};
