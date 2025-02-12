'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { authService, AuthResponse } from '@/services/auth';
import toast from 'react-hot-toast';

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<AuthResponse['user'] | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    const currentUser = authService.getCurrentUser();
    if (!currentUser) {
      router.push('/auth/login');
      return;
    }
    setUser(currentUser);
    setFormData({
      name: currentUser.name,
      email: currentUser.email,
      phone: currentUser.phone || '',
    });
  }, [router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // TODO: Profil güncelleme API'si eklendiğinde burayı güncelleyelim
      toast.success('Profil başarıyla güncellendi');
      setIsEditing(false);
    } catch {
      toast.error('Profil güncellenirken bir hata oluştu');
    }
  };

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg">
          {/* Profil Başlığı */}
          <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">Profil Bilgileri</h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Kişisel bilgilerinizi buradan görüntüleyebilir ve düzenleyebilirsiniz.
                </p>
              </div>
              <div className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl font-semibold">
                {user.name.charAt(0).toUpperCase()}
              </div>
            </div>
          </div>

          {/* Profil İçeriği */}
          <div className="px-4 py-5 sm:p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Ad Soyad
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className={classNames(
                      'block w-full rounded-md sm:text-sm',
                      isEditing
                        ? 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                        : 'border-transparent bg-gray-50',
                      'disabled:text-gray-500'
                    )}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  E-posta Adresi
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className={classNames(
                      'block w-full rounded-md sm:text-sm',
                      isEditing
                        ? 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                        : 'border-transparent bg-gray-50',
                      'disabled:text-gray-500'
                    )}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Telefon
                </label>
                <div className="mt-1">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className={classNames(
                      'block w-full rounded-md sm:text-sm',
                      isEditing
                        ? 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                        : 'border-transparent bg-gray-50',
                      'disabled:text-gray-500'
                    )}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Hesap Türü</label>
                <div className="mt-1">
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    {user.role === 'PROVIDER' ? 'Hizmet Sağlayıcı' : 'Müşteri'}
                  </span>
                </div>
              </div>

              <div className="flex justify-end space-x-3">
                {isEditing ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setIsEditing(false)}
                      className="inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      İptal
                    </button>
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Kaydet
                    </button>
                  </>
                ) : (
                  <button
                    type="button"
                    onClick={() => setIsEditing(true)}
                    className="inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Düzenle
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
} 