<template>
  <div id="list">
    <div class="loading" v-if="loading">
      loading...
    </div>
    <div class="error" v-if="error">
      {{error}}
    </div>
    <div class="content" v-if="list">
      {{message}}
      <p>{{ id }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: ['id'],
  data () {
    return {
      loading: false,
      list: null,
      error: null,
      message: 'list page'
    }
  },
  created(){
    this.fetchData()
  },
  methods: {
    fetchData (){
      this.error = this.list = null
      this.loading = true
      this.message = this.id
      console.log('id: ' + this.id);
      console.log(this.$route.params.id);
    }
  },
  watch: {
    '$route': 'fetchData'
  }
}
</script>

<style scoped>
  div {
    border: 1px solid yellow;
    height: 1000px;
  }
</style>
