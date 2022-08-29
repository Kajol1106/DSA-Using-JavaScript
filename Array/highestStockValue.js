function stockValue(n,arr){
    // write code here
    
    let sum = 0;
    let ans = [];
    for(let i=0; i<n; i++) {
        sum += arr[i]
        ans.push(sum);
        //break;
    }
    ans.push(0);
    console.log(Math.max(...ans));
}