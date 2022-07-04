// Fisher-Yates shuffle algorithm
export const shuffleArray = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
};

export const capitalizeWords = (str) => {
    return str
        .split(' ')
        .map(
            (word) =>
                word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()
        )
        .join(' ');
};
