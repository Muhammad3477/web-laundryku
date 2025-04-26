const form = document.getElementById('pickup-form');
const loader = document.getElementById('loader');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Tampilkan loader
    loader.style.display = 'flex';

    // Ambil data
    const name = document.getElementById('pickup-name').value;
    const address = document.getElementById('pickup-address').value;
    const area = document.getElementById('pickup-area').value;
    const service = document.getElementById('pickup-service').value;
    const date = document.getElementById('pickup-date').value;
    const time = document.getElementById('pickup-time').value;

    const message = `Halo LaundryKu! Saya ingin menjadwalkan penjemputan.\n\n` +
                    `Nama: ${name}\n` +
                    `Alamat: ${address}\n` +
                    `Area: ${area}\n` +
                    `Layanan: ${service}\n` +
                    `Tanggal Penjemputan: ${date}\n` +
                    `Waktu Penjemputan: ${time}`;

    const phoneNumber = "6285771306728";

    // Simulasi loading 2 detik, baru buka WhatsApp
    setTimeout(() => {
        loader.style.display = 'none';
        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
        form.reset();
    }, 2000);
});
