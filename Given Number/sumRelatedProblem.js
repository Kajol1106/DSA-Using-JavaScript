function sumRelatedProblem(N) {
    // Write code here
    let sum=0;
    let start=0;
    while(start<=N)
    {
        if(start%2==0)
        {
            sum += start;
        }
        start++;
    }
    console.log(sum)
    
    // let sum=0;
    // for(let i=0;i<=N;i++)
    // {
    //     if(i%2==0)
    //     {
    //         sum=sum+i;
    //     }
    // }
    //console.log(sum)
}