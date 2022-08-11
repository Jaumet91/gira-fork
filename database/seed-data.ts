interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  status: string;
  createdAt: number;
}

export const seedData: SeedData = {
  entries: [
    {
      description:
        'Pendiente: Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint corrupti vitae totam consectetur cupiditate, consequuntur doloremque, magni',
      status: 'pending',
      createdAt: Date.now(),
    },
    {
      description:
        'En progreso: Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint corrupti',
      status: 'in-progress',
      createdAt: Date.now() - 1000000,
    },
    {
      description:
        'Terminada: Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint corrupti vitae totam consectetur',
      status: 'finished',
      createdAt: Date.now() - 100000,
    },
  ],
};
