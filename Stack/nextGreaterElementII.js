//Enter code here
function runProgram(input)
{
   input = input.trim().split("\n");
   let tc = +(input[0]);
   let line = 1;
   for(let i=0; i<tc; i++) {
       let n = +(input[line++]);
       let arr = input[line++].trim().split(" ").map(Number);
       //console.log(n, arr);
       nextGreaterElementII(n, arr);
   }
}

function nextGreaterElementII(n, arr) {
    let stack = [];
    let ans = [];
    for(let i=2*n; i>0; i--) {
        let index = i%n;
        while(stack.length>0 && arr[index]>=arr[stack[stack.length-1]]) {
            stack.pop();
        }
        if(stack.length == 0) {
            ans[index] = -1;
        }
        else {
            ans[index] = arr[stack[stack.length-1]];
        }
        stack.push(index);
    }
    console.log(ans.join(" "));
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