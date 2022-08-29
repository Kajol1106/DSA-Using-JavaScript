function divisionTask(N) {
    // Write code here
    let x=Math.floor(32/N);
    if(x==0)
    {
       console.log("Too Low") 
    }
    else if(N==0)
    {
        console.log("-1")
    }
    else
    {
        console.log(x);
    }
}