<template>
    <div :class="'filter-item ' + a" :style="`background-image:url(${thumb})`" @click="fire">
        <!-- <p>{{ a }}</p> -->
        <slot :msg="msg"></slot>
        <!-- <slot name="b"></slot> -->
        <!-- <button @click="fire">버튼</button> -->
    </div>
</template>

<script>
export default {
    /* eslint-disable */
    name: "FilterBox",
    data() {
        return {
            msg: "hello",
        };
    },
    methods: {
        fire() {
            this.emitter.emit("박스클릭함", this.a);
        },
    },
    props: {
        thumb: String,
        a: Object,
    },
};
</script>

<style>
.filter-item {
    width: 100px;
    height: 100px;
    margin: 10px 10px 10px auto;
    padding: 8px;
    display: inline-block;
    color: white;
    background-size: cover;
    background-position: center;
}
</style>
