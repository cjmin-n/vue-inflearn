<template>
    <div style="padding: 10px">
        <h4>팔로워</h4>
        <input placeholder="?" @input="findS($event.target.value)" />
        <div class="post-header" v-for="(a, i) in follower" :key="i">
            <div class="profile" :style="`background-image: url(${a.image})`"></div>
            <span class="profile-name">{{ a.name }}</span>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";
export default {
    /* eslint-disable */
    name: "Mypage",
    setup() {
        let follower = ref([]);
        let followerOriginal = ref([]);

        onMounted(() => {
            axios.get("/follower.json").then((a) => {
                follower.value = a.data;
                followerOriginal.value = [...a.data];
            });
        });
        function findS(search) {
            let newFollower = followerOriginal.value.filter((a) => {
                return a.name.indexOf(search) != -1;
            });
            follower.value = [...newFollower];
        }
        return { follower, findS };
    },
};
</script>

<style></style>
