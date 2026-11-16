# Game Collection Manager

## Proje Hakkında

Game Collection Manager, kullanıcının video oyunlarını kişisel koleksiyonunda yönetmesini sağlayan React tabanlı bir web uygulamasıdır. Kullanıcı oyun adı, platform, durum ve puan bilgilerini girerek oyun ekleyebilir. Eklenen oyunlar kartlar halinde listelenir ve mevcut oyunlar düzenlenebilir veya silinebilir. Veriler tarayıcının LocalStorage alanında saklanır.

## Kullanılan Teknolojiler

- React
- TypeScript
- Vite
- Pure CSS
- Browser LocalStorage

## Proje Özellikleri

- **Add / Ekle:** Oyun adı, platform, durum ve 1-10 arası puan bilgileriyle yeni oyun eklenebilir.
- **List / Listele:** Kayıtlı oyunlar kart görünümünde listelenir.
- **Update / Güncelle:** Bir oyunun mevcut bilgileri forma yüklenerek düzenlenebilir.
- **Delete / Sil:** Oyun silme işleminden önce onay istenir ve onaylanan oyun koleksiyondan kaldırılır.
- Oyunlar `Playing`, `Completed` ve `Planned` durumlarından biriyle kaydedilebilir.
- Oyun bilgileri LocalStorage'a kaydedildiği için sayfa yenilendiğinde korunur.
- LocalStorage'da kayıt bulunmadığında başlangıçta örnek oyunlar gösterilir.

## Kurulum

1. Proje klasörüne gidin:

   ```bash
   cd software_persona_js
   ```

2. Bağımlılıkları yükleyin:

   ```bash
   npm install
   ```

## Çalıştırma

Geliştirme sunucusunu başlatmak için:

```bash
npm run dev
```

Komut çalıştıktan sonra terminalde gösterilen yerel adresi tarayıcıda açın. Vite varsayılan olarak uygulamayı `http://localhost:5173` adresinde çalıştırır.


