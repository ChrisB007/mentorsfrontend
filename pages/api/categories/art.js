import { PrismaClient } from '@prisma/client';
import req from 'express/lib/request';

const prisma = new PrismaClient();

if (req.method === 'GET') {
  try {
    // Get all subCategories
    const getAll = async('/', (req, res) => {
      const subCategories = await prisma.subCategory.findMany();
      res.status(200).res.json(subCategories);
    });

    // Get one subCategory
    const getOne = async('/:id', (req, res) => {
      const { id } = req.params;
      const subCategory = await prisma.subCategory.findOne({ where: { id } });
      res.status(200).res.json(subCategory);
    });
  } catch (error) {
    console.error(error);
  }
}

if (req.method === 'POST') {
  try {
    // Create a new subCategory
    const createCategory = async('/', (req, res) => {
      const { name, description, categoryId } = req.body;
      const subCategory = await prisma.subCategory.create({
        data: { name, description, categoryId },
      });
      res.json(subCategory);
    });
  } catch (error) {
    console.error(error);
  }
}

if (req.method === 'PUT') {
  try {
    // Update a subCategory
    const updateCategory = async('/:id', (req, res) => {
      const { id } = req.params;
      const { name, description, categoryId } = req.body;
      const subCategory = await prisma.subCategory.update({
        where: { id },
        data: { name, description, categoryId },
      });
      res.json(subCategory);
    });
  } catch (error) {
    console.error(error);
  }
}

if (req.method === 'DELETE') {
  try {
    // Delete a subCategory
    const deleteCategory = async('/:id', (req, res) => {
      const { id } = req.params;
      const subCategory = await prisma.subCategory.delete({ where: { id } });
      res.json(subCategory);
    });
  } catch (error) {
    console.error(error);
  }
}
