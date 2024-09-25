const myAccount = new BankAccount(1000);

function updateBalanceDisplay(balance) {
  document.getElementById("saldo").textContent = `Rp ${balance.toFixed(2)}`;
}
updateBalanceDisplay(myAccount.balance);

function deposit() {
  const amount = parseFloat(window.prompt("Masukkan jumlah deposit:"));
  if (!isNaN(amount) && amount > 0) {
    myAccount.deposit(amount);
    setTimeout(() => updateBalanceDisplay(myAccount.balance), 1000);
  } else {
    alert("Masukkan jumlah yang valid.");
  }
}

function withdraw() {
  const amount = parseFloat(window.prompt("Masukkan jumlah penarikan:"));
  if (!isNaN(amount) && amount > 0) {
    myAccount.withdraw(amount);
    setTimeout(() => updateBalanceDisplay(myAccount.balance), 1000);
  } else {
    alert("Masukkan jumlah yang valid.");
  }
}
