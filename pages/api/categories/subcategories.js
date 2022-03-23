//import { PrismaClient } from '@prisma/client';

//const prisma = new PrismaClient();

//// Get all subCategories

//const getSubCategories = async('/', (req, res) => {
//  const subCategories = await prisma.subCategory.findMany();
//  res.json(subCategories);
//});
//// Get one subCategory
//const getSubCategory = async('/:id', (req, res) => {
//  const { id } = req.params;
//  const subCategory = await prisma.subCategory.findOne({ where: { id } });
//  res.json(subCategory);
//});

//// Create a new subCategory
//const createSubCategory = async('/', (req, res) => {
//  const { name, description, categoryId } = req.body;
//  const subCategory = await prisma.subCategory.create({
//    data: { name, description, categoryId },
//  });
//  res.json(subCategory);
//});

//// Update a subCategory
//const updateSubCategory = async('/:id', (req, res) => {
//  const { id } = req.params;
//  const { name, description, categoryId } = req.body;
//  const subCategory = await prisma.subCategory.update({
//    where: { id },
//    data: { name, description, categoryId },
//  });
//  res.json(subCategory);
//});

//// Delete a subCategory
//const deleteSubCategory = async('/:id', (req, res) => {
//  const { id } = req.params;
//  const subCategory = await prisma.subCategory.delete({ where: { id } });
//  res.json(subCategory);
//});
