'use strict';

/* to keep in mind while working:
eventually we'll need to be able to update  numbers for each location, and to add/remove locations.ake sure to make each location is its own JavaScript object
*/

//CODE OBJECTIVES
//implement a constructor function and create an instance for each store location
//store values for sales by hour and total
//display results as a table

/* sales location variable names
id="onePike"
id="seaTacAir"
id="seaCenter"
id="capHill"
id="alki" */

//PSEUDO CODE
//Global variables that are potentially used/change: store hours (assuming all stores have same hours for now), store locations
//Local variables that are store-dependent:  total cookies, cookies per hour, total sales, average # of customers, average # customers per hour, average cookies per hour, average cookies per customer per hour
//Which variables need to be methods?  average customers, average customers per hour, average cookies per hour,average cookies per customer per hour

//BRING OVER NUMBERS FROM SUPPORT MD
// Location        | Min / Cust | Max / Cust | Avg Cookie / Sale
// ----------------|------------|------------|-------------------
// 1st and Pike      |      23    |     65     |        6.3
// SeaTac Airport  |      3     |     24     |        1.2
// Seattle Center     |      11    |     38     |        3.7
// Capitol Hill |      20    |     38     |        2.3
// Alki            |      2     |     16     |        4.6

var storeHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','Total'];

var allStores = [];
var allStoresTable = document.getElementById('allStores');

function StoreCookieSales(nameOfStore, minCust, maxCust, avgCookies) {
  this.nameOfStore = nameOfStore;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.cookieSales = [];
  allStores.push (this);
}
StoreCookieSales.prototype.numHourlyCust = function(){
  return Math.round(Math.random() * (this.maxCust - this.minCust) + this.minCust);
},
//Calculate and store the simulated amounts of cookies purchased for each hour at EACH location AND the total cookies

StoreCookieSales.prototype.cookieSalesPH = function() {
  var totalCookieSales = 0;
  for (var i = 0; i < storeHours.length; i ++) {
    if (i < storeHours.length - 1){
      var hourlyCookies = Math.round (this.avgCookies * this.numHourlyCust());
      this.cookieSales.push (hourlyCookies);
      console.log (storeHours [i], this.cookieSales + ' cookies');
      totalCookieSales += hourlyCookies;
    }
    else {
      this.cookieSales.push(totalCookieSales);
    }
  }
};

function makeHeaderRow (){
  var trEl = document.createElement('tr');
  var tdEl = document.createElement ('td');
  trEl.appendChild(tdEl);
  for (var i = 0; i < storeHours.length; i++){
    var thEl = document.createElement('th');
    thEl.textContent = storeHours[i];
    trEl.appendChild(thEl);
    allStoresTable.appendChild (trEl);
  }
}

StoreCookieSales.prototype.render = function () {
  this.cookieSalesPH ();
  var trEl = document.createElement ('tr');
  var tdEl = document.createElement ('td');
  trEl.appendChild(tdEl);
  trEl.textContent = this.nameOfStore;

  // create table rows and data cells
  for (var i = 0; i < storeHours.length; i++){

    //create table data cell
    var tdEl = document.createElement ('td');
    tdEl.textContent = this.cookieSales[i];
    trEl.appendChild(tdEl);
    allStoresTable.appendChild (trEl);
  }
};

new StoreCookieSales('First and Pike ', 23, 65, 6.3);
new StoreCookieSales('Seatac Airport',3, 24, 1.2);
new StoreCookieSales('Seattle Center',11, 38, 3.7);
new StoreCookieSales('Capitol Hill', 20, 38, 2.3);
new StoreCookieSales('Alki',2, 14, 4.6);

//Invoke
makeHeaderRow();
for (var i = 0; i < allStores.length; i++){
  allStores[i].render();
}
