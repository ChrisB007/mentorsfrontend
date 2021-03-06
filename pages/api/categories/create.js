import prisma from '../../../lib/prisma';

const ArtData = async (req, res) => {
  try {
    console.log('Hello from the ArtData server');
    //    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'something went wrong', error });
  } finally {
    await prisma.$disconnect();
  }
};

export default ArtData;
