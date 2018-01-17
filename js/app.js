'use strict';

/* to keep in mind while working:
eventually we'll need to be able to update  numbers for each location, and to add/remove locations.ake sure to make each location is its own JavaScript object
*/

//CODE OBJECTIVES
//make an object literal for each store location
//store values for sales
//display results as a list

/* sales location variable names
id="onePike"
id="seaTacAir"
id="seaCenter"
id="capHill"
id="alki" */

//minCust is the minimum Customers per Hour -must be whole # >0
//maxCust is the maximum Customers per Hour - must be whole # >0
//CPC is Cookies Per Customer

//DELIVERABLE: Calculate and store the simulated amounts of cookies purchased for each hour at each location

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

var storeLocations = ['1st and Pike', 'Seatac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'];
var storeHours = ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: ','8pm: ','Total: '];

var onePike = {
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  //Calculate the random number of customers per hour that is no less than the min and no greater than the max
  numHourlyCust: function(){
    return Math.round (Math.random () * (this.maxCust - this.minCust) + this.minCust);
  },
  //Calculate and store the simulated amounts of cookies purchased for each hour at a location AND the total
  // average cookies * customer number = # cookies per hour
  cookieSales: [],

  cookieSalesPH: function () {
    var totalCookieSales = 0;

    for (var i = 0; i < storeHours.length; i ++) {
      if (i < storeHours.length - 1){
        var cookieSalesPerHour = Math.round (this.avgCookies * this.numHourlyCust());
        this.cookieSales.push (cookieSalesPerHour);
        console.log (storeHours [i], cookieSalesPerHour + ' cookies');
        totalCookieSales += cookieSalesPerHour;
      }
      else {
        this.cookieSales.push(totalCookieSales);
      }
    }
  },
  render: function () {
    this.cookieSalesPH ();
    // access the ul from sales.html
    var ulEl = document.getElementById('onePike');

    for(var i = 0; i < storeHours.length; i++) {
      // 1. create list items
      var liEl = document.createElement('li');
      // 2. give them content

      liEl.textContent = storeHours[i] + this.cookieSales[i] + ' cookies';

      // 3. append the li to the ul
      // parentElement.appendChild(childElement);
      ulEl.appendChild(liEl);

    }
  },

};
console.log (onePike);
onePike.render();
console.log (seaTacAir);
// seaTacAir.render ();
// seaCenter.render ();
// capHill.render();
// alki.render();
