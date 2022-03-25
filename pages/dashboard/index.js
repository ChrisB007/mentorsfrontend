import { getSession, useSession } from 'next-auth/react';
import Home from '..';
import Mentors from '../../components/mentors';

const Index = ({ session }) => {
  return (
    <>
      <div>
        <Mentors />
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
  return {
    props: {
      session,
    },
  };
}
