//Enter code here
function runProgram(input)
{
   input = input.trim().split("\n");
   for(let i=0; i<input.length; i++) {
       input[i] = input[i].trim().split(" ").map(Number);
       //console.log(query)
   }
   
   let tc = input[0];
   input.shift();
   
   let stack = [];
   let queue = [];
   let flag = true;
   
   for(let i=0; i<tc; i++) {
       let operation = input[i];
       let front = queue[0];
       
       if(operation[0] === 1) {
           queue.push(operation[1]);
           flag = false;
       } 
       else if (operation[0] === 2) {
           stack.push(operation[1]);
           flag = false;
       }
       else if (operation[0] === 3) {
           if(queue.length !== 0) {
               //front = queue[0];
               console.log(front);
           }
       }
       else if (operation[0] === 4) {
           if(stack.length !== 0) {
               let top = stack[stack.length-1];
               console.log(top);
           }
       }
       else if (operation[0] === 5) {
           queue.shift();
           stack.push(front);
       }
    }
    if(flag === true) {
        console.log("-1");
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

