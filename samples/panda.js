// function republicanFilter(event) {

//     // first you neeed to check ALL CHECKBOXes
//     // republican: true, democrat: false, independent: false
//     // republican: false, democrat: true, independent: false
//     // republican: false, democrat: f, independent: t
//     // republican: true, democrat: t, independent: false
//     // republican: true, democrat: false, independent: t
//     // republican: f, democrat: t, independent: t
//     // republican: true, democrat: t, independent: t
//     // republican: true, democrat: false, independent: false

//     if (event.checked) {
//         let dList = document.querySelectorAll("#house-data .D");
//         for (let node of dList) {
//             node.style.display = "none";
//         }

//         let iList = document.querySelectorAll("#house-data .I");
//         for (let node of iList) {
//             node.style.display = "none";
//         }
//     } else {
//         let dList = document.querySelectorAll("#house-data .D");
//         for (let node of dList) {
//             node.style.display = "table-row";
//         }

//         let iList = document.querySelectorAll("#house-data .I");
//         for (let node of iList) {
//             node.style.display = "table-row";
//         }
//     }

// }

// function rerenderTable(data) {
//     let houseBody = document.getElementById("house-body");
//     for (let item of data) {
//         houseBody.appendChild(item);
//     }

// }

// function republicanFilter(event) {
//     let nodeList = document.querySelectorAll("#house-data tr");

//     if (event.checked) {
//         // filter nodeList
//         let filteredData = Array.from(nodeList).filter(
//             node => node.childNodes[2].innerHTML === "R"
//         )
//         // remove all the data
//         for (let i = 1; i < nodeList.length; i++) {
//             nodeList[i].remove();
//         }
//         rerenderTable(Array.from(filteredData))
//     } else {
//         // leave it!
//         rerenderTable(Array.from(data))
//     }
// }

function applyFilter(republican, democrat, independent) {
  console.log(republican, democrat, independent);
  let republicanList = document.querySelectorAll("#house-data .R");
  let democratList = document.querySelectorAll("#house-data .D");
  let independentList = document.querySelectorAll("#house-data .I");

  if (republican) {
    for (let node of republicanList) node.style.display = "table-row";
  } else {
    for (let node of republicanList) node.style.display = "none";
  }

  if (democrat) {
    for (let node of democratList) node.style.display = "table-row";
  } else {
    for (let node of democratList) node.style.display = "none";
  }

  if (independent) {
    for (let node of independentList) node.style.display = "table-row";
  } else {
    for (let node of independentList) node.style.display = "none";
  }
}

function checkBoxClicked(event) {
  let box1 = document.getElementById("inlineCheckbox1");
  let box2 = document.getElementById("inlineCheckbox2");
  let box3 = document.getElementById("inlineCheckbox3");

  applyFilter(box1.checked, box2.checked, box3.checked);
}

function getCheckedBoxes(chkboxName) {
  //get checkbox by Id;
  let checkboxes = document.getElementsByClassName(chkboxName);

  //create empty array where checked one will be pushed
  let checkboxesChecked = [];
  // loop over them all
  for (let i = 0; i < checkboxes.length; i++) {
    // And stick the checked ones onto an array...
    if (checkboxes[i].checked === true) {
      checkboxesChecked.push(checkboxes[i]);
    }
  }
  // Return the array if it is non-empty, or null
  return checkboxesChecked;
}

function ckChange(ckType) {
  var ckName = document.getElementsByName(ckType.name);
  var checked = document.getElementById(ckType.id);

  if (checked.checked) {
    for (var i = 0; i < ckName.length; i++) {
      if (!ckName[i].checked) {
        ckName[i].disabled = true;
      } else {
        ckName[i].disabled = false;
      }
    }
  } else {
    for (var i = 0; i < ckName.length; i++) {
      ckName[i].disabled = false;
    }
  }
}

// function applyFilter(r, d, i) {
//   let rList = document.querySelectorAll("#house-data .R");
//   let dList = document.querySelectorAll("#house-data .D");
//   let iList = document.querySelectorAll("#house-data .I");

//   if (r) {
//     for (let elem of rList) elem.style.display = "table-row";
//   } else {
//     for (let elem of rList) elem.style.display = "none";
//   }

