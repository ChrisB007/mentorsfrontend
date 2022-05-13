import { getSession, useSession } from 'next-auth/react';
import Mentors from '../../components/mentors';
import Mentees from '../../components/mentees';
import prisma from '../../lib/prisma';

const Index = ({ user }) => {
  return (
    <>
      <div>
        {user.Role === 'Mentee' ? (
          <Mentees user={user} />
        ) : (
          <Mentors user={user} />
        )}
      </div>
    </>
  );
};

export default Index;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  return {
    props: {
      user,
    },
  };
}
