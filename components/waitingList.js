import { useState, useContext } from 'react';
import axios from 'axios';
import Modal from './emailModal';
import { ModalContext, useModal } from './context';

const Waitinglist = () => {
  const [formEmail, setFormEmail] = useState('');
  //  const { openModal } = useModal();
  const [showModal, setShowModal] = useState(false);

  const emailModl = () => setShowModal(true);

  const closeEmailModl = () => setShowModal(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          '/api/mailgun',
          {
            email: formEmail,
            body: JSON.stringify({
              email: formEmail,
            }),
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
          setFormEmail(''),
        )
        .then((response) => {
          console.log(response);
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className=" shadow sm:rounded-lg">
      <Modal show={showModal} close={closeEmailModl} />
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          We are launching soon!
        </h3>
        <div className="mt-2 max-w-xl text-sm text-gray-500">
          <p>
            We have a growing list of users that are interested in our
            mentorship program. The top 5,000 get early beta access.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mt-5 sm:flex sm:items-center">
          <div className="w-full sm:max-w-xs">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formEmail}
              onChange={(e) => setFormEmail(e.target.value)}
              className="shadow-sm focus:ring-slate-500 focus:border-slate-500 block h-10 w-full sm:text-sm border-gray-300 text-center rounded-md"
              placeholder="you@example.com"
            />
          </div>
          <button
            type="submit"
            onClick={emailModl}
            className="mt-3 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-slate-600 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Notify me
          </button>
        </form>
      </div>
    </div>
  );
};

export default Waitinglist;
