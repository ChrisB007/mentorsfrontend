import Details from '../../components/Details';
import { PrismaClient } from '@prisma/client';

const Profile = ({ user, id }) => {
  //  console.log('user', user);
  //  console.log('id', id);
  return (
    <>
      <div>
        <Details />
      </div>
    </>
  );
};

//export async function getServerSideProps(context) {
//  const prisma = new PrismaClient();
//  const { id } = context.query;

//  const user = await prisma.user.findUnique({
//    where: {
//      id: id,
//    },
//    select: {
//      id: true,
//      name: true,
//      image: true,
//      Program: {
//        select: {
//          id: true,
//          name: true,
//          description: true,
//          subcategoryId: true,
//        },
//      },
//    },
//  });

//  return {
//    props: {
//      error: !id && `No category found for id: ${id}`,
//      user,
//      id,
//    },
//  };
//}

export default Profile;
