import { createStore } from 'vuex';
import dataTabs from '@/store/modules/dataTabs.js';
export default createStore({
  modules: {
    dataTabs,
  },
  state: {
    cards: [
      { id: 1, imageSrc: '400x300.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
      { id: 2, imageSrc: '400x300.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
      { id: 3, imageSrc: '400x300.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.' },
    ],
  },
  mutations: {
    addCard(state, card) {
      state.cards.push(card);
    },
  },
  actions: {
    addCard({ commit }, card) {
      commit('addCard', card);
    },
  },
  getters: {
    getAllCards: (state) => state.cards,
  },
});