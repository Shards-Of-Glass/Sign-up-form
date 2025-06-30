document.getElementById('btn').addEventListener('click',function(event){
    const password=document.getElementById('password').value;
    const cnfPassword=document.getElementById('password_confirmation').value;
    if(password!==cnfPassword){
        event.preventDefault();
        alert("Incorrect password confirmation");        
    };
});