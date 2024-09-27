class BankAccount {
  constructor(saldo = 0) {
    this.saldo = saldo;
  }

  deposit(amount) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!isNaN(amount) && amount >= 0) {
          this.saldo += amount;
          resolve(`Deposit berhasil. Saldo Anda: Rp ${this.saldo}`);
        } else {
          reject("Input tidak valid. Mohon masukkan jumlah dengan benar");
        }
      }, 2000);
    });
  }

  withdraw(amount) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!isNaN(amount) && amount > 0) {
          if (amount <= this.saldo) {
            this.saldo -= amount;
            resolve(`withdrawl berhasil. Saldo baru anda: Rp ${this.saldo}`);
          } else {
            reject(`Saldo tidak mencukupi`);
          }
        } else {
          reject(`Input tidak valid. Masukkan jumlah yang benar`);
        }
      }, 2000);
    });
  }
}

// module.exports = BankAccount;
