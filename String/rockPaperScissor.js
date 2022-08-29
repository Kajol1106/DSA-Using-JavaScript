function runProgram(input)
{
   input = input.trim().split("\n");
   let n = +(input[0]);
   let str1 = input[1].trim();
   let str2 = input[2].trim();
   rockPaperScissor(n, str1, str2);
}

function rockPaperScissor(n, str1, str2) {
    let arr1 = [];
    let arr2 = [];
    for(let i=0; i<n; i++) {
        if(str1[i]=="r" && str2[i]=="p") {
            arr1.push(0);
            arr2.push(1);
        }
        else if(str1[i]=="p" && str2[i]=="r") {
            arr1.push(1);
            arr2.push(0);
        }
        else if(str1[i]=="r" && str2[i]=="s") {
            arr1.push(1);
            arr2.push(0);
        }
        else if(str1[i]=="s" && str2[i]=="r") {
            arr1.push(0);
            arr2.push(1);
        }
        else if(str1[i]=="p" && str2[i]=="s") {
            arr1.push(0);
            arr2.push(1);
        }
        else if(str1[i]=="s" && str2[i]=="p") {
            arr1.push(1);
            arr2.push(0);
        }
        else {
            arr1.push(0);
            arr2.push(0);
        }
    }
    //console.log(arr1);
    //console.log(arr2);
    
    let sum1 = 0;
    let sum2 = 0;
    for(let i=0; i<n; i++) {
        sum1 += arr1[i];
        sum2 += arr2[i];
    }
    //console.log(sum1);
    //console.log(sum2);
    
    if(sum1<sum2) {
        console.log("Second");
    }
    else if (sum1>sum2){
        console.log("First");
    }
    else {
        console.log("Draw");
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