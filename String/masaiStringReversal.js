function runProgram(input)
{
   input = input.trim();
   let str = input;
   console.log(masaiStringReversal(str));
}

class Stack {
    constructor() {
        this.element = [];
    }
    push(element) {
        this.element.push(element);
    }
    pop() {
        if(this.element.length === 0) {
            
        } else {
            return this.element.pop();
        }
    }
    isEmpty() {
        if(this.element.length>0) {
            return false;
        } else {
            return true;
        }
    }
    
}

function masaiStringReversal(str) {
    let stack = new Stack();
    let i = 0;
    let bag = "";
    while (i !== str.length) {
        stack.push(str.charAt(i));
        i++;
    }
    
    while(!stack.isEmpty()) {
        bag += stack.pop();
    }
    
    return bag;
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



