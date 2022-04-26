import Header from './Header';
import Footer from './Footer';
import { ModalContext } from './context';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <ModalContext.Provider value={{ open: false }}>
        <main>{children}</main>
      </ModalContext.Provider>
      <Footer />
    </>
  );
}
