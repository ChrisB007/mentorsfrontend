import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Get all categories
const getCategories = async('/', (req, res) => {
  const categories = await prisma.category.findMany({
    include: {
      subCategories: true,
    },
  });
  res.json({ categories });
});

// Get one category
const getCategory = async('/:id', (req, res) => {
  const { id } = req.params;
  const category = await prisma.category.findOne({ where: { id } });
  res.json({ category });
});

// Create a new category
const createCategory = async('/', (req, res) => {
  const { name, description } = req.body;
  const category = await prisma.category.create({
    data: { name, description },
  });
  res.json({ category });
});

// Update a category
const updateCategory = async('/:id', (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  const category = await prisma.category.update({
    where: { id },
    data: { name, description },
  });
  res.json({ category });
});

// Delete a category
const deleteCategory = async('/:id', (req, res) => {
  const { id } = req.params;
  const category = await prisma.category.delete({ where: { id } });
  res.json({ category });
});
