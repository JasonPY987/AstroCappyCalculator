    // Write your JavaScript code here! 
    var planets = [ 
        ['Pluto', 0.06], 
        ['Neptune', 1.148], 
        ['Uranus', 0.917], 
        ['Saturn', 1.139], 
        ['Jupiter', 2.640], 
        ['Mars', 0.3895], 
        ['Moon', 0.1655], 
        ['Earth', 1], 
        ['Venus', 0.9032], 
        ['Mercury', 0.377], 
        ['Sun', 27.9] 
    ];

    function populatePlanets(){
        const planetsDropdown = document.getElementById('planets')

        planets.reverse().forEach(function(planet) {
            const option = document.createElement('option')
            option.value = planet[0];
            option.textContent = planet[0];
            planetsDropdown.appendChild(option);
        })
    }

    function handleClickEvent() {
        let userWeight = parseFloat(document.getElementById('user-weight').value);
        let planetsDropdown = document.getElementById('planets');
        let planetName = planetsDropdown.value;
        let planetMultiplier = planets.find(planet => planet[0] === planetName)[1];
        let result = userWeight * planetMultiplier

        let formattedResult = result.toFixed(2).replace(/\.00$/, '').replace(/(\.\d)0$/, '$1');

        let output = document.getElementById('output');
        output.textContent = `If you were on ${planetName}, you would weigh ${formattedResult}lbs!`;
    } 

document.getElementById('calculate-button').addEventListener('click', handleClickEvent);

window.onload = populatePlanets

/////////////////////////// CAPPY TIME

document.addEventListener('DOMContentLoaded', function() { // main index button picture!
    var capybara = document.getElementById('floating-capybara');
    var capybaraWidth = capybara.offsetWidth;
    var capybaraHeight = capybara.offsetHeight;
    var speedX = 2; 
    var speedY = 2; 
    var posX = 0; // position of the image 
    var posY = 0; 

    function updatePosition() {
        posX += speedX;
        posY += speedY;


        if (posX + capybaraWidth > window.innerWidth || posX < 0) {
            speedX *= -1; 
        }


        if (posY + capybaraHeight > window.innerHeight || posY < 0) {
            speedY *= -1; 
        }

        // Apply the new position
        capybara.style.left = posX + 'px';
        capybara.style.top = posY + 'px';

        requestAnimationFrame(updatePosition);
    }

    updatePosition(); // starts animation
});

// calculate equivulant of the capys

document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('calculate-button');
    button.addEventListener('click', function() {
        const userWeight = parseFloat(document.getElementById('user-weight').value);
        const mainOutput = document.getElementById('main-output');
        const comparisonList = document.getElementById('capybara-comparison');

        if (!userWeight || userWeight <= 0) {
            mainOutput.textContent = "Please enter a valid weight.";
            comparisonList.style.display = 'none'; // Hide the list if input is invalid
        } else {
            mainOutput.textContent = "You weigh approximately:";
            comparisonList.style.display = 'block'; // Show the list when data is valid

            const weights = {
                "Child Capybaras (20 lbs)": 20,
                "Teen Capybaras (50 lbs)": 50,
                "Adult Capybaras (77 lbs)": 77
            };

            // Clear previous list items
            comparisonList.innerHTML = '';

            // Append new calculations to the list
            for (let key in weights) {
                const capybaras = userWeight / weights[key];
                const li = document.createElement('li');
                li.textContent = `You weigh approximately: ${capybaras.toFixed(2)} ${key}:  `;
                comparisonList.appendChild(li);
            }
        }
    });
});