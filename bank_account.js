class BankAccount {
  constructor(initialBalance = 0) {
    this.balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) {
      setTimeout(() => {
        this.balance += amount;
        console.log(`Deposit sebesar Rp ${amount.toFixed(2)} berhasil!`);
      }, 1000); 
    } else {
      alert("Jumlah tidak valid.");
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      setTimeout(() => {
        this.balance -= amount;
        console.log(`Penarikan sebesar Rp ${amount.toFixed(2)} berhasil!`);
      }, 1000); 
    } else if (amount > this.balance) {
      alert("Saldo tidak mencukupi.");
    } else {
      alert("Jumlah tidak valid.");
    }
  }
}
module.exports = BankAccount;