document.getElementById('pickup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form untuk submit secara normal

    let name = document.getElementById('pickup-name').value;
    let address = document.getElementById('pickup-address').value;
    let area = document.getElementById('pickup-area').value;
    let date = document.getElementById('pickup-date').value;
    let time = document.getElementById('pickup-time').value;

    alert(`Penjemputan dijadwalkan!\nNama: ${name}\nAlamat: ${address}\nArea: ${area}\nTanggal: ${date}\nWaktu: ${time}`);
});
