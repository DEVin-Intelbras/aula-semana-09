import './App.css';
import { Header } from './components/Header/Header';
import { AutenticacaoProvider } from './context/autenticacao/AutenticacaoProvider';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './router/Router';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <AutenticacaoProvider>
          <Header />

          <main>
            <Router />
          </main>

          <footer>@DEVinHouse</footer>
        </AutenticacaoProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
