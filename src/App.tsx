import Modal from 'react-modal';
import { createServer } from 'miragejs'
import { useState } from 'react';

import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';

import { GlobalStyle } from './styles/global';

createServer({
  routes(){
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [{
        id:1,
        title: 'Transaction 1',
        amount: 400,
        type: 'Deposit',
        category: 'Food',
        createdAt: new Date()
      }]
    })
  }
})

//Configuração para acessibilidade
Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose ={handleCloseNewTransactionModal}
      />

      <Dashboard/>

      <GlobalStyle/>
    </>
  );
}