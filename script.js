const form = document.getElementById('otpForm');
const inputs = document.querySelectorAll('.otp-input');
const message = document.getElementById('message');
const resetBtn = document.getElementById('resetBtn');

//Auto move to next input
inputs.forEach(input, index) => {
  input.addEventListener('input', () => {
    if (input.value.length === 1 && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });
});