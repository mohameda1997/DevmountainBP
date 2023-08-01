function sortByProduct(arr) {
    
    const products = arr.map((value, index) => value * (index + 1));
  
    const indices = Array.from(arr.keys());
  
 
    indices.sort((a, b) => products[a] - products[b]);
  
    
    const sortedArr = indices.map((index) => arr[index]);
  
    return sortedArr;
  }
  
  
  const inputArr = [23, 2, 3, 4, 5];
  const outputArr = sortByProduct(inputArr);
  console.log(outputArr); 
  
  