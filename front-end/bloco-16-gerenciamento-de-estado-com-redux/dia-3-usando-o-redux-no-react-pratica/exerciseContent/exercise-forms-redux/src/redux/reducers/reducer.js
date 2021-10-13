import { SET_PROFESSIONAL_VALUE, SET_PERSONAL_VALUE } from '../actions/actions';

const initialState = {
  personalInputs: {
    name: '',
    email: '',
    cpf: '',
    address: '',
    city: '',
    states: '',
  },
  professionalInputs: {
    resume: '',
    job: '',
    jobDescription: '',
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  // Caso o tipo da action seja SET_PERSONAL_VALUE,
  // retorne o que já existe no estado e atualize
  // o personalInputs com a informação trazida pela action case.
  case SET_PERSONAL_VALUE:
    return { ...state, personalInputs: action.payload };
  case SET_PROFESSIONAL_VALUE:
    return { ...state, professionalInputs: action.payload };
  default:
    return state;
  }
};

export default reducer;
