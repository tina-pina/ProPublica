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
