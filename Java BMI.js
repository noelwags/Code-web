// Function untuk menghitung BMI berdasarkan berat dan tinggi
function calculateBMI() {
    // Ambil nilai dari input berat dan tinggi
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100; // Konversi cm ke meter
    const gender = document.getElementById("gender").value;

    // Validasi input: Pastikan berat dan tinggi adalah angka dan lebih besar dari nol
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById("result").innerHTML = "Silakan masukkan nilai berat dan tinggi yang valid.";
        return;
    }

    // Kalkulasi BMI
    const bmi = weight / (height * height);
    let category;

    // Tentukan kategori berdasarkan hasil BMI
    if (bmi < 18.5) {
        category = "Kurus";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Normal";
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = "Berat Badan Berlebih";
    } else {
        category = "Obesitas";
    }

    // Tampilkan hasil dengan kategori dan jenis kelamin
    document.getElementById("result").innerHTML = `
        <p>Jenis Kelamin: ${gender}</p>
        <p>BMI Anda: ${bmi.toFixed(2)}</p>
        <p>Kategori: ${category}</p>
    `;
}
