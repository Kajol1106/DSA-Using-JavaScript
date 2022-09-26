//Enter code here
function runProgram(input)
{
   input=input.trim().split("\n");
   let [n,x]=input[0].trim().split(" ").map(Number);
   let arr=input[1].trim().split(" ").map(Number);
   //console.log(n,x,arr);
   nobodyExamination(n,x,arr);
}

function nobodyExamination(n,x,arr)
{
    let count=0;
    let miss_count=0;
    for(let i=0;i<n;i++)
    {
        if(arr[i]<=x && miss_count<=1)
        {
            count++;
        }
        else
        {
            miss_count++;
        }
    }
    console.log(count)
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