function hitung_luas() {
    let alasSegitiga = document.getElementById('alas').value;
    let tinggiSegitiga = document.getElementById('tinggi').value;

    if (alasSegitiga && tinggiSegitiga) {
        alasSegitiga = parseFloat(alasSegitiga);
        tinggiSegitiga = parseFloat(tinggiSegitiga);

        let luas = 0.5 * alasSegitiga * tinggiSegitiga;

        let resultDiv = document.getElementById('hasil-luas');
        resultDiv.innerHTML = `
            <p>Alas = ${alasSegitiga}</p>
            <p>Tinggi = ${tinggiSegitiga}</p>
            <p>Luas = 1/2 * ${alasSegitiga} * ${tinggiSegitiga}</p>
            <p>Luas = ${luas}</p>
        `;
    } else {
        alert("Alas atau Tinggi kosong! Jangan lupa di isi ya:)");
    }
}

function reset_luas() {
    document.getElementById('alas').value = '';
    document.getElementById('tinggi').value = '';
    document.getElementById('hasil-luas').innerHTML = '';
}

function hitung_keliling() {
    let sisi1Segitiga = document.getElementById('sisi1').value;
    let sisi2Segitiga = document.getElementById('sisi2').value;
    let sisi3Segitiga = document.getElementById('sisi3').value;

    if (sisi1Segitiga && sisi2Segitiga && sisi3Segitiga) {
        sisi1Segitiga = parseFloat(sisi1Segitiga);
        sisi2Segitiga = parseFloat(sisi2Segitiga);
        sisi3Segitiga = parseFloat(sisi3Segitiga);

        let keliling = sisi1Segitiga * sisi2Segitiga * sisi3Segitiga;

        let resultDiv = document.getElementById('hasil-keliling');
        resultDiv.innerHTML = `
            <p>Sisi 1 = ${sisi1Segitiga}</p>
            <p>Sisi 2 = ${sisi2Segitiga}</p>
            <p>Sisi 3 = ${sisi3Segitiga}</p>
            <p>Keliling = ${sisi1Segitiga} * ${sisi2Segitiga} * ${sisi3Segitiga}</p>
            <p>Keliling= ${keliling}</p>
        `;
    } else {
        alert("Hayo ada yang kosong :) semua sisi harus di isi ya!");
    }
}

function reset_keliling() {
    document.getElementById('sisi1').value = '';
    document.getElementById('sisi2').value = '';
    document.getElementById('sisi3').value = '';
    document.getElementById('hasil-keliling').innerHTML = '';
}


