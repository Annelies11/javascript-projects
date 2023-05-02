const initialMemoryUsage = process.memoryUsage().heapUsed;
for(i=0;i<100000;i++){

}
const memoryUsageNow = process.memoryUsage().heapUsed;
console.log("Awal : "+initialMemoryUsage);
console.log("Lalu : "+memoryUsageNow);