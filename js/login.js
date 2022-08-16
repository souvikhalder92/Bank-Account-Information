document.getElementById('btn').addEventListener('click',function(){



   
   const emailField = document.getElementById('user-email');
   const email = emailField.value;
   const passfield = document.getElementById('user-pass'); 
   const pass = passfield.value;
  

   //danger:dont try this way
   
   if(email === 'sou@gmail.com' && pass === '1234')
   {
    window.location.href = 'bank.html';
   }
   else
   {
    alert('invalid password!!!');
   }

})