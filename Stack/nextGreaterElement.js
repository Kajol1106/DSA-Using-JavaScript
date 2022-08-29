//Enter code here
function runProgram(input)
{
   input = input.trim().split("\n");
   let tc = +(input[0]);
   let line = 1;
   for(let i=0; i<tc; i++) {
       let size = +(input[line++]);
       let arr = input[line++].trim().split(" ").map(Number);
       //console.log(size, arr)
       nextGreaterElement(size, arr);
   }
}

function nextGreaterElement(size, arr) {
    let res = [];
    let stack = [];
    for(let i=size-1; i>=0; i--) {
        while(stack.length>0 && arr[i]>=stack[stack.length-1]) {
            stack.pop();
        }
        if (stack.length === 0) {
            res.push(-1);
        }
        else {
            res.push(stack[stack.length-1]);
        }
        stack.push(arr[i]);
    }
    console.log(res.reverse().join(" "));
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