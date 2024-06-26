function calculate(section) {
    let input1 = parseFloat(document.getElementById(`input1-${section}`).value) || 0;
    let input2 = parseFloat(document.getElementById(`input2-${section}`).value) || 0;
    let tax = parseFloat(document.getElementById(`tax-${section}`).value) || 0;
    
    let utgiftTot = 0;
    let prisPer = 0;

    // Define calculations for each section
    switch(section) {
        case 't4':
            utgiftTot = calculateT4(input1, input2+input2, (tax * 1.58));
            prisPer = calculatePrisPerT4(utgiftTot);
            break;
        case 't5':
            utgiftTot = calculateT5(input1, input2+input2+input2, (tax * 1.58));
            prisPer = calculatePrisPerT5(utgiftTot);
            break;
        case 't6':
            utgiftTot = calculateT6(input1, input2+input2+input2+input2, (tax * 1.58));
            prisPer = calculatePrisPerT6(utgiftTot);
            break;
        case 't7-t8':
            utgiftTot = calculateT7T8(input1, input2+input2+input2+input2+input2, (tax * 1.58));
            prisPer = calculatePrisPerT7T8(utgiftTot);
            break;
        default:
            break;
    }
    
    document.getElementById(`utgift-tot-${section}`).textContent = utgiftTot.toFixed(2);
    document.getElementById(`pris-per-${section}`).textContent = Math.round(prisPer); // Rounded to the nearest whole number
}

function calculateT4(input1, input2, tax) {
    // Custom calculation logic for T4
    return input1 + input2 + tax; // Example calculation, adjust as needed
}

function calculatePrisPerT4(utgiftTot) {
    // Custom calculation logic for T4
    return utgiftTot / 1.58; // Example calculation, adjust as needed
}

function calculateT5(input1, input2, tax) {
    // Custom calculation logic for T5
    return input1 + input2 + tax; // Example calculation, adjust as needed
}

function calculatePrisPerT5(utgiftTot) {
    // Custom calculation logic for T5
    return utgiftTot / 1.58; // Example calculation, adjust as needed
}

function calculateT6(input1, input2, tax) {
    // Custom calculation logic for T6
    return input1 + input2 + tax; // Example calculation, adjust as needed
}

function calculatePrisPerT6(utgiftTot) {
    // Custom calculation logic for T6
    return utgiftTot / 1.58; // Example calculation, adjust as needed
}

function calculateT7T8(input1, input2, tax) {
    // Custom calculation logic for T7/T8
    return input1 + input2 + tax; // Example calculation, adjust as needed
}

function calculatePrisPerT7T8(utgiftTot) {
    // Custom calculation logic for T7/T8
    return utgiftTot / 1.58; // Example calculation, adjust as needed
}
