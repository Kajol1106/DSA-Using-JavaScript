function masaiSchoolHurray(N) {
    // Write code here
    var start=1;
    while(start<=N)
    {
       if(start%5===0 && start%7===0)
       {
       console.log("Masai School");
       }
       else if(start%7===0)
       {
       console.log("Masai");
       }
       else if(start%5===0)
       {
       console.log("School");
       }
       else
       {
       console.log("Hurray!")
       }
       
       start++;
    }
   
}