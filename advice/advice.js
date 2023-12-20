const loadData = () => {
    const URL = `https://api.adviceslip.com/advice`;
    fetch(URL)
        .then(res => res.json())
        .then(data => displayData(data.slip))
};
const displayData = (quote) => {
    // console.log(quote)
    const { id, advice } = quote;
    const cardContent = document.getElementById('card-content');
    cardContent.innerHTML = `
    <div class="card w-96 bg-slate-700 shadow-xl">
        <div class="card-body text-white">
            <h2 class="text-sm text-center font-semibold text-emerald-500">ADVICE #${id}</h2>
            <p class="text-center text-xl">"${advice}"</p>
            <hr class="h-px my-4 bg-gray-200 border-2 dark:bg-gray-700">
            <div class="card-actions justify-center">
                <button onclick ="loadData()" class="btn btn-primary">New quote</button>
            </div>
        </div>
    </div>
    `;
}
loadData()
