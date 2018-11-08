/* NOTE
1.the number of Democrats, Republicans and Independents - DONE!
2.how Democrats and Republicans compare, on average, for voting with their party - DONE!
3.which members most often do not vote with their party, which ones most often do vote with their party

// sort based on total_votes, from small to big
data.results[0].members.sort((x, y) => x.total_votes - y.total_votes) 

// sort based on total_votes, from big to small
data.results[0].members.sort((x, y) => x.total_votes - y.total_votes) 

e.g. .sort((x, y) => x.total_votes - y.total_votes) is build-in
let sortedArrTotalVotesAsc = data.results[0].members.sort((x, y) => x.total_votes - y.total_votes)

4.which members have missed the most votes, which have missed the least
*/

function countNumberMembers(partyName) {
  let count = 0;
  for (let i = 0; i < data.results[0].num_results; i++) {
    let party = data.results[0].members[i].party;
    if (party === partyName) count++;
  }
  return count;
}

function averageVotesEachParty(partyName) {
  //create empty array for specific party votes
  let votesArray = [];

  //iterate over all data to find all party
  for (let i = 0; i < data.results[0].num_results; i++) {
    let party = data.results[0].members[i].party;
    // if the party is the specific party
    if (party === partyName) {
      //loop over party to get the votes if the party is R, D or I
      let v = data.results[0].members[i]["votes_with_party_pct"];
      // console.log("this should be votes only for the republicans" + v);
      votesArray.push(v);
    }
  }

  // calculate average
  let sum = 0.0;
  for (let voteNum of votesArray) sum += voteNum;
  return sum / votesArray.length;
}

let statistics = {
  "Number of Democrats": countNumberMembers("D"),
  "Number of Republicans": countNumberMembers("R"),
  "Number of Independents": countNumberMembers("I"),
  "Average Votes Democrats": averageVotesEachParty("D"),
  "Average Votes Republicans": averageVotesEachParty("R"),
  "Average Votes Independents": averageVotesEachParty("I")
};

console.log(statistics);
