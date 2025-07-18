document.getElementById('currentyear').textContent = new Date().getFullYear();

document.getElementById(`LastModified`).textContent = `Last Modified: ${document.lastModified}`;

const calculateWindChill = (temp, speed, unit = "F") => 
  (unit === "F" && temp <= 50 && speed >= 3) 
    ? (35.74 + 0.6215 * temp - 35.75 * speed**0.16 + 0.4275 * temp * speed**0.16).toFixed(1) + " °F"
    : (unit === "C" && temp <= 10 && speed >= 4.8)
    ? (13.12 + 0.6215 * temp - 11.37 * speed**0.16 + 0.3965 * temp * speed**0.16).toFixed(1) + " °C"
    : "N/A";
    



      

// window.addEventListener("load", function () {
//     const temp = parseFloat(document.getElementById("temperature").textContent);
//     const windSpeed = parseFloat(document.getElementById("windspeed").textContent);
//     const windChillElement = document.getElementById("windchill");

//     function calculateWindChill(t, v) {
//       if (t <= 50 && v >= 3.0) {
//         const chill = 35.74 + (0.6215 * t) - (35.75 * Math.pow(v, 0.16)) + (0.4275 * t * Math.pow(v, 0.16));
//         return `${chill.toFixed(1)} °F`;
//       } else {
//         return "N/A";
//       }
//     }

//     windChillElement.textContent = calculateWindChill(temp, windSpeed);
//   });
