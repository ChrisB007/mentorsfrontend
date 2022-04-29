import React, { useContext, useState } from 'react';

const ModalContext = React.createContext();

const ModalProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };

  return (
    <ModalContext.Provider value={{ open, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

//custom hook
export const useModal = () => {
  return useContext(ModalContext);
};

export { ModalContext, ModalProvider };
