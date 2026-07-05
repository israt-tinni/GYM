const trainers = [
    {
        image: "./images/trainers/trainer-1.png",
        name: "Victoria Shurpik"
    },
    {
        image: "./images/trainers/trainer-2.png",
        name: "Elizabeth Lavrinenko"
    },
    {
        image: "./images/trainers/trainer-3.png",
        name: "Ivan Gladkikh"
    },
    {
        image: "./images/trainers/trainer-4.png",
        name: "Vladislav Kovalenko"
    },
    {
        image: "./images/trainers/trainer-5.png",
        name: "Olga Kovalenko"
    },
    {
        image: "./images/trainers/trainer-6.png",
        name: "Dmitry Petrov"
    },
    {
        image: "./images/trainers/trainer-7.png",
        name: "Anna Volkova"
    },
    {
        image: "./images/trainers/trainer-8.png",
        name: "Mikhail Sokolov"
    },
]

function trainersId() {
    const trainerInfo = document.getElementById('trainerInfo');
    trainerInfo.innerHTML = trainers.map(val => `
        <div class="trainers-id">
            <img class="trainer-img" src="${val.image}">
            <p>${val.name}</p>
            <div class="logo">
                <div class="logo-icon">
                    <a href="#">
                        <i class="fa-brands fa-instagram trainerLogo"></i>
                    </a>
                </div>
                <div class="logo-icon">
                    <a href="#">
                        <i class="fa-brands fa-twitter trainerLogo"></i>
                    </a>
                </div>
                <div class="logo-icon">
                    <a href="#">
                        <i class="fa-brands fa-facebook trainerLogo"></i>
                    </a>
                </div>
            </div>
        </div>
    `).join('')
}

window.addEventListener("DOMContentLoaded",trainersId);