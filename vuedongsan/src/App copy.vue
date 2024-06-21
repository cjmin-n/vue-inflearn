<template>
    <Modal :원룸들="원룸들" :누른거="누른거" :모달창열렸니="모달창열렸니" />
    <!-- <자식 v-bind:데이터="데이터"> -->

    <div class="menu">
        <!-- <a href="" v-for="작명 in 3" :key="작명">Home</a> -->
        <!-- <a href="" v-for="작명 in 메뉴들" :key="작명">{{ 작명 }}</a> -->
        <a href="" v-for="(a, i) in 메뉴들" :key="i">{{ a }}</a>
        <!-- 자료안의 데이터 개수만큼 반복됨-->

        <!-- <a href="">Home</a>
        <a href="">Products</a>
        <a href="">About</a> -->
    </div>

    <!-- <Discount :이름="오브젝트.name" :나이="오브젝트.age"></Discount> -->
    <Discount />
    <!-- <Discount v-bind="오브젝트"></Discount> -->
    <!-- 
        1.깔끔한 html
        2.공통으로 재사용가능
     -->

    <!-- html에 :속성 ="데이터이름" -->
    <!-- <div>
        원룸샵
        <h4 :style="스타일">XX 원룸</h4>
        <p>{{ price1 }} 만원</p>
    </div>
    <div>
        <h4>XX 원룸</h4>
        <p>{{ price2 }} 만원</p>
    </div> -->

    <!--<div v-for="(div, i) in products" :key="i">-->
    <!-- <h4>{{ products[i] }}</h4> -->
    <!--<h4>{{ div }}</h4>
        <p>50만원</p>
    </div>-->

    <Card :원룸="원룸들[0]"></Card>
    <Card :원룸="원룸들[1]" />
    <Card :원룸="원룸들[2]" />
    <Card :원룸="원룸들[3]" />
    <Card :원룸="원룸들[4]" />
    <Card :원룸="원룸들[5]" />
    <!-- <div v-for="(div, i) in 원룸들" :key="i">
        <img :src="div.image" alt="" class="room-img" />
        <h4
            @click="
                모달창열렸니 = true;
                누른거 = i;
            "
        >
            {{ div.title }}
        </h4>
        <p>{{ div.price }}원</p>
    </div> -->

    <!-- <div>
        <img :src="원룸들[0].image" alt="" class="room-img" />
        <h4>{{ 원룸들[0].title }}</h4>
        <p>{{ 원룸들[0].price }}원</p>
    </div>
    <div>
        <img :src="원룸들[1].image" alt="" class="room-img" />
        <h4>{{ 원룸들[1].title }}</h4>
        <p>{{ 원룸들[1].price }}원</p>
    </div>
    <div>
        <img :src="원룸들[2].image" alt="" class="room-img" />
        <h4>{{ 원룸들[2].title }}</h4>
        <p>{{ 원룸들[2].price }}원</p>
    </div> -->

    <div>
        <img src="./assets/room0.jpg" alt="" class="room-img" />
        <h4 @click="모달창열렸니 = true">{{ products[0] }}</h4>
        <p>50만원</p>
        <button @click="신고수[0]++">허위매물신고</button> <span>신고수 : {{ 신고수[0] }}</span>
        <!-- <button v-on:click="신고수++">허위매물신고</button> <span>신고수 : {{ 신고수 }}</span> -->
    </div>
    <div>
        <img src="./assets/room1.jpg" alt="" class="room-img" />
        <h4>{{ products[1] }}</h4>
        <p>가격은 아무거나</p>
        <button @click="신고수[1]++">허위매물신고</button> <span>신고수 : {{ 신고수[1] }}</span>
    </div>
    <div>
        <img src="./assets/room2.jpg" alt="" class="room-img" />
        <h4>{{ products[2] }}</h4>
        <p>가격은 아무거나</p>
        <button @click="신고수[2]++">허위매물신고</button> <span>신고수 : {{ 신고수[2] }}</span>
    </div>

    <!-- 이거 나중에 해결하기 ! -->
    <!-- <div v-for="(div, i) in products" :key="i">
        <h4>{{ div }}</h4>
        <p>가격</p>
        <button @click="신고수++">허위매물신고</button>
        <span>신고수 : {{ 신고수 }}</span>
    </div> -->
</template>
<!-- 
    동적인 UI만드는법
    1.UI의 현재 상태를 데이터로 저장해둠
    2.데이터에 따라 UI가 어떻게 보일지 작성
 -->

<script>
// import 변수명(자유작명) from 경로
// import apple from "./assets/oneroom.js";
// import { apple, apple2 } from "./assets/oneroom.js";
import data from "./oneroom.js";
import Discount from "./Discount.vue";
import Modal from "./Modal.vue";
import Card from "./Card.vue";

export default {
    name: "App",

    /*
    데이터바인딩 이유
    *html은 변경이 어렵기 때문에, 가변적으로
    **vue의 실시간 자동 렌더링쓰려고 ! - vue는 data를 변경하면 html에도 실시간 반영됨
    애초에 바뀔일이 없으면 안해도 될듯 !

    데이터는 한곳에만 만들고, 갖다써야 관리 가능
      */
    data() {
        return {
            오브젝트: { name: "kim", age: 20 },
            누른거: 0,
            원룸들: data,
            모달창열렸니: false,
            // price1: 60,
            // price2: 70,
            // 스타일: "color: blue",
            products: ["역삼동원룸", "천호동원룸", "마포구원룸"],
            메뉴들: ["Home", "Shop", "About"],
            신고수: [0, 0, 0],
        };
    },
    // 함수
    methods: {
        increase() {
            this.신고수 += 1;
        },
    },
    components: {
        Discount: Discount,
        // Discount,
        Modal: Modal,
        Card: Card,
    },
};
</script>

<style>
body {
    margin: 0;
}
div {
    box-sizing: border-box;
}
.discount {
    background: #eee;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
}
.black-bg {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    padding: 20px;
}
.white-bg {
    width: 100%;
    background: #fff;
    border-radius: 8px;
    padding: 20px;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

.menu {
    background: darkslateblue;
    padding: 15px;
    border-radius: 5px;
}
.menu a {
    color: white;
    padding: 10px;
}

.room-img {
    width: 100%;
    margin-top: 40px;
}
</style>
