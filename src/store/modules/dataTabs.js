// store/modules/dataTabs.js

import axios from 'axios';

const state = {
  data: [],        // Holds the data fetched from the JSON file
  activeTab: 0,    // Keeps track of the currently active tab/accordion
};

const mutations = {
  SET_DATA(state, payload) {
    state.data = payload;
  },
  SET_ACTIVE_TAB(state, index) {
    state.activeTab = index;
  },
};

const actions = {
  async fetchData({ commit }) {
    try {
      const response = await axios.get('/path/to/data.json'); // Replace with the actual path
      commit('SET_DATA', response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
  setActiveTab({ commit }, index) {
    commit('SET_ACTIVE_TAB', index);
  },
};

const getters = {
  getData(state) {
    return state.data;
  },
  getActiveTab(state) {
    return state.activeTab;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
