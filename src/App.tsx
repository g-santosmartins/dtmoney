import { useState } from 'react';
import Modal from 'react-modal'
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from "./styles/global";

// acessibilidade
Modal.setAppElement('#root')

export function App() {


  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);


  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }
  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }


  // passando funcao por meio de propriedades
  return (
    <>

      <Header
        OnOpenNewTransaction={handleOpenNewTransactionModal}
      />

      <Dashboard />


      <GlobalStyle />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

    </>
  );
}
