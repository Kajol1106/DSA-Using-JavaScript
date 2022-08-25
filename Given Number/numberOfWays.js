function runProgram(input)
{
  input = input.trim().split("\n");
  let num = +(input[0]);
  //console.log(num)
  numberOfWays(num);
}

function numberOfWays(num) {
    let count = new Array(num+1);
    count[0] = 1;
    if(num>=1) {
        count[1] = 1;
    }
    if(num>=2) {
        count[2]=2;
    }
    
    for(let i=3; i<=num; i++) {
        count[i] = count[i-1]+count[i-2]+count[i-3];
    }
    console.log(count[num])
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
  
  