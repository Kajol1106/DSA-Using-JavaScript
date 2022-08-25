function runProgram(input)
{
   input = input.trim().split("\n");
   let [size, target] = input[0].trim().split(" ").map(Number);
   let arr = input[1].trim().split(" ").map(Number);
   //console.log(size, target, arr)
   countSuchPairs(size,target,arr);
}

function countSuchPairs(size,target,arr) {
    let count = 0;
    for(let i=0; i<size; i++) {
        for(let j=i+1; j<size; j++) {
            if(arr[i]+arr[j] == target) {
                count++;
            }
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
  
  