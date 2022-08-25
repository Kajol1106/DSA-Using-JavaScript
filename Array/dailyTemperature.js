function runProgram(input)
{
   input = input.trim().split("\n");
   let tc = +(input[0]);
   let line = 1;
   for(let i=0; i<tc; i++) {
       let n = +(input[line++]);
       let arr = input[line++].trim().split(" ").map(Number);
       //console.log(n, arr)
       dailyTemperatures(n, arr);
   }
}

function dailyTemperatures(n, arr) {
    let res = new Array(n).fill(0);
    for(let i=0; i<n-1; i++) {
        let currDay = arr[i];
        for(let j=i+1; j<n; j++) {
            if(currDay < arr[j]) {
                res[i] = j-i;
                break;
            } 
        }
    }
    console.log(res.join(" "));
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