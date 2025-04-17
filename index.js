

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

// toggling Donate and History Button
const buttons = document.querySelectorAll('.toggle-btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => {
      btn.classList.remove('bg-barn-primary');
      btn.classList.add('bg-gray-200');
    });

    button.classList.remove('bg-gray-200');
    button.classList.add('bg-barn-primary');

    if (button.id === 'btn1') 
      {
      document.getElementById('history-container').classList.add('hidden');
      document.getElementById('main').classList.remove('hidden');
      const message = document.getElementById('no-donations-message');
      if (message) {
      message.classList.add('hidden');
        }
      }
       else if (button.id === 'btn2') 
        {
          toggleHistoryView();
          document.getElementById('history-container').classList.remove('hidden');
          document.getElementById('main').classList.add('hidden');
      }
  });
});


document.getElementById('donate-Noakhali-flood').addEventListener('click', function (event) {
  event.preventDefault();
  handleDonation('donateInput1', 'noakhali', 'totalDonation1');
});

document.getElementById('feniFlood').addEventListener('click', function (event) {
  event.preventDefault();
  handleDonation('donateInput2', 'feni', 'totalDonation2');
});

document.getElementById('quotaMovement').addEventListener('click', function (event) {
  event.preventDefault();
  handleDonation('donateInput3', 'quota', 'totalDonation3');
});

// Input error handler 

function handleDonation(inputId, donationLabelId, totalId) {
  const donateInput = getInput(inputId);
  const donationId = getText(donationLabelId);

  //  Validate input
  if (isNaN(donateInput) || donateInput <= 0) {
    alert("Please enter a valid donation amount.");
    return;
  }
  else if (donateInput > 5500){
    alert("You do not have this much balance.");
    return;
  }

  //  Proceed if valid
  donation(donateInput, totalId, donationId);
  showModal();
}

//common function for event Listeners
function donation(donateInputNumber, totalDonation, donationId){
  console.log(donateInputNumber);

  const balance = getTextFloat('accountBalance');
  const newBalance = balance - donateInputNumber;
  showText('accountBalance', newBalance);

  const totalDonationAmount = getTextFloat(totalDonation);
  const newDonationBalance = totalDonationAmount + donateInputNumber;
  showText(totalDonation, newDonationBalance);
  history(donateInputNumber, newBalance, donationId);

  hideNoDonationsMessage();
}

//common function to get innerText and parse float
function getTextFloat(idName)
{
  const text = document.getElementById(idName).innerText;
  const textNumber = parseFloat(text);
  return textNumber;
}

//common function to get only text
function getText(idName)
{
  const text = document.getElementById(idName).innerText;
  return text;
}
//common function to show updated text
function showText(idName , updatedText) {
  document.getElementById(idName).innerText = updatedText;
};

//common function to get input
function getInput(inputId){
  const input = parseFloat(document.getElementById(inputId).value);
  return input;
}



function history(donation, balance, donationId) {
  const container = document.getElementById('history-container');

  const p = document.createElement('p');
  const bangladeshTime = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Dhaka",
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: '2-digit', 
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });

 
  p.innerHTML = `✅ Donated ${donation} BDT at ${donationId} <br> 💰 New Balance: ${balance} BDT 
  <br>🕒 ${bangladeshTime}`;
  p.className = "bg-green-100 text-green-900 font-medium p-6 rounded-md mb-2 shadow-sm";
  container.appendChild(p);
}



function showModal() {
  const modal = document.getElementById('success-modal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');

    // Auto-hide after 2.5 seconds
    setTimeout(() => {
      modal.classList.remove('flex');
      modal.classList.add('hidden');
    }, 5000);

    document.getElementById('close-modal').addEventListener('click', () => {
      const modal = document.getElementById('success-modal');
      modal.classList.remove('flex');
      modal.classList.add('hidden');
    });
  }
}

//if someone go to history without donating

const historyContainer = document.getElementById('history-container');
const message = document.getElementById('no-donations-message');

function toggleHistoryView() {
  const historyContainer = document.getElementById('history-container');
  const message = document.getElementById('no-donations-message');

  // Toggle views...
  document.getElementById('main').classList.add('hidden');
  historyContainer.classList.remove('hidden');

  // Show message only if no donations
  if (historyContainer.childElementCount === 0) {
    message.classList.remove('hidden');
  } else {
    message.classList.add('hidden');
  }
}

//hide the message
function hideNoDonationsMessage() {
  const message = document.getElementById('no-donations-message');
  if (message) {
      message.classList.add('hidden'); // Hide the "no donations" message
  }
}

