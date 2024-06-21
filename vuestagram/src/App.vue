<template>
    <div class="header">
        <ul class="header-button-left">
            <li>Cancel</li>
        </ul>
        <ul class="header-button-right">
            <li @click="step++" v-if="step < 2">Next</li>
            <li @click="publish" v-if="step == 2">발행</li>
        </ul>
        <img src="./assets/logo.png" class="logo" />
    </div>

    <h4>안녕 {{ $store.state.name }}</h4>
    <h4>안녕 {{ name }}</h4>
    <h4>{{ $store.state.age }} {{ 내이름 }}</h4>
    <h4>{{ age }}</h4>
    <p>{{ likes }}</p>
    <button @click="$store.commit('이름변경')">버튼</button>
    <!-- <button @click="$store.commit('수량증가', 10)">버튼2</button> -->
    <button @click="수량증가(10)">버튼2</button>
    <!-- <button @click="$store.state.name = 'park'">버튼</button> -->
    <!-- 위처럼 컴포넌트 안에서 직접 수정하기 금지 !
        state 수정하고 싶으면
        1. 미리 store.js에 수정방법을 정의해두고
        2. 그 방법을 컴포넌트에서 소환해서 수정해야함
     -->

    <p>{{ $store.state.more }}</p>
    <button @click="$store.dispatch('getData')">더보기버튼</button>
    <!-- actions 부탁 : dispatch / mutations 부탁 : commit -->

    <Container :게시물="게시물" :step="step" :thumb="thumb" @write="작성한글 = $event" :선택한필터="선택한필터" />
    <button @click="more">더보기</button>

    <p>{{ now2 }} {{ 카운터 }}</p>
    <button @click="카운터++">버튼</button>

    <div class="footer">
        <ul class="footer-button-plus">
            <input @change="upload" accept="image/*" type="file" id="file" class="inputfile" />
            <!--multiple -->
            <label for="file" class="input-plus">+</label>
        </ul>
    </div>

    <!-- <div v-if="step == 0">내용0</div>
    <div v-if="step == 1">내용1</div>
    <div v-if="step == 2">내용2</div>
    <button @click="step = 0">버튼0</button>
    <button @click="step = 1">버튼1</button>
    <button @click="step = 2">버튼2</button>
    <div style="margin-top: 500px"></div> -->
</template>

<script>
import Container from "./components/Container";
import postdata from "./assets/postdata.js";
import axios from "axios";
import { mapMutations, mapState } from "vuex";

export default {
    name: "App",
    data() {
        return {
            게시물: postdata,
            더보기: 0,
            step: 3,
            thumb: "",
            작성한글: "",
            선택한필터: "",
            카운터: 0,
        };
    },
    mounted() {
        this.emitter.on("박스클릭함", (e) => {
            this.선택한필터 = e;
            // console.log(e);
        });
    },
    computed: {
        // 다시 실행되지않음.
        // now2() {
        //     return new Date();
        // },
        name() {
            return this.$store.state.name;
        },
        age() {
            return this.$store.state.age;
        },
        ...mapState(["name", "age", "likes"]),
        ...mapState({ 내이름: "name" }),
    },
    methods: {
        // vuex mutations
        ...mapMutations(["setMore", "좋아요", "수량증가"]),
        // 사용할때마다 실행됨
        now() {
            return new Date();
        },
        more() {
            axios.get(`https://codingapple1.github.io/vue/more${this.더보기}.json`).then((result) => {
                // 요청성공 시 실행할 코드
                // console.log(result.data);
                this.게시물.push(result.data);
                // if (this.더보기 < 2) {
                this.더보기++;
                // } else {
                //     this.더보기 = 0;
                // }
            });

            // axios
            //     .post("URL", { name: "kim" })
            //     .then(/*성공*/)
            //     .catch(/*실패*/ (err) => {});
        },
        upload(e) {
            let 파일 = e.target.files;
            console.log(파일[0].type);
            let url = URL.createObjectURL(파일[0]);
            console.log(url);
            this.thumb = url;
            // this.step = 1;
            this.step++;
        },
        publish() {
            var 내게시물 = {
                name: "Kim Hyun",
                userImage: "https://picsum.photos/100?random=3",
                postImage: this.thumb,
                likes: 36,
                date: "May 15",
                liked: false,
                content: this.작성한글,
                filter: "perpetua",
            };
            this.게시물.unshift(내게시물);
            this.step = 0;
        },
    },
    components: {
        Container,
    },
};
</script>

<style>
/* @import 'style.css'; */
body {
    margin: 0;
}
ul {
    padding: 5px;
    list-style-type: none;
}
.logo {
    width: 22px;
    margin: auto;
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 13px;
}
.header {
    width: 100%;
    height: 40px;
    background-color: white;
    padding-bottom: 8px;
    position: sticky;
    top: 0;
}
.header-button-left {
    color: skyblue;
    float: left;
    width: 50px;
    padding-left: 20px;
    cursor: pointer;
    margin-top: 10px;
}
.header-button-right {
    color: skyblue;
    float: right;
    width: 50px;
    cursor: pointer;
    margin-top: 10px;
}
.footer {
    width: 100%;
    position: sticky;
    bottom: 0;
    padding-bottom: 10px;
    background-color: white;
}
.footer-button-plus {
    width: 80px;
    margin: auto;
    text-align: center;
    cursor: pointer;
    font-size: 24px;
    padding-top: 12px;
}
.sample-box {
    width: 100%;
    height: 600px;
    background-color: bisque;
}
.inputfile {
    display: none;
}
.input-plus {
    cursor: pointer;
}
#app {
    box-sizing: border-box;
    font-family: "consolas";
    margin-top: 60px;
    width: 100%;
    max-width: 460px;
    margin: auto;
    position: relative;
    border-right: 1px solid #eee;
    border-left: 1px solid #eee;
}
</style>
./postdata.js
