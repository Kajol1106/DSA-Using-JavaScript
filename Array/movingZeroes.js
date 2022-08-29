//Enter code here
function runProgram(input)
{
   input = input.trim().split("\n");
   let tc = +(input[0]);
   let line = 1;
   for(let i=0; i<tc; i++) {
       let size = +(input[line++]);
       let arr = input[line++].trim().split(" ").map(Number);
       //console.log(size, arr);
       console.log(movingZeroes(size, arr));
   }
}


function  movingZeroes(size, arr) {
    let j = 0;
    for(let i=0; i<size; i++) {
        if(arr[i] !== 0) {
            [arr[j], arr[i]] = [arr[i], arr[j]];
            j++;
        }
    }
    return arr.join(" ");
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
