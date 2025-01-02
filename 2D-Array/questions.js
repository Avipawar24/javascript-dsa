// Write a function to count the sum of all diagonal elements in a square matrix.

let matrix = [[1,2,3,4],    
              [5,6,7,8],   
              [9,10,11,12],
             [13,14,15,16]]

let n = matrix.length  
    
// console.log(countSumDiagonal(matrix) )
console.log(countSumSecondaryDiagonal(matrix))

function countSumDiagonal(matrix){
    let sum = 0;
   for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
        if(i==j){
            let matsum = matrix[i][j]
            sum+=matsum
        }
    }
   }
   return sum;
}
function countSumSecondaryDiagonal(matrix){
    let sum=0;
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            if(i+j ==n-1){
                let num = matrix[i][j];
                sum+=num;
            }
        }
    }
    return sum;
}