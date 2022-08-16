document.getElementById('btn-withdraw').addEventListener('click',function(){
    //get the value
    const withdrawField = document.getElementById('withdraw');
    const newWithdrawAmnString = withdrawField.value;
    const newWithdrawAmn = parseFloat(newWithdrawAmnString);
    //get the current deposit total
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);


    withdrawField.value = '';
    if(isNaN(newWithdrawAmn))
    {
        alert('Please enter valid number');
        return;
    }

   

    const balanTotal = document.getElementById('balance-total');
    const previousbalanTotalString = balanTotal.innerText;
    const previousbalanTotal = parseFloat(previousbalanTotalString);

    if(newWithdrawAmn > previousbalanTotal)
    {
        alert('Insufficent Balance !!!');
        return;
    }
    const currentWithdraw = previousWithdrawTotal + newWithdrawAmn;
    withdrawTotalElement.innerText = currentWithdraw;

    const crntBalance = previousbalanTotal -  newWithdrawAmn;
    balanTotal.innerText = crntBalance;

   
    
})