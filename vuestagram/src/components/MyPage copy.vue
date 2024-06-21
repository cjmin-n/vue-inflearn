<template>
    <div style="padding: 10px">
        <h4>팔로워</h4>
        <input placeholder="?" @input="search($event.target.value)" />
        <div class="post-header" v-for="(a, i) in follower" :key="i">
            <div class="profile" :style="`background-image: url(${a.image})`"></div>
            <span class="profile-name">{{ a.name }}</span>
        </div>
    </div>
</template>

<script>
// import { onMounted, ref, reactive, toRefs, computed } from "vue";
import { onMounted, ref } from "vue";
import axios from "axios";
// import { useStore } from "vuex";
export default {
    /* eslint-disable */
    name: "MyPage",
    props: {
        one: Number,
    },
    setup(props, context) {
        // component 만들기 전에 이것부터 실행해라.
        // 데이터생성,조작 가능 methods,computed, watch, hook 다 가능
        let follower = ref([]); // 나머지 자료형 집어넣음 - ref로 써도 됨
        let followerOriginal = ref([]);
        // let test = reactive({ name: "kim" }); // 보통 array, object 집어넣음
        // let { one } = toRefs(props);
        // console.log(one.value);
        // test;

        //watch(감시할거, () => {실행할코드})
        // let re = computed(() => {
        //     return follower.value.length;
        // });
        // // console.log(re.value);

        // let store = useStore();
        // console.log(store.state.name);
        // console.log(store.commit());

        onMounted(() => {
            axios.get("/follower.json").then((a) => {
                follower.value = a.data;
                followerOriginal.value = [...a.data];
            });
        });

        function search(s) {
            let newFollower = followerOriginal.value.filter((a) => {
                return a.name.indexOf(s) != -1;
            });
            follower.value = [...newFollower];
        }

        // reference data type 으로 감싸야 실시간 반영가능
        return { follower, search };
    },
};
</script>

<style scoped>
/* css 합치기 실으면 scoped 쓰면 합쳐지지않음 */
</style>
