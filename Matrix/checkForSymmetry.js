function checkForSymmetry(n, matrix) {
    //write code here
    //console n,matrix and check the input response
    let horizontalSymmetry = checkForHorizontalSymmetry(n, matrix);
    let verticalSymmetry = checkForVerticalSymmetry(n, matrix);
    
    if (horizontalSymmetry && verticalSymmetry) {
      console.log('BOTH');
    } 
    else if (horizontalSymmetry) {
      console.log('HORIZONTAL');
    } 
    else if (verticalSymmetry) {
      console.log('VERTICAL');
    } 
    else {
      console.log('NO');
    }
}

function checkForHorizontalSymmetry(n, mat) {
    let top = 0;
    let bottom = n - 1;
    while (bottom > top) {
      for (let i = 0; i < n; i++) {
        if (mat[top][i] != mat[bottom][i]) {
          return false;
        }
      }
      bottom--;
      top++;
    }
    return true;
}
  
  function checkForVerticalSymmetry(n, mat) {
    let left = 0;
    let right = n - 1;
    while (right > left) {
      for (let i = 0; i < n - 1; i++) {
        if (mat[i][left] != mat[i][right]) {
          return false;
        }
      }
      left++;
      right--;
    }
    return true;
}