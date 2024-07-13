let a = 108;
let b = 72;
if (a>b){
    min = b;
}
else {
    min =a;s
}
for (let i = 1; i<=min;i++){
    if (a%i == 0 && b%i == 0){
        var ans = i;
    }
}
console.log(ans);