const person = {
    found: 2,
    message: "Found 2 persons",
    result: [
        {
            name: {
                common: "John",
                fullName: ["John", "Doe"]
            },
            age: 32,
            isMale: false,
            address: {
                street: "13/A St Joseph",
                house: 10,
            },
        },
        {
            name: {
                common: "Humayoun",
                fullName: ["Humayoun", "Kabir"]
            },
            age: 33,
            isMale: false,
            address: {
                street: "13/A St Lucia",
                house: 11,
            },
        },
    ]
};
// console.log(person.result[0].name.common)
const showData = () => {
    const persons = person.result;
    // console.log(persons)
    persons.forEach((person) => {
        // console.log(person)
        const usersContainer = document.getElementById('users-container');
        const userContainer = document.createElement('div');
        userContainer.classList.add('col');
        userContainer.innerHTML = `
        <div class="card">
            <div class=" py-4 ps-4 border border-light-subtle rounded">
                <h4 class="bg-body-tertiary header py-2 rounded">Person Name: ${person.name.common}</h4>
                <h5>Age: ${person.age}</h5>
                <h5>Age: ${person.address.street}, House: ${person.address.house}</h5>
                
            </div>
        </div>
        `;
        usersContainer.appendChild(userContainer)
    })
}
showData()