function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function appendToDisplay(value) {
    const display = document.getElementById('display');
    
    // Remove commas from the displayed number to handle user input
    const currentValue = display.value.replace(/,/g, '');

    // Add the clicked value to the current value
    const newValue = currentValue + value;

    // Format the new value with commas
    const formattedValue = formatNumberWithCommas(newValue);
    display.value = formattedValue;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        // Remove commas from the displayed number before calculating
        const displayWithoutCommas = display.value.replace(/,/g, '');

        // Evaluate the expression and format the result with commas
        const result = eval(displayWithoutCommas);
        const formattedResult = formatNumberWithCommas(result);

        display.value = formattedResult;

        // Clear the display after displaying the result
        setTimeout(() => {
            clearDisplay();
        }, 2000); // Adjust the delay (in milliseconds) before clearing the display as needed
    } catch (error) {
        display.value = 'Error';
    }
}
function calculatePercentage() {
    const display = document.getElementById('display');
    try {
        // Remove any percentage sign (%) from the display before calculating
        const displayWithoutPercentage = display.value.replace('%', '');

        // Calculate the percentage
        const result = eval(displayWithoutPercentage) / 100;

        // Format the result with commas
        const formattedResult = formatNumberWithCommas(result);

        display.value = formattedResult;

        // Clear the display after displaying the result
        setTimeout(() => {
            clearDisplay();
        }, 2000); // Adjust the delay (in milliseconds) before clearing the display as needed
    } catch (error) {
        display.value = 'Error';
    }
}

function calculatePercentage() {
    const display = document.getElementById('display');
    try {
        // Remove any percentage sign (%) from the display before calculating
        const displayWithoutPercentage = display.value.replace('%', '');

        // Calculate the percentage
        const result = eval(displayWithoutPercentage) / 100;

        // Format the result with commas
        const formattedResult = formatNumberWithCommas(result);
        display.value = formattedResult;
    } catch (error) {
        display.value = 'Error';
    }
}
