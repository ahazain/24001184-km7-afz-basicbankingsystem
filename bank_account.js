let saldo = 0;

function tambahSaldo() {
  let jumlah = parseFloat(
    window.prompt("Masukkan jumlah saldo yang ingin ditambahkan:")
  );
  if (!isNaN(jumlah) && jumlah > 0) {
    saldo += jumlah;
    console.log(
      "Saldo berhasil ditambahkan. Saldo baru Anda: Rp " + saldo.toFixed(2)
    );
    alert(
      "Saldo berhasil ditambahkan. Saldo baru Anda: Rp " + saldo.toFixed(2)
    );
  } else {
    console.log("Input tidak valid. Masukkan jumlah yang benar.");
    alert("Input tidak valid. Masukkan jumlah yang benar.");
  }
}

function kurangiSaldo() {
  let jumlah = parseFloat(
    window.prompt("Masukkan jumlah saldo yang ingin dikurangi:")
  );
  if (!isNaN(jumlah) && jumlah > 0) {
    if (jumlah <= saldo) {
      saldo -= jumlah;
      console.log(
        "Saldo berhasil dikurangi. Saldo baru Anda: Rp " + saldo.toFixed(2)
      );
      alert(
        "Saldo berhasil dikurangi. Saldo baru Anda: Rp " + saldo.toFixed(2)
      );
    } else {
      console.log("Saldo tidak mencukupi.");
    }
  } else {
    console.log("Input tidak valid. Masukkan jumlah yang benar.");
    alert("Input tidak valid. Masukkan jumlah yang benar.");
  }
}
