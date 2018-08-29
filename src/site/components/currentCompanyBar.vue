<template>
  <el-card class="m-a-1">
    <el-row :gutter="20" type="flex">
      <el-col>
        <img :src="currentCompany.company_thumbnail" class="image pull-left m-r-1">
        <div class="h2">{{currentCompany.company_name}}</div>
        <div class="subtitle">{{currentCompany.company_desc}}</div>
      </el-col>
      <el-col>
        <el-button class="pull-right" style="margin-top: 8px;" @click="backToCompanyList()" size="small">项目列表</el-button>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    computed: {
      ...mapState({
        currentCompany: state => state.global.current_company,
      }),
    },
    methods: {
      backToCompanyList(){
        this.$router.push({path: '/company'});
      }
    }

  }
</script>

