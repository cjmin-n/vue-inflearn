<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">내꼬</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">list</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#">detail</a>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>

    <!-- 다른페이지로 이동 -->
    <router-link to="/">홈페이지</router-link>
    <router-link to="list">리스트페이지</router-link>
    <!-- <router-link to="detail">디테일페이지</router-link> -->

    <!-- 라우터로 설정한 컴포넌트를 보여줄 자리 -->
    <div class="mt-4">
        <router-view :arrayData="arrayData"></router-view>
    </div>
    <!-- <Home /> -->
    <!-- <List :arrayData="arrayData" /> -->
</template>

<script>
// import List from "./components/List.vue";
// import Home from "./components/Home.vue";

export default {
    name: "App",
    components: {
        // List: List,
        // Home,
    },
    data() {
        return {
            arrayData: [
                {
                    title: "첫 째 프로젝트 : 허위매물 전문 부동산 앱",
                    content: "Vue를 이용하면 비누같이 매끈한 앱을 만들 수 있습니다",
                    date: "September 24, 2021",
                    number: 0,
                },
                {
                    title: "둘 째 프로젝트 : 오마카세 배달 앱",
                    content: "음식이 아니라 셰프를 직접 배달해드립니다",
                    date: "October 20, 2020",
                    number: 1,
                },
                {
                    title: "셋 째 프로젝트 : 현피 앱",
                    content: "거리를 설정하면 가장 가까운 파이터를 소개해드려요! 서로 싸워보세요",
                    date: "April 24, 2019",
                    number: 2,
                },
            ],
        };
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /* margin-top: 60px; */
}
</style>
