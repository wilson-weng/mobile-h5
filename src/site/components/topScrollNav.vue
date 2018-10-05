<template>
  <mt-navbar id="topbar" v-model="currentTab" :class="searchBarFixed? 'fixed-top':''">
    <mt-tab-item :id="tab.id" v-for="tab in tabs" :key="tab.id">
      <div v-scroll-to="'#pivot'+tab.id+', 100px'">{{tab.title}}</div>
    </mt-tab-item>
  </mt-navbar>
</template>

<script>
  export default {
    name: 'topScrollNav',
    props: ['tabs', 'selected'],
    data() {
      return {
        currentTab: this.tabs[0].id,
        searchBarFixed: false
      }
    },
    mounted () {
      window.addEventListener('scroll', this.handleScroll)
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
      handleScroll () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        var offsetTop = document.querySelector('#topbar').offsetTop
        if (scrollTop > offsetTop) {
          this.searchBarFixed = true
        } else {
          this.searchBarFixed = false
        }
      },
    }
  }
</script>
