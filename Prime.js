let a = 3,count = 0;
for(let i=1;i<=a;i++){
  if(a%i==0){
    count++;
  }
}

if(count == 1){
  console.log("prime");
}
else{
  console.log("Not Prime");
}