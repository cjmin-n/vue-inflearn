<template>
    <div>
        <img :src="원룸.image" alt="" class="room-img" />
        <h4 @click="send">
            <!--부모에게 메시지전달 $emit(작명, 데이터)-->
            {{ 원룸.title }}
        </h4>
        <p>{{ 원룸.price }}원</p>
    </div>
</template>

<script>
export default {
    //eslint-disable-next-line
    name: "Card",
    // props로 보낸 데이터는 수정금지 !Read-only
    props: {
        원룸: Object,
    },
    methods: {
        send() {
            this.$emit("openModal", this.원룸.id);
            // 함수안에서 갖다쓰고 싶으면 this.를 붙이기
        },
    },
};
</script>

<style></style>
