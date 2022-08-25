function runProgram(input)
{
   input = input.trim().split("\n");
   let tc = +(input[0]);
   let line = 1;
   for(let i=0; i<tc; i++) {
       let n = +(input[line++]);
       let str = input[line++].trim();
       //console.log(n, str);
       cipherString(n,str);
   }
}

function cipherString(n,str) {
    let i = 0;
    let j = 0;
    let bag = "";
    let count = 0;
    
    while(i<n) {
        if(str[i] == str[j]) {
            j++;
            count++;
        }
        else {
            bag += str[i]+count;
            i = j;
            count = 0; 
        }
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
  