const calculateTax = function() {

    const incomeRange = [
        {threshold: 5000, upper: 10000, rate: 0.10},
        {threshold: 10000, upper: 30000, rate: 0.15},
        {threshold: 30000, upper: Infinity, rate: 0.20}
    ];

    return function(income) {
        let tax = 0;

        for (let i = 0; i <= incomeRange.length; i++) {
            const {threshold, upper, rate} = incomeRange[i];

            if (income > threshold) {
                const taxableIncome = Math.min(income, upper) - threshold;
                tax += taxableIncome * rate;
            } else {
                break;
            }
        }
        return tax;
    }
}

const taxCalculator = calculateTax()

const salary = [10000, 20000, 30000];

salary.forEach(income => {
    console.log(`Salary: ${income} Tax: ${taxCalculator(income).toFixed(2)}`);
});