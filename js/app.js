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

var storeHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

var allStoresTable = document.getElementById('allStores');
var newStoreForm = document.getElementById ('newStore');

function StoreCookieSales(nameOfStore, minCust, maxCust, avgCookies) {
  this.nameOfStore = nameOfStore;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.custPerHour = [];
  this.cookieSalesPH = [];
  this.totalCookiesPD = 0;
  StoreCookieSales.allStores.push(this);
}
StoreCookieSales.allStores = [];



StoreCookieSales.prototype.numCustPerHour = function(){
  //generate a random number
  //track random numbers that I generate
  for(var i = 0; i < storeHours.length; i ++){
    this.custPerHour.push(calcCustNum(this.minCust,this.maxCust));
  }
},
//Calculate and store the simulated amounts of cookies purchased for each hour at EACH location AND the total cookies

StoreCookieSales.prototype.numCookieSalesPH = function() {
  this.numCustPerHour();
  this.totalCookiesPD = 0;

  for(var i = 0; i < storeHours.length; i ++) {
    //calculate the average customers per hour for each store by the average cookies sold per hour for each store
    //Where does avg cookes come frome? this.avgCookies
    //Where does avg cust per hour come from this.custPerHour
    //Where do the results for this method need to go? This is  needs to go in to this.cookieSalesPerHour array and this needs to be added together, for each hour for each store to deliver a total per store
    //So, to get a total per store you need to go through the store hours array and find the cookies per hour and store that in an array and calculate the total.
    var hourlyCookies = Math.floor(this.avgCookies * this.custPerHour[i]);
    this.cookieSalesPH.push(hourlyCookies);
    // console.log (storeHours[i], this.cookieSalesPH[i] + ' cookies');
    this.totalCookiesPD += hourlyCookies;
  }
};

StoreCookieSales.prototype.render = function(){
  this.numCookieSalesPH();
  this.numCustPerHour();

  //create table for cookie sales data
  var tableRowElement = document.createElement('tr');
  var tableDataElement = document.createElement('td');
  //give table element store label
  tableRowElement.appendChild(tableDataElement);
  tableDataElement.textContent = this.nameOfStore;

  //create table data cell
  for (var i = 0; i < storeHours.length; i++){
    tableDataElement = document.createElement('td');
    tableDataElement.textContent = this.cookieSalesPH[i];
    tableRowElement.appendChild(tableDataElement);
  }
  var dailyTotal = document.createElement ('td');
  dailyTotal.textContent = this.totalCookiesPD;
  tableRowElement.appendChild(dailyTotal);
  allStoresTable.appendChild(tableRowElement);
};

function makeHeaderRow(){
  var tableRowElement = document.createElement('tr');
  var tableDataElement = document.createElement('th');
  tableRowElement.appendChild(tableDataElement);
  for (var i = 0; i < storeHours.length; i++){
    var tableHeaderElement = document.createElement('th');
    tableHeaderElement.textContent = storeHours[i];
    tableRowElement.appendChild(tableHeaderElement);
  }
  var dailyTotal = document.createElement ('td');
  dailyTotal.textContent = 'Daily Total';
  tableRowElement.appendChild(dailyTotal);

  allStoresTable.appendChild (tableRowElement);
}

function makeFooterRow(){
  var dailyTotal = 0;
  var tableRowElement = document.createElement ('tr');
  var tableHeaderElement = document.createElement ('th');

  tableHeaderElement.textContent = 'Hourly totals for all stores';
  tableRowElement.appendChild(tableHeaderElement);

  for (var i = 0; i < storeHours.length; i++){
    var totalHourlyCookies = 0;
    for(var j in StoreCookieSales.allStores){
      totalHourlyCookies += StoreCookieSales.allStores[j].cookieSalesPH[i];
    }
    dailyTotal += totalHourlyCookies;

    //create element
    tableHeaderElement = document.createElement ('th');
    tableHeaderElement.textContent = totalHourlyCookies;
    tableRowElement.appendChild(tableHeaderElement);
  }
  // tableDataElement.textContent = StoreCookieSales.cookieSalesPH.this.cookieSales[i];
  var tableDataElement = document.createElement ('th');
  tableDataElement.textContent = dailyTotal;
  tableRowElement.appendChild(tableDataElement);

  allStoresTable.appendChild(tableRowElement);
}

// function makeTotalTotalCell(){};

function addNewStore(event) {
  event.preventDefault();
  console.log (event.target.nameOfStore.value);

  var newNameOfStore = event.target.nameOfStore.value;
  var newMinCust = event.target.minCust.value;
  var newMaxCust = event.target.maxCust.value;
  var newAvgCookies = event.target.avgCookies.value;

  new StoreCookieSales (newNameOfStore,newMinCust,newMaxCust,newAvgCookies);

  allStoresTable.innerHTML = '';
  makeHeaderRow();
  renderAllStores();
  makeFooterRow();
  newStoreForm.reset();
}

function calcCustNum(min,max){
  return Math.random() * (max - min + 1) + min;
}

function renderAllStores(){
  for (var i in StoreCookieSales.allStores){
    StoreCookieSales.allStores[i].render();
  }
}
new StoreCookieSales('First and Pike ', 23, 65, 6.3);
new StoreCookieSales('Seatac Airport',3, 24, 1.2);
new StoreCookieSales('Seattle Center',11, 38, 3.7);
new StoreCookieSales('Capitol Hill', 20, 38, 2.3);
new StoreCookieSales('Alki',2, 14, 4.6);

//make event listener
newStoreForm.addEventListener ('submit', addNewStore);

//Invoke
makeHeaderRow();
renderAllStores ();
makeFooterRow();