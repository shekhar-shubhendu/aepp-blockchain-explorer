import Vue from 'vue'
import Vuex from 'vuex'
import { createActionHelpers } from 'vuex-loading'
import modules from './modules'
import ae from './aeppsdk'

Vue.use(Vuex)

/**
 * Setting up start/end Loading helper methods
 */
const { startLoading, endLoading } = createActionHelpers({
  moduleName: 'loading'
})

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',

  state: {
    $nodeStatus: {},
    base_url: process.env.VUE_APP_EPOCH_URL
  },

  mutations: {
    /**
     * setNodeStatus
     * @param {Object} state
     * @param $nodeStatus
     */
    setNodeStatus (state, $nodeStatus) {
      Object.assign(state, { $nodeStatus })
    },

    changeBaseUrl (state, newUrl) {
      Object.assign(state, {base_url: newUrl})
    }
  },

  actions: {
    /**
     * getNodeStatus
     * @param {Object} state
     * @param {Function} commit
     * @param {dispatch} dispatch
     * @return {Object}
     */
    async getNodeStatus ({ state, commit, dispatch }) {
      startLoading(dispatch, 'getNodeStatus')

      const client = await ae(state.base_url)

      const [top, version] = await Promise.all([
        client.api.getTop(),
        client.api.getVersion()
      ])

      commit('setNodeStatus', { top, version })

      endLoading(dispatch, 'getNodeStatus')

      return { top, version }
    }
  },

  modules
})

store.watch(
  state => state.base_url,
  async () => {
    store.dispatch('blocks/height')
    store.dispatch('blocks/getLatestGenerations', 10)
  }
)

export default store
