document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById(`LastModified`).textContent = `Last Modified: ${document.lastModified}`;
// this above is the date stuff  modified and year .




const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];
  


const select = document.getElementById(`future`);
// function populateProductSelect() {
//     const select = document.getElementById("future");
// }
    
select.innerHTML = '<option value="" disabled selected>Select a Product</option>';

  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    select.appendChild(option);
  });

document.addEventListener("DOMContentLoaded", () => {
    populateProductSelect();

    // local storage counter
    let reviewCount = localStorage.getItem("reviewCount");

    //starts at 0 if no counter there.  
if (!reviewCount) {
    reviewCount = 0;
} else {
    reviewCount = parseInt(reviewCount, 10);
    
}
reviewCount += 1;
localStorage.setItem("reviewCount", reviewCount);

const display = document.getElementById("reviewCountDisplay");
if (display) { 
    display.textContent = `You have submitted ${reviewCount} review(s)`;
}
});







t.addEventListener("DOMContentLoaded", () => {
    // Populate the select dropdown
    populateProductSelect();

    const form = document.querySelector("form");

    form.addEventListener("submit", () => {
        let reviewCount = localStorage.getItem("reviewCount");
        reviewCount = reviewCount ? parseInt(reviewCount, 10) : 0;
        reviewCount += 1;
        localStorage.setItem("reviewCount", reviewCount);
    });
});



























































// // Populate product select dropdown
// function populateProductSelect() {
//   const select = document.getElementById("future");
//   products.forEach(product => {
//     const option = document.createElement("option");
//     option.value = product.id;
//     option.textContent = product.name;
//     select.appendChild(option);
//   });
// }


// const select = document.getElementById(`future`);
// // function populateProductSelect() {
// //     const select = document.getElementById("future");
// // }
    
// select.innerHTML = '<option value="" disabled selected>Select a Product</option>';

//   products.forEach(product => {
//     const option = document.createElement("option");
//     option.value = product.id;
//     option.textContent = product.name;
//     select.appendChild(option);
//   });

// document.addEventListener("DOMContentLoaded", () => {
//     populateProductSelect();

//     // local storage counter
//     let reviewCount = localStorage.getItem("reviewCount");

//     //starts at 0 if no counter there.  
// if (!reviewCount) {
//     reviewCount = 0;
// } else {
//     reviewCount = parseInt(reviewCount, 10);
    
// }
// reviewCount += 1;
// localStorage.setItem("reviewCount", reviewCount);

// const display = document.getElementById("reviewCountDisplay");
// if (display) { 
//     display.textContent = `You have submitted ${reviewCount} review(s)`;
// }
// });

