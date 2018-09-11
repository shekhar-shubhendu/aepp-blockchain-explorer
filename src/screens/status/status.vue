<template>
  <div class="status-screen screen">
    <div v-if='nodeStatus.top && nodeStatus.version'>
      <span>
        <h1>Status</h1>
      </span>
      <p>Explorer connected to: <strong>{{ this.$store.state.base_url }}</strong></p>
      <h2>Connect to other networks</h2>
      <ae-input placeholder="New Network"  v-model='newNetworkName'/>
      <ae-button type="exciting" @click='changeNetwork'>
        Connect
      </ae-button>
      <h2>Node and Peers</h2>
      <table>
        <tr>
          <th>address</th>
          <th>top.height</th>
          <th>top.hash</th>
          <th>top.time</th>
          <th>version.revision</th>
          <th>version.genesis_hash</th>
        </tr>
        <tr>
          <td><strong>{{ this.$store.state.base_url }}</strong></td>
          <td>{{ nodeStatus.top.height }}</td>
          <td>{{ nodeStatus.top.hash | startAndEnd }}</td>
          <td>{{ nodeStatus.top.time }}</td>
          <td>{{ nodeStatus.version.revision | startAndEnd }}</td>
          <td>{{ nodeStatus.version.genesisHash | startAndEnd }}</td>
        </tr>
      </table>
      <h1>Detail</h1>
      <h2>{{ this.$store.state.base_url }} </h2>
      <h3>version</h3>
      <pre>{{ nodeStatus.version }}</pre>
      <h3>top</h3>
      <pre>{{ nodeStatus.top }}</pre>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import pollAction from '../../mixins/pollAction'
import { AeInput, AeButton } from '@aeternity/aepp-components'

export default {
  data: function () {
    return {
      newNetworkName: ''
    }
  },
  mixins: [pollAction('getNodeStatus')],
  computed: mapState({
    nodeStatus: '$nodeStatus'
  }),
  components: {
    AeInput,
    AeButton
  },
  methods: {
    changeNetwork () {
      this.$store.commit('changeBaseUrl', this.newNetworkName)
      this.newNetworkName = ''
    }
  }
}
</script>
<style src='./status.scss' lang='scss' />
