import { SET_STATS_PACKAGES } from '../mutation-types';
import { getPackages, getPackage } from "@/api/jsDelivr";

export default {
    namespaced: true,

    state: {
        packageList: null,
    },

    getters: {
        getPackagesList: (state) => state.packageList.filter((f) => f.type !== 'gh'),
    },

    mutations: {
        [SET_STATS_PACKAGES](state, payload) {
            state.packageList = payload;
        }
    },

    actions: {
        async getPackagesMethod({ commit }) {
            try {
                const { data } = await getPackages();

                commit(SET_STATS_PACKAGES, data);
                return data;
            } catch (e) {
                console.log(e);
            }
        },

        // eslint-disable-next-line
        async getPackageRunkMethod({ commit }, value) {
            try {
                const { data } = await getPackage(value.type, value.name);
                return data;
            } catch (e) {
                alert(e);
                console.log(e);
            }
        },
    },
}