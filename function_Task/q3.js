function highestPowerOf2(n)
{
    return (n & (~(n - 1)));
}
 
var n = 24;
console.log(highestPowerOf2(n))