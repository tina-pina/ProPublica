// house page

let houseBody = document.getElementById("house-body");

for (let i = 0; i < data.results[0].num_results; i++) {
  let trElem = document.createElement("tr");
  houseBody.appendChild(trElem);

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

  tdElem = document.createElement("td");
  tdElem.innerHTML = data.results[0].members[i].party;
  trElem.appendChild(tdElem);

  tdElem = document.createElement("td");
  tdElem.innerHTML = data.results[0].members[i].state;
  trElem.appendChild(tdElem);

  tdElem = document.createElement("td");
  tdElem.innerHTML = data.results[0].members[i].seniority;
  trElem.appendChild(tdElem);

  tdElem = document.createElement("td");
  tdElem.innerHTML = data.results[0].members[i].votes_with_party_pct + "%";
  trElem.appendChild(tdElem);
}
