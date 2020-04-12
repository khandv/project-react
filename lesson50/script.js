let employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

let employersNames = employers.filter((employer) => {
    return employer.length > 0 && employer.length != ''
});
employersNames = employersNames.map((employer) => employer.toLowerCase().trim());

console.log(employersNames);

let sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

function calcCash(own = 0) {
    // own = own || 0;
    let everyCash = Array.prototype.slice.call(arguments);
    let total = own;
    for (let i = 0; i < everyCash[1].length; i++) {
        total += +everyCash[1][i];
    }
    return total;
}

let money = calcCash(null, sponsors.cash);
console.log(money);

function makeBusiness(owner, director = 'Victor', cash, emp) {
    // director = director || 'Victor';
    let sumSponsors = sponsors.eu.concat(sponsors.rus, 'unexpected sponsor');
    // console.log('We have a business. Owner: ' + owner + ', director: ' + director + '. Our budget: ' + cash + '. And our employers: ' +
    // emp);
    console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp},
    And we have a sponsors: ${sumSponsors}`);
    console.log(`Note. Be careful with ${sponsors.eu[0]}. It's a huge risk.`);
}
makeBusiness.apply(null, ['Sam', null, money, employersNames]);