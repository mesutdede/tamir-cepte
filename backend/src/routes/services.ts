import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// Tüm servisleri getir
router.get('/', async (req, res) => {
  try {
    const services = await prisma.service.findMany({
      include: {
        category: true,
        provider: {
          select: {
            id: true,
            name: true,
            email: true,
            phone: true,
          },
        },
      },
    });
    res.json(services);
  } catch (error) {
    console.error('Servisleri getirme hatası:', error);
    res.status(500).json({ error: 'Servisler getirilemedi' });
  }
});

// Servis oluştur
router.post('/', async (req, res) => {
  try {
    const { title, description, price, categoryId, providerId } = req.body;
    const service = await prisma.service.create({
      data: {
        title,
        description,
        price,
        categoryId,
        providerId,
      },
      include: {
        category: true,
        provider: {
          select: {
            id: true,
            name: true,
            email: true,
            phone: true,
          },
        },
      },
    });
    res.status(201).json(service);
  } catch (error) {
    console.error('Servis oluşturma hatası:', error);
    res.status(500).json({ error: 'Servis oluşturulamadı' });
  }
});

// Servis detayını getir
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const service = await prisma.service.findUnique({
      where: { id },
      include: {
        category: true,
        provider: {
          select: {
            id: true,
            name: true,
            email: true,
            phone: true,
          },
        },
      },
    });

    if (!service) {
      return res.status(404).json({ error: 'Servis bulunamadı' });
    }

    res.json(service);
  } catch (error) {
    console.error('Servis detay hatası:', error);
    res.status(500).json({ error: 'Servis detayı getirilemedi' });
  }
});

export default router; 