const startTime = Date.now();
function someHeavyTask() {
    for (let i = 0; i < 5e7; i++) {
        Math.sqrt(i)
    }
}

someHeavyTask();

const endTime = Date.now();
const elacpsedTime = endTime - startTime;
console.log(`Elapsed time : ${elacpsedTime}`);