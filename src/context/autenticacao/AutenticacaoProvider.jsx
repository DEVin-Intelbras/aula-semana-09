import { useEffect } from 'react';
import { useState } from 'react';
import { AutenticacaoContext } from './AutenticacaoContext';

const CHAVE_USUARIO = 'usuario';

export const AutenticacaoProvider = ({ children }) => {
  const [usuarioAutenticado, setUsuarioAutenticado] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const usuario = localStorage.getItem(CHAVE_USUARIO);

    if (usuario) {
      setUsuarioAutenticado(JSON.parse(usuario));
    }
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const handleLogin = (nome) => {
    const usuario = {
      id: new Date().getTime(),
      nome,
    };
    setUsuarioAutenticado(usuario);
    localStorage.setItem(CHAVE_USUARIO, JSON.stringify(usuario));
  };

  const handleLogout = () => {
    setUsuarioAutenticado(null);
    localStorage.removeItem(CHAVE_USUARIO);
  };

  return (
    <AutenticacaoContext.Provider
      value={{
        usuarioAutenticado,
        isAutenticado: !!usuarioAutenticado,
        onLogin: handleLogin,
        onLogout: handleLogout,
        isLoading,
      }}
    >
      {children}
    </AutenticacaoContext.Provider>
  );
};
