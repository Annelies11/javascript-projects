const initialMemoryUsage = process.memoryUsage().heapUsed;
const aris = process.argv[2];
const environtment = process.env.Node_ENV;

for(i=0;i<1000000;i++){

}
const memoryUsageNow = process.memoryUsage().heapUsed;

console.log(`Hai, ${aris}`);
console.log(`Mode environtment : ${environtment}`);
console.log(`Penggunaan memory dari ${initialMemoryUsage} naik ke ${memoryUsageNow}`);