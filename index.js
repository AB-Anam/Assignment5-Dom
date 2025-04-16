const goButton = document.getElementById('goButton');
if (goButton) {
  goButton.addEventListener('click', function () {
    window.location.href = './blog.html';
  });
}

const backButton = document.getElementById('backButton');
if (backButton) {
  backButton.addEventListener('click', function () {
    window.location.href = './index.html';
  });
}

const buttons = document.querySelectorAll('.toggle-btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => {
      btn.classList.remove('bg-barn-primary');
      btn.classList.add('bg-gray-200');
    });

    button.classList.remove('bg-gray-200');
    button.classList.add('bg-barn-primary');

    if (button.id === 'btn1') {
        window.location.href = './index.html';
      } else if (button.id === 'btn2') {
        window.location.href = './history.html';
      }
  });
});

document.getElementById('donate-Noakhali-flood').addEventListener('click',function(event){
  event.preventDefault();
  const donateInput = document.getElementById('donateInput1').value;
  donation(donateInput, 'totalDonation1');
})
document.getElementById('feniFlood').addEventListener('click',function(event){
  event.preventDefault();
  const donateInput = document.getElementById('donateInput2').value;
  donation(donateInput,'totalDonation2');
})
document.getElementById('quotaMovement').addEventListener('click',function(event){
  event.preventDefault();
  const donateInput = document.getElementById('donateInput3').value;
  donation(donateInput, 'totalDonation3');
})

//common function for event Listeners
function donation(donate, totalDonation){
  const donateInputNumber = parseFloat(donate);
  console.log(donateInputNumber);

  const balance = getText('accountBalance');
  const newBalance = balance - donateInputNumber;
  showText('accountBalance', newBalance);

  const totalDonationAmount = getText(totalDonation);
  console.log(totalDonationAmount)
  const newDonationBalance = totalDonationAmount + donateInputNumber;
  console.log(newDonationBalance);
  showText(totalDonation, newDonationBalance);
}

//common function to get innerText and parse float
function getText(idName)
{
  const text = document.getElementById(idName).innerText;
  const textNumber = parseFloat(text);
  return textNumber;
}

//common function to show updated text
function showText(idName , updatedText) {
  document.getElementById(idName).innerText = updatedText;
};



