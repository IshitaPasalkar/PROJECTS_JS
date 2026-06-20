document.getElementById("Convert").addEventListener("click", function () {

    const tempValue = parseFloat(
        document.getElementById("TemperatureInput").value
    );

    const conversion = document.getElementById("ConversionType").value;

    const result = document.getElementById("results");

    result.innerHTML = "";

    if (isNaN(tempValue)) {
        result.innerHTML = "Please enter a valid value";
        return;
    }

    let convertedTemperature;

    if (conversion === "toCelsius") {

        convertedTemperature = (tempValue - 32) * (5 / 9);

        result.innerHTML =
            `${tempValue}°F is equal to ${convertedTemperature.toFixed(2)}°C`;

    } else if (conversion === "toFahrenheit") {

        convertedTemperature = tempValue * (9 / 5) + 32;

        result.innerHTML =
            `${tempValue}°C is equal to ${convertedTemperature.toFixed(2)}°F`;
    }

});