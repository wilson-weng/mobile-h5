<template>
  <div class="bg-default">
    <div v-if="base">
      <mt-swipe :auto="4000" style="height: 230px">
        <mt-swipe-item v-for="item in base.intro_pic_list" :key="item.id">
          <img :src="item.url" style="width: 100%">
        </mt-swipe-item>
      </mt-swipe>
      <div class="p-a-1 bg-pure">
        <div>
          <div class="inline-block">{{ base.proj_name }}</div>
          <div class="color-link pull-right" style="font-size: 1.2rem;">{{ base.wage_range }}</div>
        </div>
        <div class="m-b-1 m-t-1"  v-if="base && base.tags">
          <mt-button class="tag" type="default" size="small" v-for="tag in base.tags.split(',')" :key="tag" style="margin-right: 10px;">{{tag}}</mt-button>
        </div>
        <div>
          <div class="inline-block subtitle">{{ base.address }}</div>
          <div class="subtitle pull-right">更新时间: {{base.update_time}}</div>
        </div>
      </div>
    </div>
    <div v-if="detail.length > 0">
      <top-scroll-nav :tabs="tabs"></top-scroll-nav>
      <div :id="'pivot'+item.id" v-for="item in detail" :key="item.id" class="p-a-1 m-t-tiny bg-pure" v-if="detail">
        <div class="bottom-line p-b-tiny">{{item.title}}</div>
        <div v-html="item.rich_text" class="m-t-1 color-text" style="font-size: 0.9rem;"></div>

      </div>
      <div style="height: 60px;"></div>
    </div>

    <div class="bottom-button bg-pure">
      <mt-button type="primary" size="large" @click.native="handler()" style="width: 95%">立即报名</mt-button>
    </div>
  </div>
</template>


<script>
  import { mapState, mapActions } from 'vuex';
  import TopScrollNav from 'src/site/components/topScrollNav'

  export default {
    computed: {
      ...mapState({
        base: state => state.proj.base,
        detail: state => state.proj.detail,
        highlight: state => state.proj.highlight,
      }),
      tabs: function(){
        return this.detail.length>5? this.detail.slice(0,5): this.detail
      }
    },
    components: { TopScrollNav },

    data() {
      return {
        projId: this.$route.query.proj_id,
      }
    },
    created(){
      if(this.projId){
        this.getProjBaseInfo(this.projId);
        this.getProjContent(this.projId).then();
      }else{
        this.$toast('项目不存在')
      }
    },
    methods: {
      ...mapActions(['getProjBaseInfo', 'getProjContent']),
      handler(){
        wx.miniProgram.getEnv(function(res) {
          if(res.miniprogram){
            wx.miniProgram.postMessage({event: 'register'})
          }
        })
      },

    }
  }
</script>
