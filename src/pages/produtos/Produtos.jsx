import { Link } from 'react-router-dom';

export const Produtos = () => (
  <ul>
    <li>
      <Link to='/produto/1'>Produto 1</Link>
    </li>
    <li>
      <Link to='/produto/2'>Produto 2</Link>
    </li>
    <li>
      <Link to='/produto/3'>Produto 3</Link>
    </li>
    <li>
      <Link to='/produto/4'>Produto 4</Link>
    </li>
    <li>
      <Link to='/produto/5'>Produto 5</Link>
    </li>
  </ul>
);
