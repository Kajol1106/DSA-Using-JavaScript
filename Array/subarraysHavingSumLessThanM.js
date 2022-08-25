function runProgram(input)
{
   input = input.trim().split("\n");
   let tc = +(input[0]);
   let line = 1;
   for(let i=0; i<tc; i++) {
       let [size, M] = input[line++].trim().split(" ").map(Number);
       let arr = input[line++].trim().split(" ").map(Number);
       //console.log(size, M, arr);
       subarraysHavingSumLessThanM(size, M, arr);
   }
   
}

function subarraysHavingSumLessThanM(size, M, arr) {
    let start = 0; 
    let end = 0; 
    let count = 0; 
    let sum = arr[0];
    
    while(start<size && end<size) {
        if(sum<M) {
            end++;
            if(end>=start) {
                count += end-start;
            }
            if(end<size) {
                sum += arr[end];
            }
        }
        else {
            sum -= arr[start];
            start++;
        }
    }
    console.log(count)
    
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