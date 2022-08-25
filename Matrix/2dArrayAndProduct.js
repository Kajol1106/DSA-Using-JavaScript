function twoArrayAndProduct(n, m, matrix, p){
    let count=0;
    let a=matrix;
    for(let i=0;i<n;i++)
    {
        for(let j=0;j<m;j++)
        {
            if(j<a[i].length-2) //finding product along the horizontal direction
            {
                let temp=a[i][j]*a[i][j+1]*a[i][j+2];
                if(temp==p)
                {
                    count++;
                }
            }
            if(i<a.length-2)    //finding product vertical direction
            {
                let temp=a[i][j]*a[i+1][j]*a[i+2][j];
                if(temp==p)
                {
                    count++;
                }
            }
            if(i<a.length-2 && j<a[j].length-2) //finding product of diagoanls
            {
                let temp=a[i+2][j]*a[i+1][j+1]*a[i][j+2];
                if(temp==p)
                {
                    count++;
                }
            }
            if(i<a.length-2 && j<a.length-2)    //finding product of diagonals
            {
                let temp=a[i][j]*a[i+1][j+1]*a[i+2][j+2];
                if(temp==p)
                {
                    count++;
                }
            }
            
        }
    }console.log(count)
}