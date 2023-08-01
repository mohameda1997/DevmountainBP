const numbers1 = [1, 2, 3, -1];
let found = false;

for (let i = 0; i < numbers1.length; i++) {
  for (let j = i + 1; j < numbers1.length; j++) {
    if (numbers1[i] + numbers1[j] === 0) {
      found = true;
      break;
    }
  }
}

console.log(found); 


const numbers2 = [1, 2, 3, 4];
found = false;

for (let i = 0; i < numbers2.length; i++) {
  for (let j = i + 1; j < numbers2.length; j++) {
    if (numbers2[i] + numbers2[j] === 0) {
      found = true;
      break;
    }
  }
}

console.log(found); 

