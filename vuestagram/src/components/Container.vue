<template>
    <div>
        <div v-if="step == 0">
            <Post v-for="(a, i) in 게시물" :key="i" :게시물="게시물[i]" :i="i" />
        </div>
        <!-- <Post :게시물="게시물[0]" />
        <Post :게시물="게시물[1]" />
        <Post :게시물="게시물[2]" /> -->

        <!-- 필터선택페이지 -->
        <div v-if="step == 1">
            <div :class="'upload-image ' + 선택한필터" :style="`background-image: url(${thumb}) `"></div>
            <div class="filters">
                <!-- <FilterBox :thumb="thumb" v-for="(a, i) in filter" :key="i" :class="a"></FilterBox> -->
                <FilterBox :thumb="thumb" v-for="(a, i) in filter" :key="i" :a="a">
                    <!-- <template v-slot:default="작명">
                        <span>{{ 작명.msg }}</span>
                    </template> -->
                    <span>{{ filter[i] }}</span>
                    <!-- <template v-slot:b>{{ filter[i] }}</template> -->
                </FilterBox>

                <!-- <div class="filter-1"></div>
                <div class="filter-1"></div>
                <div class="filter-1"></div>
                <div class="filter-1"></div>
                <div class="filter-1"></div> -->
            </div>
        </div>

        <!-- 글작성페이지 -->
        <div v-if="step == 2">
            <div :class="선택한필터" class="upload-image" :style="`background-image: url(${thumb}) `"></div>
            <div class="write">
                <textarea class="write-box" @input="$emit('write', $event.target.value)">write!</textarea>
            </div>
        </div>

        <div v-if="step == 3">
            <MyPage />
        </div>
    </div>
</template>

<script>
import FilterBox from "./FilterBox";
import Post from "./Post";
import MyPage from "./MyPage";
export default {
    /* eslint-disable */
    name: "Container",
    data() {
        return {
            filter: ["aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson", "inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua", "reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"],
        };
    },

    components: {
        Post,
        FilterBox,
        MyPage,
    },
    props: {
        게시물: Array,
        step: Number,
        thumb: String,
        선택한필터: String,
    },
};
</script>

<style>
.upload-image {
    width: 100%;
    height: 450px;
    background: cornflowerblue;
    background-size: cover;
}
.filters {
    overflow-x: scroll;
    white-space: nowrap;
}
.filter-1 {
    width: 100px;
    height: 100px;
    background-color: cornflowerblue;
    margin: 10px 10px 10px auto;
    padding: 8px;
    display: inline-block;
    color: white;
    background-size: cover;
}
.filters::-webkit-scrollbar {
    height: 5px;
}
.filters::-webkit-scrollbar-track {
    background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
    background: #555;
}
.write-box {
    border: none;
    width: 90%;
    height: 100px;
    padding: 15px;
    margin: auto;
    display: block;
    outline: none;
}
</style>
