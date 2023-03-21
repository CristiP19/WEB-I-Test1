// definim clasa Tour
class Tour {
  constructor(name, costOneDay, days, insurance) {
    this._name = name;
    this._costOneDay = costOneDay;
    this._days = days;
    this._insurance = insurance;
  }

  // getteri pentru proprietatile clasei
  getName() {
    return this._name;
  }

  getCostOneDay() {
    return this._costOneDay;
  }

  getDays() {
    return this._days;
  }

  getInsurance() {
    return this._insurance;
  }

  // metoda pentru calculul pretului total
  getPrice() {
    return this._costOneDay * this._days + this._insurance;
  }

  // metoda pentru cresterea numarului de zile
  increaseDays(days) {
    this._days += days;
  }

  // metoda pentru setarea taxei
  setTax(taxPercentage) {
    this._taxPercentage = taxPercentage;
  }

  // metoda pentru calculul pretului net, dupa adaugarea taxei
  getPriceNetto() {
    const totalPrice = this._costOneDay * this._days + this._insurance;
    const taxAmount = totalPrice * (this._taxPercentage / 100);
    return totalPrice + taxAmount;
  }
}

// creem doua instante ale clasei Tour
const tour1 = new Tour('Turkey', 1200, 9, 250);
const tour2 = new Tour('Russia', 1000, 2, 900);


console.log(tour1.getName());
console.log(tour1.getCostOneDay());
console.log(tour1.getDays());
console.log(tour1.getInsurance());
console.log(tour1.getPrice());

console.log(tour2.getName());
console.log(tour2.getCostOneDay());
console.log(tour2.getDays());
console.log(tour2.getInsurance());
console.log(tour2.getPrice());

let tours = [
  new Tour('Turkey', 1500, 7, 750),
  new Tour('Germany', 1800, 10, 1000),
  new Tour('Romania', 2000, 14, 1250)
];

for (var i = 0; i < tours.length; i++) {
  console.log(`Tour${(i + 1)}: ${tours[i].getName()} with price: ${tours[i].getPrice()}$`)
}
