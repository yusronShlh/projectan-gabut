const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({
    headless: false,
  });

  const page = await browser.newPage();

  // ==========================================
  // BUKA MY PERTAMINA
  // ==========================================

  await page.goto("https://subsiditepatlpg.mypertamina.id/merchant-login", {
    waitUntil: "domcontentloaded",
  });

  console.log("MyPertamina berhasil dibuka.");
  console.log("Silakan login secara manual di browser.");

  // ==========================================
  // TUNGGU LOGIN MANUAL
  // ==========================================

  await page.waitForURL((url) => !url.toString().includes("/merchant-login"), {
    timeout: 0,
  });

  console.log("Login terdeteksi!");
  console.log("URL sekarang:", page.url());

  await page.waitForTimeout(2000);

  // ==========================================
  // CATAT PENJUALAN
  // ==========================================

  const catatPenjualan = page.getByText("Catat Penjualan", {
    exact: true,
  });

  if ((await catatPenjualan.count()) === 0) {
    console.log('Menu "Catat Penjualan" tidak ditemukan.');
    return;
  }

  console.log('Menu "Catat Penjualan" ditemukan.');

  await catatPenjualan.click();

  console.log('Menu "Catat Penjualan" berhasil diklik.');

  await page.waitForTimeout(1000);

  // ==========================================
  // INPUT NIK
  // ==========================================

  const inputNIK = page.locator(
    'input[placeholder="Masukkan 16 digit NIK Pelanggan"]',
  );

  console.log("Mencari input NIK...");

  await inputNIK.waitFor();

  console.log("Input NIK ditemukan.");

  // DATA UJI SAJA
  await inputNIK.fill("3528104107900425");

  console.log("Playwright berhasil mengisi input NIK.");

  await page.waitForTimeout(3000);

  // ==========================================
  // LANJUTKAN PENJUALAN
  // ==========================================

  const lanjutkan = page.getByText("LANJUTKAN PENJUALAN", {
    exact: true,
  });

  console.log('Mencari tombol "LANJUTKAN PENJUALAN"...');

  if ((await lanjutkan.count()) === 0) {
    console.log('Tombol "LANJUTKAN PENJUALAN" tidak ditemukan.');
    return;
  }

  console.log('Tombol "LANJUTKAN PENJUALAN" ditemukan.');

  await lanjutkan.click();

  console.log('Tombol "LANJUTKAN PENJUALAN" berhasil diklik.');

  await page.waitForTimeout(3000);

  // ==========================================
  // UPDATE DATA PELANGGAN
  // ==========================================

  const updateData = page.getByText("UPDATE DATA PELANGGAN", {
    exact: true,
  });

  if ((await updateData.count()) === 0) {
    console.log('Tombol "UPDATE DATA PELANGGAN" tidak ditemukan.');
    return;
  }

  console.log("Data pelanggan belum lengkap.");
  console.log('Tombol "UPDATE DATA PELANGGAN" ditemukan.');

  await updateData.click();

  console.log('Tombol "UPDATE DATA PELANGGAN" berhasil diklik.');

  await page.waitForTimeout(2000);

  // ==========================================
  // FIELD TANGGAL LAHIR
  // ==========================================

  console.log("Mencari field tanggal lahir...");

  const tanggal = page.locator('input[placeholder="Tgl"]');

  const bulan = page.locator('input[placeholder="Bln"]');

  const tahun = page.locator('input[placeholder="Thn"]');

  await tanggal.waitFor();
  await bulan.waitFor();
  await tahun.waitFor();

  console.log("Field tanggal, bulan, dan tahun ditemukan.");

  // ==========================================
  // PILIH TANGGAL
  // ==========================================

  console.log("Membuka dropdown tanggal...");

  await tanggal.click();

  console.log("Dropdown tanggal berhasil dibuka.");

  await page.waitForTimeout(500);

  console.log("Memilih tanggal 20...");

  await page
    .getByRole("option", {
      name: "20",
      exact: true,
    })
    .click();

  console.log("Tanggal 15 berhasil dipilih.");

  await page.waitForTimeout(500);

  // ==========================================
  // PILIH BULAN
  // ==========================================

  console.log("Membuka dropdown bulan...");

  await bulan.click();

  console.log("Dropdown bulan berhasil dibuka.");

  await page.waitForTimeout(500);

  const bulanAngka = "03";

  const namaBulan = {
    "01": "Januari",
    "02": "Februari",
    "03": "Maret",
    "04": "April",
    "05": "Mei",
    "06": "Juni",
    "07": "Juli",
    "08": "Agustus",
    "09": "September",
    10: "Oktober",
    11: "November",
    12: "Desember",
  };

  const bulanDipilih = namaBulan[bulanAngka];

  console.log(`Memilih bulan ${bulanAngka} → ${bulanDipilih}...`);

  await page
    .getByRole("option", {
      name: bulanDipilih,
      exact: true,
    })
    .click();

  console.log(`Bulan ${bulanDipilih} berhasil dipilih.`);

  await page.waitForTimeout(500);

  // ==========================================
  // PILIH TAHUN
  // ==========================================

  console.log("Membuka dropdown tahun...");

  await tahun.click();

  console.log("Dropdown tahun berhasil dibuka.");

  await page.waitForTimeout(500);

  const tahunDipilih = "1990";

  console.log(`Memilih tahun ${tahunDipilih}...`);

  await page
    .getByRole("option", {
      name: tahunDipilih,
      exact: true,
    })
    .click();

  console.log(`Tahun ${tahunDipilih} berhasil dipilih.`);

  await page.waitForTimeout(1000);

  // ==========================================
  // KLIK SELANJUTNYA
  // ==========================================

  console.log('Mencari tombol "SELANJUTNYA"...');

  const selanjutnya = page.getByText("SELANJUTNYA", { exact: true });

  if ((await selanjutnya.count()) === 0) {
    console.log('Tombol "SELANJUTNYA" tidak ditemukan.');
    return;
  }

  console.log('Tombol "SELANJUTNYA" ditemukan.');

  await selanjutnya.click();

  console.log('Tombol "SELANJUTNYA" berhasil diklik.');

  // Tunggu modal konfirmasi muncul
  await page.waitForTimeout(1500);

  console.log("\n===== MODAL KONFIRMASI =====");
  console.log(await page.locator("body").innerText());
  console.log("============================\n");

  // ==========================================
  // KLIK YA, PERBARUI DATA PELANGGAN
  // ==========================================

  console.log('Mencari "YA, PERBARUI DATA PELANGGAN"...');

  const perbaruiData = page.locator("text=YA, PERBARUI DATA PELANGGAN");

  const jumlahPerbarui = await perbaruiData.count();
  console.log("Jumlah elemen ditemukan:", jumlahPerbarui);

  if (jumlahPerbarui === 0) {
    console.log('"YA, PERBARUI DATA PELANGGAN" tidak ditemukan.');
  } else {
    console.log('"YA, PERBARUI DATA PELANGGAN" ditemukan.');

    const tombolPerbarui = perbaruiData.last();
    console.log("Mencoba klik konfirmasi...");
    try {
      await tombolPerbarui.click({ force: true });

      console.log('Klik "YA, PERBARUI DATA PELANGGAN" berhasil.');
    } catch (error) {
      console.log("Klik biasa gagal.");
      console.log("Pesan error:", error.message);
    }

    // Tunggu proses setelah konfirmasi
    await page.waitForTimeout(3000);

    console.log("\n===== SETELAH KONFIRMASI =====");
    console.log(await page.locator("body").innerText());
    console.log("==============================\n");
  }

  // ==========================================
  // INFORMASI AKHIR
  // ==========================================

  console.log('\nMencari tombol "LANJUTKAN KE TRANSAKSI"...');

  const lanjutTransaksi = page.getByText("LANJUTKAN KE TRANSAKSI", {
    exact: true,
  });

  const jumlahLanjutTransaksi = await lanjutTransaksi.count();

  console.log("Jumlah tombol ditemukan:", jumlahLanjutTransaksi);

  if (jumlahLanjutTransaksi === 0) {
    console.log('Tombol "LANJUTKAN KE TRANSAKSI" tidak ditemukan.');
  } else {
    console.log('Tombol "LANJUTKAN KE TRANSAKSI" ditemukan.');

    await lanjutTransaksi.last().click({
      force: true,
    });

    console.log('Tombol "LANJUTKAN KE TRANSAKSI" berhasil diklik.');

    // Tunggu halaman transaksi terbuka
    await page.waitForTimeout(3000);

    console.log("\n===== SETELAH LANJUT KE TRANSAKSI =====");

    console.log("URL sekarang:", page.url());

    console.log(await page.locator("body").innerText());

    console.log("========================================\n");

    // ========================================
    // ATUR JUMLAH TABUNG
    // ========================================

    console.log("\n===== MENGATUR JUMLAH TABUNG =====");

    // Contoh pengujian: jumlah yang ditentukan secara eksplisit.
    // Untuk transaksi nyata, gunakan jumlah pembelian sebenarnya.
    const jumlahTabung = 4;

    // Halaman penjualan biasanya dimulai dari 1 tabung.
    const jumlahAwal = 1;
    const jumlahKlikPlus = jumlahTabung - jumlahAwal;

    // Selector berdasarkan hasil debug tombol.
    const tombolPlus = page.locator('button[data-testid="actionIcon2"]');

    const tombolMinus = page.locator('button[data-testid="actionIcon1"]');

    const jumlahTombolPlus = await tombolPlus.count();
    const jumlahTombolMinus = await tombolMinus.count();

    console.log("Tombol + ditemukan:", jumlahTombolPlus);
    console.log("Tombol - ditemukan:", jumlahTombolMinus);

    if (jumlahTombolPlus !== 1 || jumlahTombolMinus !== 1) {
      throw new Error("Tombol + atau - tidak ditemukan secara unik.");
    }

    // Tambah tabung sesuai jumlah yang ditentukan.
    for (let i = 0; i < jumlahKlikPlus; i++) {
      await tombolPlus.click();

      console.log(`Klik tombol + ke-${i + 1}`);

      await page.waitForTimeout(300);
    }

    console.log("Pengaturan jumlah tabung selesai.");

    // Periksa tampilan dan jumlah sebelum melanjutkan.
    console.log("\n===== PERIKSA HASIL =====");
    console.log(await page.locator("body").innerText());
    console.log("=========================\n");

    console.log('\nMencari tombol "CEK PESANAN"...');

    const cekPesanan = page.getByText("CEK PESANAN", {
      exact: true,
    });

    const jumlahCekPesanan = await cekPesanan.count();

    console.log('Jumlah tombol "CEK PESANAN" ditemukan:', jumlahCekPesanan);

    if (jumlahCekPesanan === 0) {
      console.log('Tombol "CEK PESANAN" tidak ditemukan.');
    } else {
      console.log('Tombol "CEK PESANAN" ditemukan.');

      await cekPesanan.click();

      console.log('Tombol "CEK PESANAN" berhasil diklik.');

      await page.waitForTimeout(2000);

      console.log("\n===== SETELAH CEK PESANAN =====");

      console.log("URL sekarang:", page.url());

      console.log(await page.locator("body").innerText());

      console.log("================================\n");

      // ========================================
      // KLIK PROSES PENJUALAN
      // ========================================

      console.log('\nMencari tombol "PROSES PENJUALAN"...');

      const prosesPenjualan = page.getByText("PROSES PENJUALAN", {
        exact: true,
      });

      const jumlahTombolProses = await prosesPenjualan.count();

      console.log("Jumlah tombol ditemukan:", jumlahTombolProses);

      if (jumlahTombolProses === 0) {
        console.log('Tombol "PROSES PENJUALAN" tidak ditemukan.');
      } else {
        console.log('Tombol "PROSES PENJUALAN" ditemukan.');

        console.log("\n===== PERIKSA PESANAN TERAKHIR =====");
        console.log(await page.locator("body").innerText());
        console.log("====================================");

        console.log(
          "Pastikan pelanggan, jumlah tabung, dan total harga benar.",
        );

        // Klik hanya setelah kamu mengonfirmasi transaksi
        const readline = require("node:readline/promises");

        const rl = readline.createInterface({
          input: process.stdin,
          output: process.stdout,
        });

        const konfirmasi = await rl.question(
          '\nKetik YA untuk klik "PROSES PENJUALAN": ',
        );

        rl.close();

        if (konfirmasi.trim() === "YA") {
          await prosesPenjualan.click();

          console.log('Tombol "PROSES PENJUALAN" berhasil diklik.');

          // Tunggu CAPTCHA muncul
          await page.waitForTimeout(2000);

          console.log("\n===== SETELAH KLIK PROSES PENJUALAN =====");
          console.log(await page.locator("body").innerText());
          console.log("========================================");

          console.log(
            "Jika CAPTCHA muncul, silakan selesaikan secara manual di browser.",
          );
        } else {
          console.log("Klik dibatalkan. Tidak ada konfirmasi transaksi.");
        }
      }
    }
  }

  console.log("\n===== TEST SELESAI =====");
})();
