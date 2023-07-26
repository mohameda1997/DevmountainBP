function towerBuilder(n) {
    const tower = [];
  
    for (let i = 1; i <= n; i++) {
      const spaces = ' '.repeat(n - i);
      const blocks = '*'.repeat(2 * i - 1);
      const floor = spaces + blocks + spaces;
      tower.push(floor);
    }
  
    return tower;
  }
  console.log(towerBuilder(3));