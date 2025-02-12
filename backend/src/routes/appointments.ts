import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// Tüm randevuları getir
router.get('/', async (req, res) => {
  try {
    const appointments = await prisma.appointment.findMany({
      include: {
        service: {
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
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            phone: true,
          },
        },
      },
    });
    res.json(appointments);
  } catch (error) {
    console.error('Randevuları getirme hatası:', error);
    res.status(500).json({ error: 'Randevular getirilemedi' });
  }
});

// Randevu oluştur
router.post('/', async (req, res) => {
  try {
    const { date, serviceId, userId } = req.body;
    const appointment = await prisma.appointment.create({
      data: {
        date: new Date(date),
        serviceId,
        userId,
      },
      include: {
        service: {
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
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            phone: true,
          },
        },
      },
    });
    res.status(201).json(appointment);
  } catch (error) {
    console.error('Randevu oluşturma hatası:', error);
    res.status(500).json({ error: 'Randevu oluşturulamadı' });
  }
});

// Randevu durumunu güncelle
router.patch('/:id/status', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const appointment = await prisma.appointment.update({
      where: { id },
      data: { status },
      include: {
        service: {
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
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            phone: true,
          },
        },
      },
    });
    res.json(appointment);
  } catch (error) {
    console.error('Randevu güncelleme hatası:', error);
    res.status(500).json({ error: 'Randevu güncellenemedi' });
  }
});

export default router; 