import { useParams } from 'react-router-dom';

export const DetalhesProduto = () => {
  const { id } = useParams();

  return <h1>Em Construção da rota de detalhes do produto {id}</h1>;
};
