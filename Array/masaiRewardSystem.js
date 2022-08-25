function runProgram(input)
{
   input = input.trim().split("\n");
   let tc = +(input[0]);
   let line = 1;
   for(let i=0; i<tc; i++) {
       let n = +(input[line++]);
       let str = input[line++].trim();
       //console.log(n, str)
       masaiRewardSystem(n,str);
   }
}

function masaiRewardSystem(n,str) {
   let sum = 0;
   let obj = {};
   for(let i=0; i<n; i++) {
       obj[str[i]] = obj[str[i]]+1 || 2;
   }
   
   for(i in obj) {
       sum += obj[i];
   }
   console.log(sum)
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