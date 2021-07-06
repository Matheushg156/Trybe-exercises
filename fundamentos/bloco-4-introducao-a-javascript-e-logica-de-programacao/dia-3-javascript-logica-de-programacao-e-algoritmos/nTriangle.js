let n = 5;
let symbol = '*';
let inputLine = '';

let midOfTriangle = (n + 1) / 2;
let left = midOfTriangle;
let right = midOfTriangle;

for (let lineIndex = 0; lineIndex <= midOfTriangle; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex > left && columnIndex < right) {
      inputLine = inputLine + symbol;
    } else {
      inputLine = inputLine + ' ';
    }
  }
  console.log(inputLine);
  inputLine = '';
  right += 1;
  left -= 1;
}