function runProgram(input)
{
    input=input.trim().split("\n")
    var tc=+(input[0]);
    var line=1;
    
    for(var i=line;i<=tc;i++)
    {
        var [N,B]=input[line].trim().split(" ").map(Number);
        line++;
        var arr=input[line].trim().split(" ").map(Number);
        line++
        
        console.log(twoSum(N,B,arr));
    }
}



function twoSum(N,B,arr)
{
    var left=0;
    var right=N-1;
    var sum=0;
    while(left<right)
    {
        sum=arr[left]+arr[right];
        
        if(sum==B)
        {
            return left+" "+right;
        }
        else if(sum<B)
        {
            left++
        }
        else
        {
            right--;
        }
    }
    return -1+" "+-1;
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