# Portfolio Template

## Mulai Mengisi

Data template dipisah berdasarkan jenisnya:

- [`data/portfolio.ts`](data/portfolio.ts) berisi semua data tertulis: identitas, headline, ringkasan, navigasi, riwayat CV, proyek, skill, organisasi, kontak, dan label situs.
- [`data/portfolio-images.ts`](data/portfolio-images.ts) berisi path foto profil dan gambar galeri.

Ubah teks portofolio di `data/portfolio.ts` dan path gambar di `data/portfolio-images.ts`.

- Identitas, headline, ringkasan, lokasi, foto profil, dan CV.
- Navigasi, label section, tombol, dan teks antarmuka.
- Tentang saya, pendidikan, pengalaman kerja, proyek, skill, organisasi, dan kontak.
- Judul tab browser, deskripsi situs, dan bahasa halaman.

Setiap bagian berbentuk objek atau daftar. Duplikat atau hapus item dalam daftar untuk menambah atau mengurangi pendidikan, pengalaman, proyek, skill, dan organisasi. Komponen di folder `components/` mengatur tampilan; biasanya tidak perlu diubah untuk mengganti isi.

## Foto dan CV

Simpan file di dalam `public/`. Gunakan path URL yang diawali `/`, misalnya `/images/profile/foto.png`, lalu perbarui path terkait di `data/portfolio-images.ts`. Galeri `education`, `experience`, `projects`, dan `organizations` dipasangkan menurut urutan entri pada kedua file; pertahankan urutannya saat menambah atau menghapus item. Letakkan CV PDF di `public/cv/`, lalu sesuaikan `identity.cvHref` dan `identity.cvDownloadName` di `data/portfolio.ts`.

## Menjalankan

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`. Periksa hasil produksi dengan `npm run build` dan `npm run lint`.