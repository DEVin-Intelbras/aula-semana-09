import { useReducer } from 'react';

function operacoes(state, action) {
  console.log('state', state);
  console.log('action', action);

  switch (action.type) {
    case 'incrementar':
      return state + 1;
    case 'decrementar':
      return state - 1;
    case 'multiplicar':
      return state * 2;
    case 'resetar':
      return 0;
    default:
      return state;
  }
}

export const Home = () => {
  const [state, dispatch] = useReducer(operacoes, 0);

  return (
    <div style={{ margin: '60px' }}>
      <h1>Reducer</h1>
      <p>Estado: {state}</p>

      <button onClick={() => dispatch({ type: 'incrementar' })}>Incrementar</button>
      <button onClick={() => dispatch({ type: 'decrementar' })}>Decrementar</button>
      <button onClick={() => dispatch({ type: 'multiplicar' })}>Multiplicar</button>
      <button onClick={() => dispatch({ type: 'resetar' })}>Resetar</button>
    </div>
  );
};
