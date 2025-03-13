const prima = (angka) =>
{
    for(let i =2; i <= Math.sqrt(angka); i++)
      
         if(angka%i === 0){
        return false
    }
    else
    {
        return true
    } 
    
  
      console.log(angka)
}

console.log(prima(5))