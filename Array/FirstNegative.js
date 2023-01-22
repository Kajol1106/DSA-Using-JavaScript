function runProgram(input)
{
   input = input.trim().split("\n");
   let tc = input[0].trim().split().map(Number);
   let line = 1;
   for(let i=0; i<tc; i++) {
       let [n, k] = input[line++].trim().split(" ").map(Number);
       let arr = input[line++].trim().split(" ").map(Number);
       firstNegative(n, k, arr);
       //console.log(n, k, arr);
   }
}

function firstNegative(n, k, arr) {
    let res = [];
    for(let i=0; i<n-k+1; i++) {
        let isNegative = false;
        for(let j=0; j<k; j++) {
            if(arr[i+j]<0) {
                res.push(arr[i+j]);
                isNegative = true;
                break;
            }
        }
        if(!isNegative) {
            res.push(0);
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