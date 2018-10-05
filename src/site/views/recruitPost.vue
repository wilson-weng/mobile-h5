<template>
  <div class="color-bg">
    <mt-swipe :auto="4000" style="height: 230px">
      <mt-swipe-item v-for="item in base.intro_pic_list" :key="item.id">
        <img :src="item.url" style="width: 100%">
      </mt-swipe-item>
    </mt-swipe>
    <div class="p-a-1">
      <div>
        <div class="inline-block">{{ base.proj_name }}</div>
        <div class="color-link pull-right" style="font-size: 1.2rem;">{{ base.wage_range }}</div>
      </div>
      <div class="m-b-1 m-t-1">
        <mt-button class="tag" type="default" size="small" v-for="tag in base.tags.split(',')" style="margin-right: 10px;">{{tag}}</mt-button>
      </div>
      <div>
        <div class="inline-block subtitle">{{ base.address }}</div>
        <div class="subtitle pull-right">更新时间: 2018.9.1</div>
      </div>
    </div>
    <div v-for="item in detail" class="p-a-1">
      <li>{{item.title}}</li>

    </div>
    <mt-cell title="标题文字" value="说明文字"></mt-cell>
    <div class="bottom-button">
      <mt-button type="primary" size="large" @click.native="handler()" style="width: 95%">立即报名</mt-button>
    </div>
  </div>
</template>


<script>
  import { mapState, mapActions } from 'vuex';

  export default {
    computed: {
      ...mapState({
        base: state => state.proj.base,
        detail: state => state.proj.detail,
        highlight: state => state.proj.highlight,
      }),
    },
    components: { },

    data() {
      return {
        projId: this.$route.query.proj_id
      }
    },
    created(){
      if(this.projId){
        this.getProjBaseInfo(this.projId);
        this.getProjContent(this.projId);
      }else{
        this.$toast('项目不存在')
      }
    },
    methods: {
      ...mapActions(['getProjBaseInfo', 'getProjContent']),
      handler(){
        console.log(this.base)
      }

    }
  }
</script>
