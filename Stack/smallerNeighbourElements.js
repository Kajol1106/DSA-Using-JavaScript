//Enter code here
function runProgram(input)
{
   input = input.trim().split("\n");
   let size = +(input[0]);
   let arr = input[1].trim().split(" ").map(Number);
   //console.log(size, arr)
   smallerNeighbourElement(size, arr);
}

function smallerNeighbourElement(size, arr) {
    let ans = [];
    let stack = [];
    for(let i=0; i<size; i++) {
        while(stack.length>0 && arr[i]<=stack[stack.length-1]) {
            stack.pop();
        }
        if(stack.length === 0) {
            ans.push(-1);
        }
        else {
            ans.push(stack[stack.length-1]);
        }
        stack.push(arr[i]);
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