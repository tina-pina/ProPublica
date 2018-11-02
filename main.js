// senate page

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
}

// let tdElem = document.createElement("td");
// tdElem.innerHTML = `2`;
// trElem.appendChild(tdElem);

// tdElem = document.createElement("td");
// tdElem.innerHTML = data.results[0].members[0].last_name;
// trElem.appendChild(tdElem);

// tdElem = document.createElement("td");
// tdElem.innerHTML = data.results[0].members[0].middle_name;
// trElem.appendChild(tdElem);

// tdElem = document.createElement("td");
// tdElem.innerHTML = data.results[0].members[0].first_name;
// trElem.appendChild(tdElem);

// tdElem = document.createElement("td");
// tdElem.innerHTML = data.results[0].members[0].party;
// trElem.appendChild(tdElem);

// tdElem = document.createElement("td");
// tdElem.innerHTML = data.results[0].members[0].votes_with_party_pct;
// trElem.appendChild(tdElem);

// let testDiv = document.getElementById("test");

// for (let i = 1; i < 201; i++) {
//   let h1Elem = document.createElement("h1");
//   h1Elem.innerHTML = `This is just created by JS! Number:${i}`;
//   h1Elem.id = `idNumber-${i}-id`;
//   h1Elem.class = `idNumber-${i}-class`;
//   h1Elem.style.fontSize = `${i}px`;
//   testDiv.appendChild(h1Elem);
// }

// document.getElementById("senate-data").innerHTML = JSON.stringify(data, null, 2);
// var resultArray = data.results;
// document.getElementById("name").innerHTML = JSON.stringify(
//   data.results[0].members[0].last_name,
//   null,
//   2
// );
// document.getElementById("party").innerHTML = JSON.stringify(data.results[0].members[0].party, null, 2);
// document.write("<table border==\"1\"><tr>");
// for (key of data.results[0].members.last_name) {
//     document.write('<td>' + key + '</td>');
// }
// document.write("</tr>");
// // for (var i = 0; i < data.length; i++) {
// //     document.write('<tr>');
// //     for (key in data[i]) {
// //         document.write('<td>' + data[i][key] + '</td>');
// //     }
// //     document.write('</tr>');
// // }
// document.write("</table>");

// house page

// let houseBody = document.getElementById("house-body");

// for (let i = 0; i < data.results[0].num_results; i++) {
//   trElem = document.createElement("tr");
//   houseBody.appendChild(trElem);

//   tdElem = document.createElement("td");
//   tdElem.innerHTML = `${i + 1}`;
//   trElem.appendChild(tdElem);

//   firstName = data.results[0].members[i].first_name;
//   middleName = data.results[0].members[i].middle_name;
//   lastName = data.results[0].members[i].last_name;

//   if (!middleName) {
//     middleName = "";
//   }

//   fullName = `${firstName} ${middleName} ${lastName}`;

//   tdElem = document.createElement("td");
//   trElem.appendChild(tdElem);

//   aTag = document.createElement("a");
//   aTag.innerHTML = fullName;
//   aTag.href = data.results[0].members[i].url;
//   aTag.target = "_blank";
//   tdElem.appendChild(aTag);

//   tdElem = document.createElement("td");
//   tdElem.innerHTML = data.results[0].members[i].party;
//   trElem.appendChild(tdElem);

//   tdElem = document.createElement("td");
//   tdElem.innerHTML = data.results[0].members[i].state;
//   trElem.appendChild(tdElem);

//   tdElem = document.createElement("td");
//   tdElem.innerHTML = data.results[0].members[i].seniority;
//   trElem.appendChild(tdElem);

//   tdElem = document.createElement("td");
//   tdElem.innerHTML = data.results[0].members[i].votes_with_party_pct + "%";
//   trElem.appendChild(tdElem);
// }
