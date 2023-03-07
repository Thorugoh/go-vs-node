const start = Date.now()

for (let i = 0; i<= 1000000; i++) {
    console.log(i);
}

const elapsed = Date.now() - start;

console.log(elapsed/1000);