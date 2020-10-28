const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

let employersNames = [];

employersNames = employers.filter((item) => {
    return (item.length > 0 && item.length != '')
})

employersNames = employersNames.map((item) => {return item.toLowerCase().trim()})

const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

const {cash, eu, rus} = sponsors;

const sumSponsors = [...eu, ...rus, 'unexpected sponsor']

const calcCash = (cash = 0) => cash.reduce((a, b) => a + b);

const money = calcCash(cash);

function makeBusiness({owner = 'Sam', director = 'Victor', cash, emp} = {}) {
    console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp}`);
    console.log(`And we have a sponsors: ${sumSponsors}`);
    // console.log.apply(null, sumSponsors);
    console.log(`Note. Be careful with ${sponsors.eu[0]}. It's a huge risk.`);
}
makeBusiness({cash: money, emp: employersNames});