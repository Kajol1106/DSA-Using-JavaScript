//Enter code here
function runProgram(input)
{
   input = input.trim().split("\n");
   //console.log(input)
   let tc = +(input[0]);
   let line = 1;
   for(let i=0; i<tc; i++) {
       let str = input[line++].trim();
       //console.log(str)
       reverseString(str);
   }
}

function reverseString(str) {
    let bag = "";
    for(let i=str.length-1; i>=0; i--) {
        bag += str[i];
    }
    console.log(bag)
}

if (process.env.USER === "") {
    runProgram(``);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }