const box = document.getElementById('box');
const title = document.getElementById('title');
const description = document.getElementById('description');
const country = document.getElementById('country');


const boxData = [
    {
        title: "Great Wall of China",
        description: "A massive fortification built to protect China from invasions, stretching over 13,000 miles and dating back to the 7th century BCE.",
        country: "China",
        image: "assests/great-wall-of-china.jpg"
    },
    {
        title: "Petra",
        description: "An ancient city carved into pink sandstone cliffs, known as the Rose City. It was a major trading hub of the Nabateans around 300 BCE.",
        country: "Jordan",
        image: "assests/petra.jpg"
    },
    {
        title: "Christ the Redeemer",
        description: "A 98-foot-tall statue of Jesus Christ atop Mount Corcovado in Rio de Janeiro, symbolizing peace and standing as one of the world's most famous landmarks.",
        country: "Brazil",
        image: "assests/christ-the-redeemer.jpg"
    },
    {
        title: "Machu Picchu",
        description: "A 15th-century Incan citadel located high in the Andes Mountains, featuring stunning stone architecture and terraces, often called the Lost City of the Incas.",
        country: "Peru",
        image: "assests/machu-picchu.jpg"
    },
    {
        title: "Chichén Itzá",
        description: "A pre-Columbian Mayan city known for the El Castillo pyramid, which served as a temple to the god Kukulkan and displays incredible astronomical precision.",
        country: "Mexico",
        image: "assests/chichen-itza.jpg"
    },
    {
        title: "Roman Colosseum",
        description: "An enormous amphitheater in Rome, built in 80 AD, where gladiatorial battles, public spectacles, and dramatic performances took place.",
        country: "Italy",
        image: "assests/roman-colosseum.jpg"
    }, 
    {
        title: "Taj Mahal",
        description: "A breathtaking white marble mausoleum built by Mughal Emperor Shah Jahan in the 17th century in memory of his wife, Mumtaz Mahal, symbolizing eternal love.",
        country: "India",
        image: "assests/taj-mahal.jpg"
    }
];

let currentIndex = 0;

function nextButton() {

    currentIndex = (currentIndex + 1) % boxData.length;

    box.style.backgroundImage = `url(${boxData[currentIndex].image})`;
    box.classList.add('fade');
    title.innerHTML = `${boxData[currentIndex].title}, <span>${boxData[currentIndex].country}</span>`;
    description.textContent = `${boxData[currentIndex].description}`;
}

function previousButton() {

    currentIndex = (currentIndex - 1 + boxData.length) % boxData.length;

    box.style.backgroundImage = `url(${boxData[currentIndex].image})`;
    title.innerHTML = `${boxData[currentIndex].title}, <span>${boxData[currentIndex].country}</span>`;
    description.textContent = `${boxData[currentIndex].description}`;
}

document.getElementById('nextButton').addEventListener('click', nextButton);
document.getElementById('prevButton').addEventListener('click', previousButton);