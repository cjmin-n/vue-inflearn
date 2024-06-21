import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
    state() {
        return {
            name: "kim",
            age: 20,
            likes: [30, 40, 50, 60, 80],
            좋아요눌렀니: false,
            more: {},
        };
    },
    mutations: {
        // 수정할 내용 정의
        setMore(state, data) {
            state.more = data;
        },
        이름변경(state) {
            state.name = "park";
        },
        수량증가(state, data) {
            state.age += data;
        },
        좋아요(state, data) {
            if (state.좋아요눌렀니 == false) {
                state.likes[data]++;
                state.좋아요눌렀니 = true;
            } else {
                state.likes[data]--;
                state.좋아요눌렀니 = false;
            }
        },
    },

    actions: {
        // ajax하는 곳 또는 오래 걸리는 작업들
        getData(context) {
            axios.get("https://codingapple1.github.io/vue/more0.json").then((a) => {
                // console.log(a.data);
                context.commit("setMore", a.data);
            });
        },
    },
});

export default store;
