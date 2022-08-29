//Enter code here
function runProgram(input)
{
   input = input.trim().split("\n");
   let tc = +(input[0]);
   let line = 1;
   for(let i=0; i<tc; i++) {
       let num = +(input[line++]);
       //console.log(num);
       isItHappy(num);
   }
}

function digitSquare(num) {
    let square = 0;
    while(num !== 0) {
        let digit = num%10;
        square += digit*digit;
        num = parseInt(num/10, 10);
    }
    return square;
}

function happyNum(num) {
    while(true) {
        if(num == 1) {
            return true;
        }
        num = digitSquare(num);
        if(num == 4) {
            return false;
        }
    }
}

function isItHappy(N) {
    if(happyNum(N)) {
        console.log("true");
    }
    else {
        console.log("false");
    }
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