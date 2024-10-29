// Array frasa untuk respon saat tombol "Tidak" dipindahkan
const noPhrases = [
    "Yakin tidak mau?",
    "Pikir lagi deh...",
    "Masa sih?",
    "Jangan begitu 😢",
    "Please... 🥺",
    "Aku sayang kamu!",
    "Tidak bisa begitu 😭",
    "Ayolah... ❤️"
];

let phraseIndex = 0;

// Fungsi untuk memindahkan tombol "Tidak"
function moveButton() {
    const btn = document.getElementById('noBtn');
    const container = document.querySelector('.container');
    const result = document.getElementById('result');

    const containerRect = container.getBoundingClientRect();
    
    // Tentukan batas posisi acak di dalam container
    const maxX = containerRect.width - btn.offsetWidth;
    const maxY = containerRect.height - btn.offsetHeight;
    
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    // Atur posisi baru secara acak
    btn.style.position = 'absolute';
    btn.style.left = `${randomX}px`;
    btn.style.top = `${randomY}px`;

    // Tampilkan frasa dari noPhrases
    result.textContent = noPhrases[phraseIndex];
    phraseIndex = (phraseIndex + 1) % noPhrases.length;
}

// Fungsi untuk menangani klik "Ya"
function sayYes() {
    const container = document.querySelector('.container');
    container.innerHTML = `
        <div class="heart" style="font-size: 80px;">❤️</div>
        <h1>Yeay!</h1>
        <div class="message" style="font-size: 1.4em; color: #ff4b6e;">
            Aku mencintaimu selamanya!<br>
            Terima kasih sudah menerimaku kembali ❤️
        </div>
    `;
    
    // Tambahkan animasi hati
    for (let i = 0; i < 50; i++) {
        createHeart();
    }
}

// Fungsi untuk membuat animasi hati jatuh
function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '100vh';
    heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
    heart.style.animation = `fallHeart ${Math.random() * 3 + 2}s linear`;
    heart.style.opacity = Math.random();
    document.body.appendChild(heart);

    // Hapus elemen hati setelah animasi selesai
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Fungsi kontrol musik
const backgroundMusic = document.getElementById('backgroundMusic');
const musicControl = document.getElementById('musicControl');

function toggleMusic() {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        musicControl.textContent = "Pause Music";
    } else {
        backgroundMusic.pause();
        musicControl.textContent = "Play Music";
    }
}
