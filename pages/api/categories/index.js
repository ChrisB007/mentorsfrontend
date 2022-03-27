//import { PrismaClient } from '@prisma/client';
//import req from 'express/lib/request';
//import { data } from '../../../categoryData';

//const prisma = new PrismaClient();

//if (req.method === 'GET') {
//  try {
//    // Get all Categories
//    const getAll = async('/', (req, res) => {
//      const subCategories = await prisma.Category.findMany();
//      res.status(200).res.json(subCategories);
//    });

//    // Get one Category
//    const getOne = async('/:id', (req, res) => {
//      const { id } = req.params;
//      const Category = await prisma.Category.findOne({ where: { id } });
//      res.status(200).res.json(Category);
//    });
//  } catch (error) {
//    console.error(error);
//  }
//}

//if (req.method === 'POST') {
//  try {
//    // Create a new Category
//    const createCategory = async('/', (req, res) => {
//      const { name, description, categoryId } = req.body;
//      const Category = await prisma.Category.create({
//        data: { name, description, categoryId },
//      });
//      res.json(Category);
//    });
//  } catch (error) {
//    console.error(error);
//  }
//}

//if (req.method === 'PUT') {
//  try {
//    // Update a Category
//    const updateCategory = async('/:id', (req, res) => {
//      const { id } = req.params;
//      const { name, description, categoryId } = req.body;
//      const Category = await prisma.Category.update({
//        where: { id },
//        data: { name, description, categoryId },
//      });
//      res.json(Category);
//    });
//  } catch (error) {
//    console.error(error);
//  }
//}

//if (req.method === 'DELETE') {
//  try {
//    // Delete a Category
//    const deleteCategory = async('/:id', (req, res) => {
//      const { id } = req.params;
//      const Category = await prisma.Category.delete({ where: { id } });
//      res.json(Category);
//    });
//  } catch (error) {
//    console.error(error);
//  }
//}
