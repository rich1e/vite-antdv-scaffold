import defaultSettings from '@/settings';

const { title, fixedHeader, sidebarLogo } = defaultSettings;

export interface SettingsStateType {
  showTitle: string;
  fixedHeader: boolean;
  sidebarLogo: boolean;
}

const state: SettingsStateType = {
  showTitle: title,
  fixedHeader: fixedHeader,
  sidebarLogo: sidebarLogo,
};

const mutations = {
  CHANGE_SETTING: (state: SettingsStateType, { key, value }) => {
    // eslint-disable-next-line no-prototype-builtins
    if (state.hasOwnProperty(key)) {
      state[key] = value;
    }
  },
};
const actions = {
  changeSetting({ commit }, data) {
    commit('CHANGE_SETTING', data);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
