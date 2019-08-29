import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

// A .csv file (comma separated values) usually won't contain any extraneous whitespace
const csvManifest =
  "William Brian,William Martin,Henry Ravens,Richard Knowles,Stephen Hopkins";
// If we assume the file has no extra whitespace, there is no need to trim the strings:
console.log(csvManifest.split(","));
// Result:

// The following .csv file has a leading space in entries after the first one.
const passengerManifest =
  "William Brian, William Martin, Henry Ravens, Richard Knowles, Stephen Hopkins";
// If we expect a certain pattern of whitespace, we can modify or split() or add a trim():
console.log(passengerManifest.split(",")); // This will leave leading whitespace
// Result:
console.log(passengerManifest.split(", ")); // We can fix it by adjusting the split() pattern to ", "
// Result:
console.log(passengerManifest.split(",").map(person => person.trimStart())); // Or we can trimStart()
// Result:
// This has the advantage that it would still work with any amount of leading whitespace.
// Note: The function trimStart() is also called trimLeft().

// The following .csv file has tabbed indenting but also trailing whitespace that needs to be removed.
const formattedManifest =
  "William Brian    ,  William Martin   ,  Henry Ravens ,Richard Knowles   ,  Stephen Hopkins   ";
console.log(formattedManifest.split(",").map(person => person.trim())); // This removes the indenting
// Result:
console.log(formattedManifest.split(",").map(person => person.trimEnd())); // Or we can trimStart()
// Result:
// Note: The function trimEnd() is also called trimRight().
