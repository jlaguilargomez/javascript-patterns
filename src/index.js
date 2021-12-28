import singletonCounter from "./singleton-pattern/counter.js";

const counterInstance = singletonCounter.getInstance();
const counterInstance2 = singletonCounter.getInstance();

counterInstance.increment();
counterInstance.increment();

console.log(counterInstance.getCount());
console.log(counterInstance2.getCount());
