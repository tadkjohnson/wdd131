document.getElementById('currentyear').textContent = new Date().getFullYear();

document.getElementById(`LastModified`).textContent = `Last Modified: ${document.lastModified}`;

const navigation = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    navigation.classList.toggle('show');
    hambutton.classList.toggle('show');
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Fort Lauderdale Florida",
        location: "Davie, Florida",
        dedicated: "2014, May 4",
        area: 30, 500,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/fort-lauderdale-florida-temple/fort-lauderdale-florida-temple-11108.jpg"
    },


    {
        templeName: "Atlanta Georgia",
        location: "Sandy Springs, Georgia",
        dedicated: "1983, June 4",
        area: 34, 500,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/atlanta-georgia-temple/atlanta-georgia-temple-3859.jpg"

    },


    {
        templeName: "Monticello Utah",
        location: "Monticello, Utah",
        dedicated: "1998, July 27",
        area: 11, 225,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/monticello-utah-temple/monticello-utah-temple-53337.jpg"
    },

    {
        templeName: "Bangkok Thailand",
        location: "Ratchathewi, Bangkok",
        dedicated: "2023, October 22",
        area: 48, 525,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/bangkok-thailand-temple/bangkok-thailand-temple-40037.jpg"
    },

    {
        templeName: "Bern Switzerland",
        location: "Zollikofen, Switzerland",
        dedicated: "1992, October 25",
        area: 35, 546,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/bern-switzerland-temple/bern-switzerland-temple-50470.jpg"
    },

];

const oldlink = document.querySelector("#old");
const newlink = document.querySelector("#new");
const largelink = document.querySelector("#large");
const smalllink = document.querySelector("#small");

oldlink.addEventListener("click, () => {
    createTempleCard(temples.filtered(temple => !temple.dedicated.includes("20")));
})
newlink.addEventListener("click, () => {
    createTempleCard(temples.filtered(temple => temple.dedicated.includes("20")));
})
largelink.addEventListener("click, () => {
    createTempleCard(temples.filtered(temple => temple.area.> ("50000")));
})
smalllink.addEventListener("click, () => {
    createTempleCard(temples.filtered(temple => temple.area.=< ("50000")));
})



createTempleCard(temples);

function_createTempleCard(filteredTemples) {
    document.querySelector(".grid1").innerHTML = "";
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textcontent = temple.templeName;
        location.innerHTML = '<span class="label">Location:</span> ${temple.location}';
        dedication.innerHTML = '<span class="label">Dedicated:</span> ${temple.dedicated}';
        area.innerHTML = '<span class="label">area:</span> ${temple.dedicated}';
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", '${temple.templeName} Temple');
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".grid1").appendChild(card);)

})
}




