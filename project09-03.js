"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-03

      Project to retrieve date of last visit from web storage and mark new article
      Author: 
      Date:   

      Filename: project09-03.js
*/

/* Page Objects */

let lastVisitDate = document.getElementById("lastVisitDate");
let articleDates = document.getElementsByClassName("posttime");

if (localStorage.sbloggerVisit) {
	let storedLastDate = localStorage.getItem("sbloggerVisit");
	lastVisitDate.textContent = storedLastDate;
	let lastDate = Date(storedLastDate);
	for (let i = 0; i < articleDates.length; i++) {
	}
}


