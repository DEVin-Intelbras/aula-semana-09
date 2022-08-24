import { useState } from 'react';
import { useAutenticacao } from '../../context/autenticacao/useAutenticacao';
import styles from './Login.module.css';

export const Login = () => {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const { onLogin } = useAutenticacao();

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
  };

  return (
    <form className={styles.form} onSubmit={fazLogin}>
      <input placeholder='Login' value={login} onChange={(event) => setLogin(event.target.value)} />
      <input placeholder='Senha' value={senha} onChange={(event) => setSenha(event.target.value)} />
      <button>Enviar</button>
    </form>
  );
};
