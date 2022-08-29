function sumOfBoundaryAndDiagonal(matrix){
    //write code here
    let sum1=0;
    let sum2=0;
    let sum3=0;
    let size=matrix.length
    for(let i=0;i<size;i++)
    {
        for(let j=0;j<size;j++)
        {
            if(i==0 || i==size-1 || j==0 || j==size-1)
            {
                sum1 += matrix[i][j];
            }
            else if(i!=0 && i!=size-1 && j!=0 && j!=size-1)
            {
                if(i==j)
                {
                    sum2 += matrix[i][j];
                }
                else if((i+j)==(size-1))
                {
                    sum3 += matrix[i][j];
                }
            }
        }
    }console.log(sum1+sum2+sum3)
}