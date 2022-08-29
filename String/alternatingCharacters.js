//Enter code here
function runProgram(input)
{
   input = input.trim().split("\n");
   let tc = +(input[0]);
   let line = 1;
   for(let i=0; i<tc; i++) {
       let str = input[line++].trim();
       //console.log(str)
       alterNatingCharacter(str);
   }
}

function alterNatingCharacter(str) {
    let count = 0;
    for(let i=0; i<str.length; i++) {
        if(str[i] === str[i+1]) {
            count++;
        }
    }
    console.log(count)
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