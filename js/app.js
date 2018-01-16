'use strict';

/* to keep in mind while working:
eventually we'll need to be able to update  numbers for each location, and to add/remove locations.ake sure to make each location is its own JavaScript object
*/

/* sales location variable names
id="onePike"
id="seaTacAir"
id="seaCenter"
id="capHill"
id="alki" */

//CPC is Cookies Per Customer

var storeLocations = ['1st and Pike', 'Seatac Airport', 'Seattle Center', 'Capitol Hill', 'Alki']

var onePike = {
    sales: [],
    minCust: ,
    maxCust: ,
    avgCPC: ,
    render: function () {
        // access the ul from sales.html
        var ulEl = document.getElementById('onepike');

        for(var i = 0; i < this.sales.length; i++) {
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
