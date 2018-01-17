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

var allStoreLocations = ['1st and Pike', 'Seatac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'];
var storeHours = ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: ','8pm: ','Total: '];

var allStoresTable = document.getElementById ('stores');

function StoreCookieSales (minCust, maxCust, avgCookies) {
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  StoreCookieSales.prototype.numHourlyCust = function(){
    return Math.round (Math.random () * (this.maxCust - this.minCust) + this.minCust);
  },
  //Calculate and store the simulated amounts of cookies purchased for each hour at EACH location AND the total cookies
  StoreCookieSales.prototype.cookieSales = [];

  StoreCookieSales.prototype.cookieSalesPH = function() {
    var totalCookieSales = 0;

    for (var i = 0; i < storeHours.length; i ++) {
      if (i < storeHours.length - 1){
        this.cookieSalesPH = Math.round (this.avgCookies * this.numHourlyCust());
        this.cookieSales.push (this.cookieSalesPH);
        console.log (storeHours [i], this.cookieSalesPH + ' cookies');
        totalCookieSales += this.cookieSalesPerHour;
      }
      else {
        this.cookieSales.push(totalCookieSales);
      }
    }
  };
}

// StoreCookieSales.prototype.render = function () {
//   this.cookieSalesPH ();
//   // create table rows
//   for (var i = 0; i < storeHours - 1; i++){
//     var trEl = document.createElement ('tr');
//     //create table data cell
//     var tdEl = document.createElement ('td');
//     td.El.textContent = StoreCookieSales[i];

//   }
//   // access the ul from sales.html
//   var ulEl = document.getElementById('onePike');

//   for(var i = 0; i < storeHours.length; i++) {
//     // 1. create list items
//     var liEl = document.createElement('li');
//     // 2. give them content

//     liEl.textContent = storeHours[i] + this.cookieSales[i] + ' cookies';

//     // 3. append the li to the ul
//     // parentElement.appendChild(childElement);
//     ulEl.appendChild(liEl);

//   }
// };

// var seaCenter = {
//   minCust: 3,
//   maxCust:24,
//   avgCookies: 1.2,

//   numHourlyCust: function(){
//     return Math.round(Math.random() * (this.maxCust - this.minCust) + this.minCust);
//   },

//   cookieSales: [],

//   cookieSalesPerHour: function() {
//     var totalCookieSales = 0;

//     for (var i = 0; i < storeHours.length; i ++){
//       if (i < storeHours.length - 1){
//         var cookieSalesPerHour = Math.round(this.avgCookies * this.numHourlyCust());
//         this.cookieSales.push (cookieSalesPerHour);
//         console.log (storeHours[i], cookieSalesPerHour, 'cookies');
//         totalCookieSales += cookieSalesPerHour;
//       }
//       else {
//         this.cookieSales.push(totalCookieSales);
//       }
//     }
//   },
//   render: function() {
//     this.cookieSalesPerHour();
//     var ulEl = document.getElementById('seaCenter');

//     for (var i = 0; i < storeHours.length; i++){
//       var liEl = document.createElement('li');
//       liEl.textContent = storeHours[i] + this.cookieSales[i] + ' cookies';
//       ulEl.appendChild (liEl);
//     }
//   },
// };

// var capHill = {
//   minCust: 3,
//   maxCust:24,
//   avgCookies: 1.2,

//   numHourlyCust: function(){
//     return Math.round(Math.random() * (this.maxCust - this.minCust) + this.minCust);
//   },

//   cookieSales: [],

//   cookieSalesPerHour: function() {
//     var totalCookieSales = 0;

//     for (var i = 0; i < storeHours.length; i ++){
//       if (i < storeHours.length - 1){
//         var cookieSalesPerHour = Math.round(this.avgCookies * this.numHourlyCust());
//         this.cookieSales.push (cookieSalesPerHour);
//         console.log (storeHours[i], cookieSalesPerHour, 'cookies');
//         totalCookieSales += cookieSalesPerHour;
//       }
//       else {
//         this.cookieSales.push(totalCookieSales);
//       }
//     }
//   },
//   render: function() {
//     this.cookieSalesPerHour();
//     var ulEl = document.getElementById('capHill');

//     for (var i = 0; i < storeHours.length; i++){
//       var liEl = document.createElement('li');
//       liEl.textContent = storeHours[i] + this.cookieSales[i] + ' cookies';
//       ulEl.appendChild (liEl);
//     }
//   },
// };

// var alki = {
//   minCust: 3,
//   maxCust:24,
//   avgCookies: 1.2,

//   numHourlyCust: function(){
//     return Math.round(Math.random() * (this.maxCust - this.minCust) + this.minCust);
//   },

//   cookieSales: [],

//   cookieSalesPerHour: function() {
//     var totalCookieSales = 0;

//     for (var i = 0; i < storeHours.length; i ++){
//       if (i < storeHours.length - 1){
//         var cookieSalesPerHour = Math.round(this.avgCookies * this.numHourlyCust());
//         this.cookieSales.push (cookieSalesPerHour);
//         console.log (storeHours[i], cookieSalesPerHour, 'cookies');
//         totalCookieSales += cookieSalesPerHour;
//       }
//       else {
//         this.cookieSales.push(totalCookieSales);
//       }
//     }
//   },
//   render: function() {
//     this.cookieSalesPerHour();
//     var ulEl = document.getElementById('alki');

//     for (var i = 0; i < storeHours.length; i++){
//       var liEl = document.createElement('li');
//       liEl.textContent = storeHours[i] + this.cookieSales[i] + ' cookies';
//       ulEl.appendChild (liEl);
//     }
//   },
// };

var onePike = new StoreCookieSales (23,65,6.3);

var seaTacAir = new StoreCookieSales (3,24,1.2);

var seaCenter = new StoreCookieSales (11,38,1.2);

var capHill = new StoreCookieSales (3,24,1.2);

var alki = new StoreCookieSales (3,24,1.2);

console.log (onePike);
// onePike.render();

// console.log (seaTacAir);
// seaTacAir.render ();

// console.log (seaCenter);
// seaCenter.render ();

// console.log (capHill);
// capHill.render();

// console.log (alki);
// alki.render();
