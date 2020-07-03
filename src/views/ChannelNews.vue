<template>
    <div>
        <pager :page="page" :limit="10" :total="2011" :panel-number="10" @pageChange="handleChange"/>
    </div>
</template>

<script>
    import Pager from "../components/Pager";
    export default {
        components:{
          Pager,
        },
        data(){
          return {
              page:3,
          }
        },
        created(){

        },
        methods:{
            handleChange(newPage){
                this.page = newPage;
            }
        }
    }

</script>

<style scoped>

</style>