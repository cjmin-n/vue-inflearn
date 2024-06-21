<template>
    <!-- <div class="start" :class="{ end: 모달창열렸니 }"> -->
    <!--{ 클래스명: 조건 }-->
    <transition name="fade">
        <Modal @closeModal="모달창열렸니 = false" :원룸들="원룸들" :누른거="누른거" :모달창열렸니="모달창열렸니" />
        <!-- </div> -->
    </transition>

    <div class="menu">
        <a href="" v-for="(a, i) in 메뉴들" :key="i">{{ a }}</a>
    </div>

    <!-- <Discount v-if="showDiscount == true" /> -->
    <Discount :amount="amount" />

    <button @click="priceSort">가격순정렬</button>
    <button @click="sortBack">되돌리기</button>
    <button @click="priceSortReverse">가격역순정렬</button>
    <button @click="stringSort">가나다순정렬</button>

    <!-- <Card @click="모달창열렸니 = true" :원룸="원룸들[i]" v-for="(a, i) in 원룸들" :key="i"></Card> -->
    <Card
        @openModal="
            모달창열렸니 = true;
            // 누른거 = $event;
            누른거 = i;
        "
        :원룸="원룸들[i]"
        v-for="(a, i) in 원룸들"
        :key="i"
    ></Card>
    <!-- 부모가 메시지 수신할 땐 @작명한거="" -->
</template>

<script>
import data from "./oneroom.js";
import Discount from "./Discount.vue";
import Modal from "./Modal.vue";
import Card from "./Card.vue";

export default {
    name: "App",
    data() {
        return {
            amount: 30,
            discountNumber: data,
            showDiscount: true,
            원룸들오리지널: [...data], //[...array자료]
            오브젝트: { name: "kim", age: 20 },
            누른거: 0,
            원룸들: data,
            모달창열렸니: false,
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
        sortBack() {
            // this.원룸들 = this.원룸들오리지널; -> 값을 공유해주세요 ! / 데이터 다시불러오는 방법도 있다.
            this.원룸들 = [...this.원룸들오리지널];
        },
        priceSort() {
            //문자 정렬 this.원룸들.sort(); 원본이 변형됨
            this.원룸들.sort(function (a, b) {
                return a.price - b.price; //숫자정렬
            });
        },
        priceSortReverse() {
            this.원룸들
                .sort(function (a, b) {
                    return a.price - b.price;
                })
                .reverse();
        },
        stringSort() {
            this.원룸들.sort(function (a, b) {
                // 오름차순 정렬
                // return a.title < b.title ? -1 : a.title < b.title ? 1 : 0;
                // 내림차순 정렬
                return a.title > b.title ? -1 : a.title < b.title ? 1 : 0;
            });
        },
    },
    components: {
        Discount: Discount,
        // Discount,
        Modal: Modal,
        Card: Card,
    },
    // created() {
    //     // html생성 전 데이터가져오기
    // },
    // mounted() {
    //     // mount후 - this를 쓸일 있으면 arrow function으로 쓰기 !
    //     setTimeout(() => {
    //         this.showDiscount = false;
    //     }, 2000);
    // },

    /* 숙제 */
    mounted() {
        setInterval((a) => {
            if (this.amount > 0) {
                this.amount--;
            } else {
                clearInterval(a);
            }
        }, 1000);
    },
};
</script>

<style>
/* 작명-enter-from / 작명-enter-active / 작명-enter-to */
.fade-enter-from {
    opacity: 0;
}
.fade-enter-active {
    transition: all 1s;
}
.fade-enter-to {
    opacity: 1;
}

.fade-leave-from {
    opacity: 1;
}
.fade-leave-active {
    transition: all 1s;
}
.fade-leave-to {
    opacity: 0;
}

.start {
    opacity: 0;
    transition: all 1s;
}
.end {
    opacity: 1;
}
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
