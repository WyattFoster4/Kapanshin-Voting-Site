// Pull variables
let issues = ["P001: Land Sale Act", "P002: National Holidays Act"];
// Print the table
if (issues.length == 0) {
  document.getElementById("noIss").innerHTML = "No issues to vote on now. Check back later!";
} else {
  for (let i = 0; i < 5; i++) {
    if (issues.length >= i + 1) {
      document.getElementById("row" + (i+1) + ".1").innerHTML = issues[i]
    }
  }
}