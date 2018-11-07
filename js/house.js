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

function applyFilter(r, d, i) {
  let rList = document.querySelectorAll("#house-data .R");
  let dList = document.querySelectorAll("#house-data .D");
  let iList = document.querySelectorAll("#house-data .I");

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

populateHouseTable();
