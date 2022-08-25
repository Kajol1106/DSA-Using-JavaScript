function transposeTheMatrix(N, M, matrix){
    for(let i=0;i<M;i++)
     {
         let bag="";
         for(let j=0;j<N;j++)
         {
             bag=bag+matrix[j][i]+" ";
         }
         console.log(bag);
     }
 }
 