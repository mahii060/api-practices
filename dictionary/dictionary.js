const loadData = (word) => {
    const searchText = document.getElementById('search-text').value;
    const searchWord = word || searchText;
    const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`;
    fetch(URL).then(res => res.json()).then(data => displayData(data[0]))
    document.getElementById('search-text').value = '';
}
const displayData = (words) => {
    console.log(words.meanings[1].definitions[1].example)
    // const { word, phonetic, meanings } = words
    const dictionaryContainer = document.getElementById('dictionary-container');
    dictionaryContainer.innerHTML = '';
    const wordContainer = document.createElement('div');
    wordContainer.classList.add('card');
    wordContainer.innerHTML = `
    <div class="card-body">
        <h1 class="card-title">${words.word}</h1>
        <p class ="text-primary">${words.phonetic}</p>
        <h5>Noun</h5> <hr class ="w-75 text-secondary">
        <h5>Meaning</h5>
        <ul>
            <li>${words.meanings[0].definitions[0].definition}</li>
            <li>${words.meanings[0].definitions[1].definition}</li>
            <li>${words.meanings[0].definitions[2].definition}</li>
            <li>${words.meanings[0].definitions[3].definition}</li>
        </ul>
        <h5>Synonymous: <span class ="text-secondary">${words.meanings[0].synonyms[0]}</span></h5>
        <h5>Verb</h5> <hr class ="w-75 text-secondary">
        <h5>Meaning</h5>
        <ul>
            <li>${words.meanings[1].definitions[0].definition}</li>
            "${words.meanings[1].definitions[1].example}"
        </ul>
    </div>
    `;
    dictionaryContainer.appendChild(wordContainer);
}
loadData('welcome')