//   if (d) {
//     for (let elem of dList) elem.style.display = "table-row";
//   } else {
//     for (let elem of dList) elem.style.display = "none";
//   }

//   if (i) {
//     for (let elem of iList) elem.style.display = "table-row";
//   } else {
//     for (let elem of iList) elem.style.display = "none";
//   }
// }

// function filterPartyCheckboxClicked(event) {
//   let box1 = document.getElementById("republican-checkbox");
//   let box2 = document.getElementById("democrat-checkbox");
//   let box3 = document.getElementById("independent-checkbox");

//   applyFilter(box1.checked, box2.checked, box3.checked);
// }
// function stateUpdated(event) {
//   // this is a selected value. this can be "All" or state such as "CA", "NY"
//   let selectedState = event.options[event.selectedIndex].value;

//   // Query (get) all the rows with selectedState
//   let targetStates = document.querySelectorAll(`#house-data .${selectedState}`);

//   // Query (get) all the states
//   let allStates = document.querySelectorAll("#house-data tr");

//   // exclude header (start from 1)
//   for (let i = 1; i < allStates.length; i++) {
//     let stateRow = allStates[i];

//     // if "All" selected, display everything!
//     if (selectedState === "All") {
//       stateRow.style.display = "table-row";

//       // display only the ones with selected state!
//     } else if (Array.from(targetStates).includes(stateRow)) {
//       stateRow.style.display = "table-row";

//       // otherwise, hide it
//     } else {
//       stateRow.style.display = "none";
//     }
//   }
// }

// -----

// function countMembers(partyName, countAll) {
//   let count = 0;
//   for (let i = 0; i < data.results[0].num_results; i++) {
//     let party = data.results[0].members[i].party;
//     if (countAll || party === partyName) count++;
//   }
//   return count;
// }

// => instead this is possible;

// function countMembersObj() {
//   let countObj = {};
//   for (let i = 0; i < data.results[0].num_results; i++) {
//     let party = data.results[0].members[i].party;
//     if (party in countObj) countObj[party]++;
//     else countObj[party] = 1;
//   }
//   return countObj;
// }

// ------
// function countNumberMembers(partyName) {
//   let count = 0;
//   for (let i = 0; i < data.results[0].num_results; i++) {
//     let party = data.results[0].members[i].party;
//     if (party === partyName) count++;
//   }
//   return count;
// }

// function totalCountMembers() {
//   let republican = countNumberMembers("R");
//   let democrats = countNumberMembers("D");
//   let independents = countNumberMembers("I");

//   let sum = republican + democrats + independents;
//   return sum;
// }

// instead this for both functions=>
// function countMembers(partyName, countAll) {
//   let count = 0;
//   for (let i = 0; i < data.results[0].num_results; i++) {
//     let party = data.results[0].members[i].party;
//     if (countAll || party === partyName) count++;
//   }
//   return count;
// }

// ------------------------------------------------------------------
// function loyaltyTable(statistics, tableID, statisticsField) {
//   let senateLoyalBody = document.getElementById(tableID);
//   if (!senateLoyalBody) return;

//   for (let m of statistics[statisticsField]) {
//     let row = document.createElement("tr");

//     // first column - Name
//     let column = document.createElement("td");

//     let firstName = m.first_name;
//     let middleName = m.middle_name;
//     let lastName = m.last_name;
//     if (!middleName) middleName = "";

//     column.innerHTML = firstName + " " + middleName + " " + lastName;
//     row.appendChild(column);

//     //second column - No. Party Votes
//     let numberPartyVotes = Math.floor(
//       (m.votes_with_party_pct * m.total_votes) / 100
//     );
//     column = document.createElement("td");
//     column.innerHTML = numberPartyVotes;
//     row.appendChild(column);

//     //third column - % Party Votes
//     column = document.createElement("td");
//     column.innerHTML = m.votes_with_party_pct;
//     row.appendChild(column);

//     senateLoyalBody.appendChild(row);
//   }
// }

// function loyaltyBottomTable(statistics) {
//   return loyaltyTable(statistics, "senate-bottom-loyalty", "leastLoyalMembers");
// }

// function loyaltyTopTable(statistics) {
//   return loyaltyTable(statistics, "senate-top-loyalty", "mostLoyalMembers");
// }
