function runProgram(input)
{
   input = input.trim();
   //console.log(input)
   console.log(reduceString(input));
}

class Stack {
    constructor() {
        this.element = [];
    }
    push(el) {
        this.element.push(el);
    }
    pop() {
        if(this.element.length === 0) {
        
        } else {
            return this.element.pop();
        }
    }
    isEmpty() {
        if(this.element.length >0) {
            return true;
        } else {
            return false;
        }
    }
}

function reduceString(input) {
    let stack = new Stack();
    let bag = "";
    for (let i=0; i<input.length-1; i++) {
        if(input[i] === stack[stack.length-1] && (!stack[stack.length].isEmpty)) {
            stack.pop();
        }
        else {
            bag += push(input[i]);
        }
    }
    
    if(stack.length === 0) {
        return "Empty String";
    } else {
        return bag;
    }
    // let ans = [];
    // for(let i=0; i<input.length; i++) {
    //     if(input[i] === ans[ans.length-1] && ans[ans.length-1] !== 0) {
    //         ans.pop();
    //     }
    //     else {
    //         ans.push(input[i]);
    //     }
    // }
    
    // if(ans.length === 0) {
    //     console.log("Empty String");
    // }
    // else {
    //     console.log(ans.join(""))
    // }
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