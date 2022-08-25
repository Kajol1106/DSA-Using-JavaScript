function rotateBy90Clockwise(N, matrix){
    //write code here
    for(let i=0; i<N; i++) {
        let res = "";
        for(let j=N-1; j>=0; j--) {
            res += matrix[j][i]+" ";
        }
        console.log(res)
    }
}
