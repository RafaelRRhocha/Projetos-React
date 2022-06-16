export const NOME = 'NOME';
export const EMAIL = 'EMAIL';
export const CPF = 'CPF';
export const ENDERECO = 'ENDERECO';
export const CIDADE = 'CIDADE';
export const ESTADO = 'ESTADO';
export const CURRICULO = 'CURRICULO';
export const CARGO = 'CARGO';
export const DESCRICAO = 'DESCRICAO';

export const createActionName = (value) => ({
  type: NOME,
  value,
});

export const createActionEmail = (value) => ({
  type: EMAIL,
  value,
});

export const createActionCpf = (value) => ({
  type: CPF,
  value,
});

export const createActionEndereco = (value) => ({
  type: ENDERECO,
  value,
});

export const createActionCidade = (value) => ({
  type: CIDADE,
  value,
});

export const createActionEstado = (value) => ({
  type: ESTADO,
  value,
});

export const createActionCurriculo = (value) => ({
  type: CURRICULO,
  value,
});

export const createActionCargo = (value) => ({
  type: CARGO,
  value,
});

export const createActionDescricao = (value) => ({
  type: DESCRICAO,
  value,
});
