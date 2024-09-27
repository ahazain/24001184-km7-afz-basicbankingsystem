const myAccount = new BankAccount(1000);

function updateSaldo(newSaldo) {
  document.getElementById("saldo").textContent = `Rp ${newSaldo.toFixed(2)}`;
}
updateSaldo(myAccount.saldo);

function deposit() {
  const amount = parseFloat(window.prompt("Masukkan jumlah deposit:"));
  myAccount
    .deposit(amount)
    .then((message) => {
      setTimeout(() => updateSaldo(myAccount.saldo), 1000);
      alert(message);
    })
    .catch((err) => {
      alert(err);
    });
}

function withdraw() {
  const amount = parseFloat(window.prompt("Masukkan jumlah withdraw:"));
  myAccount
    .withdraw(amount)
    .then((message) => {
      setTimeout(() => updateSaldo(myAccount.saldo), 1000);
      alert(message);
    })
    .catch((err) => {
      alert(err);
    });
}
