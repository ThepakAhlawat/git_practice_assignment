function prime(num){
    let prime=true;
  for (let i=2;i<num;i++){
    if(num%i==0){
      prime=false;
      break;
    }
  }
  if(prime==true){
    return'It is a prime Number'
  }
  else{
    return'It is not a prime Number'
  }
  }
  console.log(prime(101))