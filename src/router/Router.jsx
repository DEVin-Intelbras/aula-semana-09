import { Route, Routes } from 'react-router-dom';

import { Home } from '../pages/home';
import { Login } from '../pages/login';
import { Produtos } from '../pages/produtos';

export const Router = () => (
  <Routes>
    <Route path='/' element={<Home nome='Nome qualquer' />} />
    <Route path='/produto' element={<Produtos />} />
    <Route path='/login' element={<Login />} />
    <Route path='*' element={<p>Sou a rota qualquer</p>} />
  </Routes>
);
