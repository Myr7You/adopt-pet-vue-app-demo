export default {
  addPet: ({ commit }, payload) => {
    commit("appendPet", payload);
  }
  // addPet: (context,pet) => {
  //   context.commit('appendPet', pet)
  // }
  // the above is what you generally the commit being used
  // the object commit come from vuex
};
