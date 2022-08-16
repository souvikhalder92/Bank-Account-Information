//add event Listener
document.getElementById('btn-deposit').addEventListener('click',function(){
    //get the value
    const depositField = document.getElementById('deposit');
    const newDepositAmnString = depositField.value;
    const newDepositAmn = parseFloat(newDepositAmnString);


    depositField.value = '';
    if(isNaN(newDepositAmn))
    {
        alert('Please enter valid number');
        return;
    }
    //get the current deposit total
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    const currentDeposit = previousDepositTotal + newDepositAmn;

    depositTotalElement.innerText = currentDeposit;

    const balanTotal = document.getElementById('balance-total');
    const previousbalanTotalString = balanTotal.innerText;
    const previousbalanTotal = parseFloat(previousbalanTotalString);

    const crntBalance = previousbalanTotal + newDepositAmn;
    balanTotal.innerText = crntBalance;

   
    
})
