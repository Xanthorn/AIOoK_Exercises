var score = document.getElementById("score");
var mark = document.getElementById("mark");
var result = document.getElementById("result");

var firstNumber = document.getElementById("firstNumber");
var secondNumber = document.getElementById("secondNumber");

var distanceResult = document.getElementById("distanceResult");

var firstPoint = {
    x: document.getElementById("firstX"),
    y: document.getElementById("firstY"),
    typeOfX: document.querySelector('input[name="typeOfFirstX"]:checked'),
    typeOfY: document.querySelector('input[name="typeOfFirstY"]:checked')
};

var secondPoint = {
    x: document.getElementById("secondX"),
    y: document.getElementById("secondY"),
    typeOfX: document.querySelector('input[name="typeOfSecondX"]:checked'),
    typeOfY: document.querySelector('input[name="typeOfSecondY"]:checked')
};

function firstCheck() {
    if (isNaN(parseInt(firstNumber.value))) {
        result.textContent = "Only numbers !!";
        this.value = "";
    } else {
        result.textContent = "";
    }
}

function secondCheck() {
    if (isNaN(parseInt(secondNumber.value))) {
        result.textContent = "Only numbers !!";
        this.value = "";
    } else {
        result.textContent = "";
    }
}

function addition() {
    let first = parseInt(firstNumber.value);
    let second = parseInt(secondNumber.value);

    if (!isNaN(first) && !isNaN(second)) {
        score.textContent = first + second;
        mark.textContent = "+";
    } else {
        result.textContent = "Please put some numbers in the given fields!";
    }
}

function subtraction() {
    let first = parseInt(firstNumber.value);
    let second = parseInt(secondNumber.value);

    if (!isNaN(first) && !isNaN(second)) {
        score.textContent = first - second;
        mark.textContent = "-";
    } else {
        result.textContent = "Please put some numbers in the given fields!";
    }
}

function multiplication() {
    let first = parseInt(firstNumber.value);
    let second = parseInt(secondNumber.value);
    if (!isNaN(first) && !isNaN(second)) {
        score.textContent = first * second;
        mark.textContent = "*";
    } else {
        result.textContent = "Please put some numbers in the given fields!";
    }
}

function division() {
    let first = parseInt(firstNumber.value);
    let second = parseInt(secondNumber.value);
    if (second == 0) {
        result.textContent = "Cannot divide by 0";
        this.value = "";
    } else if (!isNaN(first) && !isNaN(second)) {
        score.textContent = first / second;
        mark.textContent = "/";
    } else {
        result.textContent = "Please put some numbers in the given fields!";
    }
}

function exponentiation() {
    let first = parseInt(firstNumber.value);
    let second = parseInt(secondNumber.value);

    if (!isNaN(first) && !isNaN(second)) {
        let result = first;

        if (second === 0) {
            result = 1;
        }

        for (let i = 1; i < second; i++) {
            result = result * first;
        }

        score.textContent = result;
        mark.textContent = "^";
    } else {
        result.textContent = "Please put some numbers in the given fields!";
    }
}

function validateLatitude(x) {
    if (isNaN(parseInt(x.value))) {
        result.textContent = "Only numbers !!";
        this.value = "";
    } else {
        result.textContent = "";
    }
}

function calculateDistance() {
    let firstX = parseInt(firstPoint.x.value);
    let firstY = parseInt(firstPoint.y.value);
    let secondX = parseInt(secondPoint.x.value);
    let secondY = parseInt(secondPoint.y.value);

    if (firstPoint.typeOfX.value === "S") {
        firstX *= -1;
    }

    if (firstPoint.typeOfY.value === "W") {
        firstY *= -1;
    }

    if (secondPoint.typeOfX.value === "S") {
        secondX *= -1;
    }

    if (secondPoint.typeOfY.value === "W") {
        secondY *= -1;
    }

    let beforeSqrt = (secondX - firstX) * (secondX - firstX) + (secondY - firstY) * (secondY - firstY);
    let output = Math.sqrt(beforeSqrt);
    distanceResult.value = output;
}

function showDistanceCalculator() {
    document.getElementById("standardInput").style.display = "none";
    document.getElementById("actionMenu").style.display = "none";
    document.getElementById("coordinatesInput").style.display = "block";
}

function hideDistanceCalculator() {
    document.getElementById("standardInput").style.display = "block";
    document.getElementById("actionMenu").style.display = "block";
    document.getElementById("coordinatesInput").style.display = "none";
}