<template>
  <div class="ifc_main">
    <template>
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          prop="tradePlatform"
          label="平台"
          width="180">
        </el-table-column>
        <el-table-column
          prop="lastDealPrice"
          label="价格/万个"
          width="180">
        </el-table-column>
        <el-table-column
          prop="tradeQuantity"
          label="24h成交量/万个">
        </el-table-column>
        <el-table-column
          prop="ranges"
          label="24h涨跌幅%">
        </el-table-column>
        <el-table-column
          prop="comments"
          label="说明">
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          tradePlatform: 'coolcoin',
          lastDealPrice: '77',
          tradeQuantity: '1000w',
          ranges: '+667%',
          comments: '推荐交易'
        }]
      }
    }
  }
</script>
<style></style>
