//Enter code here
function runProgram(input)
{
   input = input.trim().split("\n");
   for(let i=0; i<input.length; i++) {
       input[i] = input[i].trim().split(" ").map(Number);
   }
   //console.log(input) Masai Restaurant
   
   let tc = input[0];
   input.shift();
   //console.log(input)
   
   let ans = [];
   for(let j=0; j<tc; j++) {
       let operation = input[j];
       //console.log(operation[0])
       if(operation[0] === 1) {
           if(ans.length === 0) {
               console.log("No Food");
           } else {
               console.log(ans[ans.length-1]);
               ans.pop();
           }
       }
       else if(operation[0] === 2) {
           ans.push(operation[1])
       }
   }
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
  