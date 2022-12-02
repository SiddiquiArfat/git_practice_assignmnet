let a = "masam";
let rev = "";
for(let i=a.length-1;i>=0;i++){
  rev += a[i];
}
if(a == rev){
  console.log("Palindrome");
}
else{
  console.log("Not a palindrome");
}