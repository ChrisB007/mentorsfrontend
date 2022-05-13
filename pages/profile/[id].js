import Details from '../../components/Details';
import prisma from '../../lib/prisma';

const Profile = ({ user }) => {
  return (
    <>
      <div>
        <Details user={user} />
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.query;

  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
    include: {
      profile: {
        select: {
          id: true,
          bio: true,
        },
      },
    },
  });

  return {
    props: {
      user,
    },
  };
}

export default Profile;
