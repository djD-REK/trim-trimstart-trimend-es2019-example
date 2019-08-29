import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

// A .csv file (comma separated values) usually won't contain any extraneous whitespace:
const csvManifest =
  "William Brian,William Martin,Henry Ravens,Richard Knowles,Stephen Hopkins";
// If we assume the file has no extra whitespace, there is no need to trim the strings:
console.log(csvManifest.split(","));
// Result: ["William Brian", "William Martin", "Henry Ravens", "Richard Knowles", "Stephen Hopkins"]

// The following .csv file has a leading space in entries after the first one:
const passengerManifest =
  "William Brian, William Martin, Henry Ravens, Richard Knowles, Stephen Hopkins";
// If we expect a certain pattern of whitespace, we can modify or split() or add a trim():
console.log(passengerManifest.split(",")); // This will leave leading whitespace
// Result: ["William Brian", " William Martin", " Henry Ravens", " Richard Knowles", " Stephen Hopkins"]
console.log(passengerManifest.split(", ")); // We can fix it by adjusting the split() pattern to ", "
// Result: ["William Brian", "William Martin", "Henry Ravens", "Richard Knowles", "Stephen Hopkins"]
console.log(passengerManifest.split(",").map(person => person.trimStart())); // Or we can trimStart()
// Result: ["William Brian", "William Martin", "Henry Ravens", "Richard Knowles", "Stephen Hopkins"]
// This has the advantage that it would still work with any amount of leading whitespace.
// Note: The function string.prototype.trimStart() is also called string.prototype.trimLeft().

// The following .csv file has tabbed indenting but also trailing whitespace that needs to be removed:
const formattedManifest =
  "William Brian    ,  William Martin   ,  Henry Ravens ,Richard Knowles   ,  Stephen Hopkins   ";
console.log(formattedManifest.split(",").map(person => person.trim())); // This removes the indenting
// Result: ["William Brian", "William Martin", "Henry Ravens", "Richard Knowles", "Stephen Hopkins"]
console.log(formattedManifest.split(",").map(person => person.trimEnd())); // This only trims the ends
// Result: ["William Brian", "  William Martin", "  Henry Ravens", "Richard Knowles", "  Stephen Hopkins"]
// The result retains the indenting (on the left side) but removes the extraneous space (on the right).
// Note: The function string.prototype.trimEnd() is also called string.prototype.trimRight().
