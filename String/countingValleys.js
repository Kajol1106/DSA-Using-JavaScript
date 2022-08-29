function runProgram(input)
{
   input = input.trim().split("\n");
   //console.log(input)
   let size = +(input[0]);
   let str = input[1].trim();
   //console.log(size , str)
   countingValleys(size, str);
}

function countingValleys(size, str) {
    let count = 0;
    let res = 0;
    for(let i=0; i<size; i++) {
        let char = str.charAt(i);
        //console.log(char)
        if(char === "U") {
            count++;
            
            if(count === 0) {
                res++;
            }
        } else {
            count--;
        }
    }
    console.log(res)
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
