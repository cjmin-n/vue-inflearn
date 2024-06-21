<template>
    <div class="black-bg" v-if="모달창열렸니 == true">
        <div class="white-bg">
            <h4>{{ 원룸들[누른거].title }}</h4>
            <p>{{ 원룸들[누른거].content }}</p>
            <!-- <input type="text" @input="month = $event.target.value" /> -->
            <input type="text" v-model="month" />
            <!-- <textarea name="" id="" cols="30" rows="10" v-model="month"></textarea> -->
            <!-- <select v-model="month">
                <option>23</option>
                <option>123</option>
                <option>323</option>
            </select> -->
            <!-- <input type="checkbox" name="" id="" v-model="month" /> -->
            <p>{{ month }}개월 선택함 {{ 원룸들[누른거].price * month }}원</p>
            <button @click="$emit('closeModal')">닫기</button>
        </div>
    </div>
</template>

<script>
export default {
    //eslint-disable-next-line
    name: "Modal",
    // 부모도 쓰이는 데이터라면 부모컴포넌트에 만들기
    data() {
        return {
            month: 1,
        };
    },
    watch: {
        // 감시할데이터(){}
        // (변경후데이터, 변경전 데이터)
        // form validation 라이브러리 설치하면 watch대신 사용 가능
        month(a) {
            // if (a > 13) {
            //     alert("13이상 입력하지 마셈");
            // }
            if (isNaN(a) == true) {
                alert("숫자로 입력하세요");
                this.month = 1;
            }

            // 사용자가 month를 글자로 입력하면 경고문 띄워주기
        },
    },
    props: {
        원룸들: Array,
        누른거: Number,
        모달창열렸니: Boolean,
    },
    beforeUpdate() {
        if (this.month == 2) {
            // alert("2입력했다!");
            this.month = 3;
        }
    },
};
</script>

<style></style>
