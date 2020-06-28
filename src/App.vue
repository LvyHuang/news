<template>
  <div id="app">
    <div style="width: 1080px;margin: 0 auto">
      <Banner :banners="banners"/>
      <Channels @chooseIdChange="handleChange"/>
      <Center>
        <Loading/>
      </Center>
      <NewsList :news="news"/>


    </div>

  </div>
</template>


<script>
  import Banner from "./components/Banner";
  import Channels from "./components/news/Channels";
  import NewsList from "./components/news/NewsList";
  import {getNews} from "./services/newsService";
  import Loading from "./components/Loading";
  import Center from "./components/Center"

  export default {
    components:{
      Banner,
      Channels,
      NewsList,
      Loading,
      Center
    },
    data(){
      return {
        banners:[
          {url:require("./assets/banner/banner1.jpeg"), link:"https://baidu.com"},
          {url:require("./assets/banner/banner2.jpeg"), link:"https://zhihu.com"},
          {url:require("./assets/banner/banner3.jpeg"), link:"https://sougou.com"},
        ],
        news:[],
    }
    },
    async created() {
      var resp = await getNews("5572a108b3cdc86cf39001cd");
      this.news = resp.contentlist;
    },
    methods:{
      async handleChange(newId){
        var resp = await getNews(newId);
        this.news = resp.contentlist;
      }
    }
  };
</script>

