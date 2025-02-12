'use client';

import { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Güvenilir Tamir Hizmetleri
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                İhtiyacınız olan tamir ve bakım hizmetlerini uzman ustalarla buluşturuyoruz.
                Hemen arayın, en iyi hizmeti alın.
              </p>
              <div className="mt-10">
                <div className="flex items-center justify-center gap-x-4">
                  <div className="relative flex-grow max-w-md">
                    <input
                      type="text"
                      className="block w-full rounded-lg border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      placeholder="Hangi hizmeti arıyorsunuz?"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                      <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                  </div>
                  <button
                    type="button"
                    className="rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    Ara
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Kategoriler */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Popüler Hizmet Kategorileri
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              İhtiyacınıza uygun kategoriyi seçin, size en yakın ustaya ulaşın.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {categories.map((category) => (
                <div key={category.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-gray-900">
                    {category.icon}
                    {category.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{category.description}</p>
                    <p className="mt-6">
                      <a
                        href={category.href}
                        className="text-sm font-semibold leading-6 text-blue-600"
                      >
                        Daha fazla bilgi <span aria-hidden="true">→</span>
                      </a>
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </main>
  );
}

const categories = [
  {
    name: 'Beyaz Eşya Tamiri',
    description: 'Buzdolabı, çamaşır makinesi, bulaşık makinesi ve diğer beyaz eşyalarınız için profesyonel tamir hizmeti.',
    href: '#',
    icon: '🔧',
  },
  {
    name: 'Elektronik Cihaz Tamiri',
    description: 'Telefon, tablet, bilgisayar ve diğer elektronik cihazlarınız için uzman teknik servis desteği.',
    href: '#',
    icon: '📱',
  },
  {
    name: 'Ev Tadilat ve Tamirat',
    description: 'Su tesisatı, elektrik, mobilya montaj ve diğer ev tamirat işleriniz için deneyimli ustalar.',
    href: '#',
    icon: '🏠',
  },
];
