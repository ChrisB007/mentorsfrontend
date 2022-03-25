import { useSession } from 'next-auth/react';
import Home from '..';
import Mentors from '../../components/mentors';

const index = () => {
  const { data: session } = useSession();
  return (
    <div>
      <Mentors />
    </div>
  );
};

export default index;
