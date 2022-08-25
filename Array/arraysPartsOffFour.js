function runProgram(input)
{
   input = input.trim().split("\n");
   let n = +(input[0]);
   let arr = input[1].trim().split(" ").map(Number);
   //console.log(n, arr)
   arrayPartsOfFour(n, arr);
}

function arrayPartsOfFour(n, arr) {
    let c1 = 0;
    let c2 = 0;
    let c3 = 0;
    let c4 = 0;
    
    let firstHalf = [];
    for(let i=0; i<Math.floor(n/2); i++) {
        firstHalf.push(arr[i]);
    }
    //console.log(firstHalf)
    
    //let f1 = [];
    for(let i=0; i<Math.floor(firstHalf.length/2); i++) {
        //f1.push(firstHalf[i]);
        c1 += firstHalf[i];
    }
    //console.log(f1);
    //console.log(c1)
    
    //let f2 = [];
    for(let i=Math.floor(firstHalf.length/2); i<firstHalf.length; i++) {
        //f2.push(firstHalf[i]);
        c2 += firstHalf[i];
    }
    //console.log(f2);
    //console.log(c2)
    
    
    
    let secondHalf = [];
    for(let i=Math.floor(n/2); i<n; i++) {
        secondHalf.push(arr[i]);
    }
    //console.log(secondHalf)
    
    //let s1 = [];
    for(let i=0; i<Math.floor(secondHalf.length/2); i++) {
        //s1.push(secondHalf[i]);
        c3 += secondHalf[i];
    }
    //console.log(s1);
    //console.log(c3)
    
    //let s2 = [];
    for(let i=Math.floor(secondHalf.length/2); i<secondHalf.length; i++) {
        //s2.push(secondHalf[i]);
        c4 += secondHalf[i];
    }
    //console.log(s2);
    //console.log(c4)
    
    let sum = 2*c1 + c2 + 2*c3 + c4;
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