<template>
  <div class="tx-summary">
    <div class="tx-summary-title">
      <h1>
        transaction summary
      </h1>
    </div>
    <div class="tx-summary-data">
      <div class="tx-summary-data-row">
        <div class="tx-summary-data-row-item">1</div>
        <div class="tx-summary-data-row-item">2</div>
      </div>
      <div class="tx-summary-data-row">
        <div class="tx-summary-data-row-item">1</div>
        <div class="tx-summary-data-row-item">2</div>
      </div>
      <div class="tx-summary-data-row">
        <div class="tx-summary-data-row-item">1</div>
        <div class="tx-summary-data-row-item">2</div>
      </div>
      <div class="tx-summary-data-row">
        <div class="tx-summary-data-row-item">1</div>
        <div class="tx-summary-data-row-item">2</div>
      </div>
      <div class="tx-summary-data-row">
        <div class="tx-summary-data-row-item">1</div>
        <div class="tx-summary-data-row-item">2</div>
      </div>
      <div class="tx-summary-data-row">
        <div class="tx-summary-data-row-item">1</div>
        <div class="tx-summary-data-row-item">2</div>
      </div>
      <div class="tx-summary-data-row">
        <div class="tx-summary-data-row-item">1</div>
        <div class="tx-summary-data-row-item">2</div>
      </div>
      <div class="tx-summary-data-row">
        <div class="tx-summary-data-row-item">1</div>
        <div class="tx-summary-data-row-item">2</div>
      </div>
      <div class="tx-summary-data-row">
        <div class="tx-summary-data-row-item">1</div>
        <div class="tx-summary-data-row-item">2</div>
      </div>
      <div class="tx-summary-data-row">
        <div class="tx-summary-data-row-item">1</div>
        <div class="tx-summary-data-row-item">2</div>
      </div>
    </div>
  </div>
  <div class="tx-overlay"></div>
</template>
<script>
  export default {
    name: 'transactionSummary',
    props: [
      'tx'
    ]
  }
</script>
<style lang='scss'>
  .tx-summary-data-row {
    display: flex;
  }
</style>