//Enter code here
function runProgram(input)
{
   input = input.trim().split("\n");
   let tc = +(input[0]);
   let line = 1;
   for(let i=0; i<tc; i++) {
       let size = +(input[line++]);
       let arr = input[line++].trim().split(" ").map(Number);
       //console.log(size, arr)
       nearestGreaterElement(size, arr);
   }
}

function nearestGreaterElement(size, arr) {
    //Brute Force Approach
    //nearest greater element from left side
    let left = [];  //for store index
    let leftVal = [];   //store value
    for(let i=0; i<size; i++) {
        let leftval = -1;   //store value
        let curr = -1;      //store index
        for(let j=i-1; j>=0; j--) {
            if(arr[i]<arr[j]) {
                leftval = arr[j];
                curr = j;
                break;
            }
        }
        leftVal[i] = leftval;
        left[i] = curr;
    }
    //console.log(left)
    //console.log(leftVal)
    
     //nearest greater element from right side
     let right = []; //for index
     let rightVal = [];  //for value
     for(let i=0; i<size; i++) {
         let curr = -1;  //for index
         let rightval = -1; //for value
         for(let j=i+1; j<size; j++) {
             if(arr[i]<arr[j]) {
                 rightval = arr[j];
                 curr = j;
                 break;
             }
         }
         rightVal[i] = rightval;
         right[i] = curr;
     }
     //console.log(right)
     //console.log(rightVal)
     
      // final solution
    let ans = [];
    for(let i=0; i<size; i++) {
        if(left[i] === right[i]) {
            ans[i] = -1;
        }
        else if(left[i] === -1) {
            ans[i] = rightVal[i];
        }
        else if(right[i] === -1) {
            ans[i] = leftVal[i];
        }
        else {
            let l = Math.abs(i-left[i]);
            let r = Math.abs(i-right[i]);
            if(l>r) {
                //right[i] = arr[i]
                ans[i] = rightVal[i];
            } else {
                //left[i] = arr[i];
                ans[i] = leftVal[i];
            }
        }
    }
    console.log(ans.join(" "));
    
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