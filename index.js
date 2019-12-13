function sumTwoSmallestNumbers(numbers, n=numbers.length) {  
  if(n === 1){
    return numbers[0] + numbers[1]
  }
  for(let i =0; i < n; i++){
    if(numbers[i] > numbers[i+1]){
      [numbers[i], numbers[i+1]] = [numbers[i+1], numbers[i]]
    }
  }
   return sumTwoSmallestNumbers(numbers, n-1)  
}

sumTwoSmallestNumbers([15, 28, 4, 2, 43])

// sumTwoSmallestNumbers([5, 8, 12, 19, 22])