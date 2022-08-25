function runProgram(input)
{
   input = input.trim().split("\n");
   let tc = +(input[0]);
   let line = 1;
   for(let i=0; i<tc; i++) {
       let n = +(input[line++]);
       let str = input[line++].trim();
       //console.log(n,str);
       decipherString(n,str)
   }
}

function decipherString(n,str) {
    let i = 0;
    let j = 1;
    let bag = "";
    while(i<n-1 && j<n) {
        let charOccurance = str[j];
        //console.log(charOccurance)
        for(let k=0; k<charOccurance; k++) {
            bag += str[i];
        }
        i = i+2;
        j = j+2;
    }
    console.log(bag)
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