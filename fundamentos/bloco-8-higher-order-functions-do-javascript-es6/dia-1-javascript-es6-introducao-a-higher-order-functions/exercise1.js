const newEmployees = (cadastro) => {
  const employees = {
    id1: cadastro('Pedro Guerra'), 
    // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: cadastro('Luiza Drumond'), 
    // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: cadastro('Carla Paiva'), 
    // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const cadastro = (nomeCompleto) => {
  const email = nomeCompleto.toLowerCase().split(' ').join('_');
  return {nomeCompleto, email: `${email}@betrybe.com`};
}

console.log(newEmployees(cadastro));
