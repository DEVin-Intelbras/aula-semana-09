import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAutenticacao } from '../../context/autenticacao/useAutenticacao';
import styles from './Login.module.css';

export const Login = () => {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const { onLogin, isAutenticado, isLoading } = useAutenticacao();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && isAutenticado) {
      navigate('/', { replace: true });
    }
  }, [isLoading]);

  if (isLoading) {
    return <p>carregando...</p>;
  }

  const fazLogin = (event) => {
    event.preventDefault();

    if (!login) {
      alert('Informe o login');
      return;
    }

    if (!senha) {
      alert('Informe a senha');
      return;
    }

    onLogin(login);
    setLogin('');
    setSenha('');

    navigate('/', { replace: true });
  };

  return (
    <form className={styles.form} onSubmit={fazLogin}>
      <input placeholder='Login' value={login} onChange={(event) => setLogin(event.target.value)} />
      <input placeholder='Senha' value={senha} onChange={(event) => setSenha(event.target.value)} />
      <button>Enviar</button>
    </form>
  );
};
