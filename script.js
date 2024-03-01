document.addEventListener('DOMContentLoaded', () => {
    const generateWordBtn = document.getElementById('generateWordBtn');
    const wordDisplay = document.getElementById('wordDisplay');
    function getRandomNumber(quantity_of_nums){
        var milliseconds = new Date().getMilliseconds();
        return Math.floor(milliseconds * quantity_of_nums / 1000);
    }
    async function fetchWords() {
        const response = await fetch('words.json'); // Adjust the URL path as needed
        const words = await response.json();

        generateWordBtn.addEventListener('click', () => {
            //const randomIndex = Math.floor(Math.random() * words.length);
            const randomIndex = getRandomNumber(words.length);
            const word = words[randomIndex];
            wordDisplay.textContent = word;
        });
    }

    fetchWords().catch(error => console.error("Failed to fetch words:", error));
});
