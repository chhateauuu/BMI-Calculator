function calculateBMI() {
    let heightValue = parseFloat(document.getElementById("height-value").value);
    let heightUnit = document.getElementById("height-unit").value;
    let weightValue = parseFloat(document.getElementById("weight-value").value);
    let weightUnit = document.getElementById("weight-unit").value;

    if (heightUnit === "in") {
        heightValue = heightValue * 0.0254; 
    } else if (heightUnit === "cm") {
        heightValue = heightValue / 100; 
    }

    if (weightUnit === "lb") {
        weightValue = weightValue * 0.453592;
    }

    if (heightValue && weightValue) {
        let bmi = (weightValue / (heightValue * heightValue)).toFixed(2);
        
        let resultMessage = `Your BMI is ${bmi}. `;
        

        document.querySelectorAll(".bmi-category").forEach(cat => cat.classList.remove('highlight'));

        if (bmi < 18.5) {
            document.querySelector(".underweight").classList.add('highlight');
            resultMessage += "You're on the lighter side. It's always good to consult with a healthcare provider about your health!";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            document.querySelector(".normal").classList.add('highlight');
            resultMessage += "You're within a healthy range! Keep up the good work and stay active!";
        } else if (bmi >= 25 && bmi < 29.9) {
            document.querySelector(".overweight").classList.add('highlight');
            resultMessage += "You're slightly above the average range. Stay active, and always consult with a healthcare provider for guidance!";
        } else if (bmi >= 30 && bmi < 35) {
            document.querySelector(".obese").classList.add('highlight');
            resultMessage += "A gentle nudge towards a healthier direction might be a good idea. Seek advice from a health expert!";
        } else {
            document.querySelector(".very-obese").classList.add('highlight');
            resultMessage += "It's essential to seek advice from a healthcare provider to ensure you're on a healthy track.";
        }

        document.getElementById("result").textContent = resultMessage;
    


        let resultElement = document.getElementById("result");
    resultElement.style.opacity = 0; // Set to transparent
    setTimeout(() => {
        resultElement.style.transition = "opacity 0.5s ease-in-out";
        resultElement.style.opacity = 1; // Fade in
    }, 50);
    } 
    
    

    else {
        document.getElementById("result").textContent = "Please fill in both fields correctly.";
    }
}


