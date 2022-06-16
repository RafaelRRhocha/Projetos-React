import { NOME } from '../actions/actions';

const INITIAL_STATE = {
  nome: '',
  email: '',
  cpf: '',
  endereco: '',
  cidade: '',
  estado: '',
  curriculo: '',
  cargo: '',
  descricao: '',
};

const reducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case NOME:
    return {
      ...state,
      nome: action.value,
    };
  default:
    return state;
  }
};

export default reducers;
