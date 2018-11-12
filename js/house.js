/*
    populate data start
*/

function populateHouseTable() {
  let houseBody = document.getElementById("house-body");

  for (let i = 0; i < data.results[0].num_results; i++) {
    let trElem = document.createElement("tr");

    let tdElem = document.createElement("td");
    tdElem.innerHTML = `${i + 1}`;
    trElem.appendChild(tdElem);

    let firstName = data.results[0].members[i].first_name;
    let middleName = data.results[0].members[i].middle_name;
    let lastName = data.results[0].members[i].last_name;

    if (!middleName) {
      middleName = "";
    }

    let fullName = `${firstName} ${middleName} ${lastName}`;

    tdElem = document.createElement("td");
    trElem.appendChild(tdElem);

    let aTag = document.createElement("a");
    aTag.innerHTML = fullName;
    aTag.href = data.results[0].members[i].url;
    aTag.target = "_blank";
    tdElem.appendChild(aTag);

    let attr_list = ["party", "state", "seniority", "votes_with_party_pct"];

    for (let attr of attr_list) {
      let value = data.results[0].members[i][attr];
      if (attr === "votes_with_party_pct") value += "%";

      tdElem = document.createElement("td");
      tdElem.innerHTML = value;
      trElem.appendChild(tdElem);
    }

    trElem.className =
      // for checkboxes this one (party) is used:
      data.results[0].members[i].party +
      " " +
      data.results[0].members[i].state +
      " " +
      "seniority-" +
      data.results[0].members[i].seniority;

    houseBody.appendChild(trElem);
  }
}

function getDistinctStates() {
  // create the state Array with the given data
  let statesArray = [];

  for (let i = 0; i < data.results[0].num_results; i++) {
    let state = data.results[0].members[i].state;
    // 1. check state is in the states list
    // 2. push state to the states list IF the state is not in the states list!
    if (!statesArray.includes(state)) {
      statesArray.push(state);
    }
  }
  return statesArray;
}

// create the state array inside the Dom
function appendStatesToSelectBox() {
  let allStates = getDistinctStates();
  let form = document.getElementById("state");

  for (let state of allStates) {
    // append state elem to select box dom!
    let option = document.createElement("option");
    option.id = "selected";
    option.innerHTML = state;
    form.appendChild(option);
  }
}

populateHouseTable();
appendStatesToSelectBox();
/*
    populate data end
*/

/*
    event handler start
*/
function filterAll(event) {
  let republicanCheckbox = document.getElementById("republican-checkbox");
  let democratCheckbox = document.getElementById("democrat-checkbox");
  let independentCheckbox = document.getElementById("independent-checkbox");

  let selectedState = document.getElementById("state");

  let republicanChecked = republicanCheckbox.checked;
  let democratChecked = democratCheckbox.checked;
  let independentChecked = independentCheckbox.checked;
  let selectedStateChecked = selectedState.value;

  let allRows = document.querySelectorAll("#house-data tr");

  for (let i = 1; i < allRows.length; i++) {
    let row = allRows[i];
    let classNameArr = row.className.split(" ");

    let party = classNameArr[0];
    let state = classNameArr[1];

    if (selectedStateChecked === "All" || state === selectedStateChecked) {
      if (republicanChecked && party === "R") {
        row.style.display = "table-row";
      } else if (democratChecked && party === "D") {
        row.style.display = "table-row";
      } else if (independentChecked && party === "I") {
        row.style.display = "table-row";
      } else {
        row.style.display = "none";
      }
    } else {
      row.style.display = "none";
    }
  }
}
/*
    event handler end
*/

//another approach might be to print the rows ..and when you apply filter you delete the rows for example if checkbox is unchecked and then you print them again when the checkbox is needed
