import { createStore } from 'vuex'

export default createStore({
  state: { 
    user_lang: 'pt',
    translations: null,
    hasFetchedLanguageByIp: false,
    comboChest: {},
    languages: null
  },
  getters: {
    getUserLang(state){
      return state.user_lang;
    },
    getTranslations(state){
      return state.translations;
    },
    getLanguages(state){
      return state.languages;
    },
    hasFetchedLanguageByIp(state){
      return state.hasFetchedLanguageByIp;
    },
    getComboChest(state){
      return state.comboChest;
    },
    getOnComboChest: (state) => (key) => {
      if(state.comboChest[key] === undefined || state.comboChest == null)
        return [];
      if(!state.comboChest[key])
        return [];
      return state.comboChest[key];
    }
  },
  mutations: {
    setUserLang(state, obj){
      state.user_lang = obj.langIso;
    },
    setTranslations(state, translations){
      state.translations = translations;
    },
    setHasFetchedLanguageByIp(state, hasFetched){
      state.hasFetchedLanguageByIp = hasFetched;
    },
    saveOnComboChest(state, values){
      state.comboChest[values.key] = values.value;
    },
    setLanguages(state, languages){
      state.languages = languages;
    },
    cleanComboChest(state){
      state.comboChest = {};
    }
  },
  actions: {
    saveTranslations({ commit }, values){
      commit('setTranslations', values)
    },
    changeLanguage({ commit }, values){
      commit('setUserLang', {langIso: values.langIso})
    },
    saveIpGathering({ commit }, values){
      commit('setHasFetchedLanguageByIp', values);
    },
    saveOnComboChest({ commit }, values){
      commit('saveOnComboChest', {key: values.key, value: values.value})
    },
    saveLanguages({ commit }, values){
      commit('setLanguages', values)
    },
    cleanComboChest({ commit }, values){
      commit('cleanComboChest', {url: values.url})
    }
  },
  modules: {
  },
})
