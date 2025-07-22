export const yearsCalculator = (startDate) => {
    const currentDate = new Date();
    const initialDate = new Date(startDate);
    if( initialDate > currentDate ) return { error: "Start date is in the future!!"};
    let totalYears = (currentDate.getFullYear() - initialDate.getFullYear() - 1);
    return totalYears;
}

export const yearAndMonthsCalculator = (startDate) => {
    let totalYears = yearsCalculator(startDate);
    const currentDate = new Date();
    const initialDate = new Date(startDate);
    if( initialDate > currentDate ) return { error: "Start date is in the future!!"};

    let totalMonths = ((12 - (initialDate.getMonth() + 1) + currentDate.getMonth() + 1 ));
    
    if(totalMonths > 11) {
        totalYears += 1;
        totalMonths = totalMonths - 12;
    }
    return { years: totalYears, months: totalMonths };
}