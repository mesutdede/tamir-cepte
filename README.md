# TamirCepte

TamirCepte, tamir ve bakım hizmetlerini dijitalleştiren modern bir platformdur. Müşteriler ve hizmet sağlayıcıları bir araya getirerek, tamir ve bakım işlemlerini kolaylaştırır.

## Özellikler

- 🔐 Kullanıcı Kimlik Doğrulama (JWT)
- 👤 Kullanıcı Profil Yönetimi
- 🛠 Hizmet Sağlayıcı Paneli
- 📱 Responsive Tasarım
- 🎨 Modern UI/UX

## Teknolojiler

### Frontend
- Next.js 14
- TypeScript
- Tailwind CSS
- React Hot Toast
- Headless UI

### Backend
- Node.js
- Express.js
- TypeScript
- JWT Authentication
- PostgreSQL
- Prisma ORM

## Kurulum

1. Repoyu klonlayın:
```bash
git clone https://github.com/yourusername/tamir-cepte.git
cd tamir-cepte
```

2. Bağımlılıkları yükleyin:
```bash
npm run install:all
```

3. Ortam değişkenlerini ayarlayın:
```bash
# frontend/.env.local
NEXT_PUBLIC_API_URL=http://localhost:3001/api

# backend/.env
DATABASE_URL="postgresql://username:password@localhost:5432/tamircepte?schema=public"
JWT_SECRET="your-secret-key"
```

4. Veritabanını hazırlayın:
```bash
cd backend
npx prisma migrate dev
```

5. Geliştirme ortamını başlatın:
```bash
# Ana dizinde
npm run dev
```

## Katkıda Bulunma

1. Bu repository'yi fork edin
2. Feature branch'inizi oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'feat: Add some amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Bir Pull Request oluşturun

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## Dizin Yapısı

```
tamir-cepte/
├── frontend/         # Next.js uygulaması
├── backend/          # Node.js API
└── database/         # PostgreSQL şemaları ve migrations
``` 