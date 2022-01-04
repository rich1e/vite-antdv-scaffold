import Cookies from 'js-cookie';
import { ActionContext } from 'vuex';
import { StateType } from '..';

interface SidebarType {
  opened: boolean;
  withoutAnimation: boolean;
}

export interface AppStateType {
  sidebar: SidebarType;
  device: string;
}

const state: AppStateType = {
  sidebar: {
    opened: Cookies.get('sidebarStatus')
      ? !!+Cookies.get('sidebarStatus')
      : true,
    withoutAnimation: false,
  },
  device: 'desktop',
};

const mutations = {
  TOGGLE_SIDEBAR: (state: AppStateType) => {
    state.sidebar.opened = !state.sidebar.opened;
    state.sidebar.withoutAnimation = false;
    if (state.sidebar.opened) {
      Cookies.set('sidebarStatus', 1);
    } else {
      Cookies.set('sidebarStatus', 0);
    }
  },
  CLOSE_SIDEBAR: (state: AppStateType, withoutAnimation: boolean) => {
    Cookies.set('sidebarStatus', 0);
    state.sidebar.opened = false;
    state.sidebar.withoutAnimation = withoutAnimation;
  },
  TOGGLE_DEVICE: (state: AppStateType, device: string) => {
    state.device = device;
  },
};

const actions = {
  toggleSideBar(store: ActionContext<AppStateType, StateType>) {
    store.commit('TOGGLE_SIDEBAR');
  },
  closeSideBar(
    store: ActionContext<AppStateType, StateType>,
    withoutAnimation: boolean,
  ) {
    store.commit('CLOSE_SIDEBAR', withoutAnimation);
  },
  toggleDevice(store: ActionContext<AppStateType, StateType>, device: string) {
    store.commit('TOGGLE_DEVICE', device);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
