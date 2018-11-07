function populateSenateTable() {
  let table = document.getElementById("senate-data");
  let senateBody = document.getElementById("senate-body");

  let theadElem = document.createElement("thead");
  let trElem = document.createElement("tr");

  for (let i = 0; i < data.results[0].num_results; i++) {
    let trElem = document.createElement("tr");
    senateBody.appendChild(trElem);

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
      data.results[0].members[i].party +
      " " +
      data.results[0].members[i].state +
      " " +
      data.results[0].members[i].seniority +
      " " +
      data.results[0].members[i].votes_with_party_pct;

    senateBody.appendChild(trElem);
  }
}

function applyFilter(r, d, i) {
  let rList = document.querySelectorAll("#senate-data .R");
  let dList = document.querySelectorAll("#senate-data .D");
  let iList = document.querySelectorAll("#senate-data .I");

  if (r) {
    for (let elem of rList) elem.style.display = "table-row";
  } else {
    for (let elem of rList) elem.style.display = "none";
  }

  if (d) {
    for (let elem of dList) elem.style.display = "table-row";
  } else {
    for (let elem of dList) elem.style.display = "none";
  }

  if (i) {
    for (let elem of iList) elem.style.display = "table-row";
  } else {
    for (let elem of iList) elem.style.display = "none";
  }
}

function filterPartyCheckboxClicked(event) {
  let box1 = document.getElementById("republican-checkbox");
  let box2 = document.getElementById("democrat-checkbox");
  let box3 = document.getElementById("independent-checkbox");

  applyFilter(box1.checked, box2.checked, box3.checked);
}

// create the state Array with the given data

function getDistinctStates() {
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

    // option.addEventListener("onchange", applyFilterState() {});
    option.innerHTML = state;
    form.appendChild(option);
  }
}

//make the event handler work

appendStatesToSelectBox();

populateSenateTable();

// onchange="filterStatesClicked(this.value)

function stateUpdated(event) {
  // this is a selected value. this can be "All" or state such as "CA", "NY"
  let selectedState = event.options[event.selectedIndex].value;

  // Query (get) all the rows with selectedState
  let targetStates = document.querySelectorAll(
    `#senate-data .${selectedState}`
  );

  // Query (get) all the states
  let allStates = document.querySelectorAll("#senate-data tr");

  // exclude header (start from 1)
  for (let i = 1; i < allStates.length; i++) {
    let stateRow = allStates[i];

    // if "All" selected, display everything!
    if (selectedState === "All") {
      stateRow.style.display = "table-row";

      // display only the ones with selected state!
    } else if (Array.from(targetStates).includes(stateRow)) {
      stateRow.style.display = "table-row";

      // otherwise, hide it
    } else {
      stateRow.style.display = "none";
    }
  }
}
