# MyPertamina LPG Automation

Project automasi browser menggunakan **Node.js** dan **Playwright** untuk membantu pengujian alur pencatatan penjualan LPG 3 kg pada situs MyPertamina.

Project ini menggunakan browser yang terlihat (_headed mode_), sehingga pengguna dapat login dan menangani CAPTCHA secara manual.

## 1. Teknologi yang Digunakan

- Node.js
- npm
- Playwright
- Chromium
- Git dan GitHub

## 2. Persiapan di Windows

### A. Instal aplikasi yang diperlukan

Instal aplikasi berikut:

1. **Node.js LTS**, yang sudah menyertakan npm: https://nodejs.org/
2. **Git for Windows**: https://git-scm.com/downloads/win
3. Browser Chromium melalui instalasi Playwright pada langkah berikutnya.

Setelah instalasi, buka PowerShell atau terminal VS Code dan periksa:

```bash
node -v
npm -v
git --version
```

Pastikan ketiga perintah menampilkan versi aplikasi.

### B. Clone repository

Ganti URL berikut dengan URL repository GitHub milikmu:

```bash
git clone https://github.com/USERNAME/NAMA-REPOSITORY.git
cd NAMA-REPOSITORY
```

### C. Instal dependensi

Jika repository sudah berisi `package.json` dan `package-lock.json`, jalankan:

```bash
npm ci
```

Jika belum tersedia `package-lock.json`, gunakan:

```bash
npm install
```

### D. Instal browser Playwright

```bash
npx playwright install chromium
```

### E. Jalankan project

```bash
node test.js
```

Browser akan terbuka. Login ke akun MyPertamina secara manual dan ikuti alur yang dijalankan script.

## 3. Persiapan di Debian Linux

### A. Instal aplikasi yang diperlukan

Buka terminal dan jalankan:

```bash
sudo apt update
sudo apt install -y git curl ca-certificates
```

Instal **Node.js versi LTS** dari sumber resmi Node.js atau sumber instalasi yang sesuai untuk versi Debian yang digunakan.

Setelah instalasi, periksa:

```bash
node -v
npm -v
git --version
```

Pastikan Node.js memenuhi versi yang ditentukan oleh `package.json`, jika ada.

### B. Clone repository

```bash
git clone https://github.com/USERNAME/NAMA-REPOSITORY.git
cd NAMA-REPOSITORY
```

### C. Instal dependensi

```bash
npm ci
```

Gunakan `npm install` jika repository belum menyediakan `package-lock.json`.

### D. Instal Chromium dan dependensi sistem

```bash
npx playwright install --with-deps chromium
```

Perintah ini memasang browser Chromium yang dibutuhkan Playwright beserta dependensi sistem Linux yang didukung oleh instalasi Playwright.

### E. Jalankan project

```bash
node test.js
```

Pastikan Debian memiliki lingkungan grafis jika browser harus ditampilkan untuk login manual dan penyelesaian CAPTCHA.

## 4. Alur Penggunaan

1. Jalankan script menggunakan Node.js.
2. Login secara manual pada situs MyPertamina.
3. Biarkan script menjalankan langkah automasi yang sudah dibuat.
4. Jika CAPTCHA muncul, selesaikan secara manual.
5. Periksa hasil proses di browser dan terminal.

**Catatan:** alur otomatisasi dapat berubah mengikuti struktur situs. Pastikan data pelanggan dan transaksi sesuai dengan kondisi sebenarnya.

## 5. Struktur Project

Struktur berikut merupakan gambaran awal. Sesuaikan dengan file yang benar-benar ada di repository.

```text
coba1/
├── test.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## 6. File yang Tidak Boleh Diunggah

Jangan commit informasi rahasia atau data pribadi ke repository publik, termasuk:

- Password atau token akun.
- NIK dan data pribadi pelanggan.
- File konfigurasi yang berisi kredensial.
- Log yang menampilkan informasi sensitif.
- Folder `node_modules/`.

Contoh `.gitignore`:

```gitignore
node_modules/
.env
.env.*
!.env.example
playwright-report/
test-results/
```

Periksa isi file dan riwayat commit sebelum mengunggah project ke GitHub.

## 7. Catatan

README ini merupakan panduan awal. Versi Node.js, dependensi, perintah menjalankan script, dan struktur folder final perlu disesuaikan dengan `package.json` dan isi repository yang sebenarnya.
