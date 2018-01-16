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

var storeLocations = ['1st and Pike', 'Seatac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'];
var storeHours = ['6 am','7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm','8 pm'];

var onePike = {
    totalCookies: 657,
    cookiesPHour: [16, 20, 35, 48, 56, 77, 93, 144, 119, 84, 63, 23, 42, 27, 59],
    minCust: 1,
    maxCust: 144,

    //Calculate and store the simulated amounts of cookies purchased for each hour at each location
    // var avgCookiesSoldPerHour = totalSales/storeHours.length
    //                           = 657/18 = 36.5 average cookies per hour
    //Calculate the average number of customers per hour
    // var customerPerHour = return: Math.round (Math.random (mixCust, maxCust))/storeHours.length;
    //                     = 15 customers per hour (total guess within the min/max)
    //Calculate average cookies per customer sold per hour   
    //  var avgCPPC = averageCookiesSoldPerHour/customerPerHour
    //

    render: function () {
        // access the ul from sales.html
        var ulEl = document.getElementById('onepike');

        for(var i = 0; i < storeHours.length; i++) {
        // 1. create list items
        var liEl = document.createElement('li');
        // 2. give them content

        liEl.textContent = storeLocations [i] + ': Has ' + 'a minimum of ' + this.minCust + ' customers per hour and a maximum of ' + this.maxCust + ' customers per hour. It is estimated that this store will sell an average of ' + this.avgCPC + ' cookies per customer. ';
        // 3. append the li to the ul
        // parentElement.appendChild(childElement);
        ulEl.appendChild(liEl);
        // message: 'This store has an average sale of  ' + avgCPC + ' cookies per customer.';
   
    }
  }
       
    };

}

onePike.render();
seaTacAir.render ();
seaCenter.render ();
capHill.render();
alki.render();
