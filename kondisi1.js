var jmlAngkot = 2;
var angkotBeroperasi = 6;

for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot <= 6) {
    console.log("Angkot no. " + noAngkot + " Beroperasi dengan baik");
  } else if (noAngkot === 8 || noAngkot === 10) {
    console.log("Angkot no. " + noAngkot + " Sedang lembur");
  } else {
    console.log("Angkot no. " + noAngkot + " Sedang tidur");
  }
}

console.log("fitur baru");
