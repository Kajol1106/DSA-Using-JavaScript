function runProgram(input)
{
   input = input.trim().split("\n");
   let tc = +(input[0]);
   let line = 1;
   for(let i=0; i<tc; i++) {
       let n = +(input[line++]);
       let str = input[line++].trim();
       //console.log(n,str)
       console.log(divideAndConquer(n, str));
   }
}


function divideAndConquer(n, str) {
    let word = "war";
    let ans = "";
    for(let i=0; i<n; i++) {
        if(str[i]+str[i+1]+str[i+2] == word) {
            i = i+2;
        }
        else {
            ans += str[i];
        }
    }
    return ans == word?"YES" : "NO";
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