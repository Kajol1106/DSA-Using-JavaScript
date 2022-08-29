function runProgram(input)
{
   input = input.trim().split("\n");
   for(let i=0; i<input.length; i++) {
       input[i] = input[i].trim().split(" ").map(Number);
       //console.log(stack)
       
   }
   //console.log(input)  //push pop top
   
   let tc = input[0];
   input.shift();
   //console.log(tc);
   
   let ans = []
   
   for(let j=0; j<tc; j++) {
       let operation = input[j];
       //console.log(operation)
       
       if(input[input.length === 0]) {
           console.log("Empty!")
       }
       
       else if(operation[0] === 1) {
           ans.push(operation[1])
       }
       
       else if(operation[0] === 2) {
           ans.pop();
           //console.log(ans)
       }
       
       else if(operation[0] === 3) {
           if(ans.length === 0) {
               console.log("Empty!");
           } else {
               console.log(ans[ans.length-1])
           }
       }
       
   }
   //console.log(ans)
   
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