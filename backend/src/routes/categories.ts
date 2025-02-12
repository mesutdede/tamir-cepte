import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// Tüm kategorileri getir
router.get('/', async (req, res) => {
  try {
    const categories = await prisma.category.findMany({
      include: {
        services: true,
      },
    });
    res.json(categories);
  } catch (error) {
    console.error('Kategorileri getirme hatası:', error);
    res.status(500).json({ error: 'Kategoriler getirilemedi' });
  }
});

// Kategori oluştur
router.post('/', async (req, res) => {
  try {
    const { name, description } = req.body;
    const category = await prisma.category.create({
      data: {
        name,
        description,
      },
    });
    res.status(201).json(category);
  } catch (error) {
    console.error('Kategori oluşturma hatası:', error);
    res.status(500).json({ error: 'Kategori oluşturulamadı' });
  }
});

// Kategori detayını getir
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const category = await prisma.category.findUnique({
      where: { id },
      include: {
        services: {
          include: {
            provider: {
              select: {
                id: true,
                name: true,
                email: true,
                phone: true,
              },
            },
          },
        },
      },
    });

    if (!category) {
      return res.status(404).json({ error: 'Kategori bulunamadı' });
    }

    res.json(category);
  } catch (error) {
    console.error('Kategori detay hatası:', error);
    res.status(500).json({ error: 'Kategori detayı getirilemedi' });
  }
});

export default router; 