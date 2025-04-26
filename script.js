document.addEventListener('DOMContentLoaded', function () {

    // Form Penjemputan
    const pickupForm = document.getElementById('pickup-form');
    const submitButton = pickupForm ? pickupForm.querySelector('button[type="submit"]') : null;

    if (pickupForm && submitButton) {
        pickupForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Mencegah form submit normal

            const name = document.getElementById('pickup-name').value.trim();
            const address = document.getElementById('pickup-address').value.trim();
            const area = document.getElementById('pickup-area').value;
            const date = document.getElementById('pickup-date').value;
            const time = document.getElementById('pickup-time').value;

            if (name && address && area && date && time) {

                // Tambahkan spinner dan ubah tombol
                submitButton.disabled = true;
                submitButton.innerHTML = `<span class="spinner"></span> Sedang mengirim...`;

                // Fade out form
                pickupForm.style.opacity = "0.5";

                setTimeout(function () {
                    // Reset semua
                    pickupForm.reset();
                    pickupForm.style.opacity = "1";
                    submitButton.disabled = false;
                    submitButton.innerHTML = 'Jadwalkan Penjemputan';

                    // Tampilkan toast notification
                    showToast('Penjemputan berhasil dijadwalkan! 🚚');

                }, 2000);

            } else {
                showToast('Mohon lengkapi semua data terlebih dahulu.', true);
            }
        });
    }

 // Script Toggle Menu
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Script Navbar Scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { 
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

    // Function untuk Toast Notification
    function showToast(message, isError = false) {
        const toast = document.createElement('div');
        toast.className = `toast ${isError ? 'error' : 'success'}`;
        toast.textContent = message;
        document.body.appendChild(toast);

        setTimeout(() => {
            toast.classList.add('show');
        }, 100);

        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                toast.remove();
            }, 300);
        }, 3000);
    }

});
