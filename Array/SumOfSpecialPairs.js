function sumOfSpecialPairs(N,A){
    //write code here
    
    var sum=0;
    for(var i=0;i<N;i++)
    {
        for(var j=1+1;j<N;j++)
        {
            var num=j-i;
            var fact=0;
            for(var k=0;k<=num;k++)
            {
                if(num%k==0)
                {
                    fact++;
                }
            }
            if(fact==2&&i<j)
            {
                var diff=Math.abs(A[i]-A[j]);
                sum=sum+diff;
            }
        }
    }
    console.log(sum);
    

}