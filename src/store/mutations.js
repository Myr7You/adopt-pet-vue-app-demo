export default {
  appendPet: (state, { species, pet }) => {
    state[species].push(pet);
    state.pets = state.cats.concat(state.dogs); //you have to update every state perpoty in mutations.js
  }
};
