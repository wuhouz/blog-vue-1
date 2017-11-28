<template>
    <div id="detail">
      this is {{message}} page  {{id}}
    </div>
</template>

<script>
export default {
  name: 'detail',
  props: ['id'],
  data () {
    return {
      message: 'detail'
    }
  }
}
</script>

<style scoped>
  div{
    border: 1px solid green;
  }
</style>
