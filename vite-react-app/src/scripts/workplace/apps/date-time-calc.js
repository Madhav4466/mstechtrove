export const yearsCalculator = (startDate, tillDate) => {
    const currentDate = tillDate ? new Date(tillDate) : new Date();
    const initialDate = new Date(startDate);
    if( initialDate > currentDate ) return { error: "Start date is in the future!!"};
    let totalYears = (currentDate.getFullYear() - initialDate.getFullYear() -1);
    
    // If current month is greater than joining month and difference is more than 12 months, add 1 year
    const currentMonth = currentDate.getMonth();
    const joiningMonth = initialDate.getMonth();
    const totalMonthsDifference = currentMonth + (12 * totalYears) - joiningMonth;
    if(currentMonth > joiningMonth && totalMonthsDifference > 12) {
        totalYears += 1;
    }
    
    return totalYears;
}

export const yearAndMonthsCalculator = (startDate, tillDate) => {
    const currentDate = tillDate ? new Date(tillDate) : new Date();
    const initialDate = new Date(startDate);
    if( initialDate > currentDate ) return { error: "Start date is in the future!!"};

    // Calculate exact years and months
    let totalYears = currentDate.getFullYear() - initialDate.getFullYear();
    let totalMonths = currentDate.getMonth() - initialDate.getMonth();
    
    // Adjust if months is negative
    if(totalMonths < 0) {
        totalYears -= 1;
        totalMonths += 12;
    }
    
    // If less than a year, return 0 years
    if(totalYears < 0) {
        totalYears = 0;
    }
    
    return { years: totalYears, months: totalMonths };
}