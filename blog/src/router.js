import { createWebHistory, createRouter } from "vue-router";
import List from "./components/List.vue";
import Home from "./components/Home.vue";
import Detail from "./components/Detail.vue";
import Author from "./components/Author.vue";
import Comment from "./components/Comment.vue";

const routes = [
    {
        path: "/detail/:id(\\d+)", //:아무문자작명 //숫자만 찾아주는 정규식 //*는 중복해라
        // path: "/detail/:id", //:아무문자작명 //숫자만 찾아주는 정규식 //*는 중복해라
        component: Detail,
        children: [
            {
                path: "author",
                component: Author,
            },
            {
                path: "comment",
                component: Comment,
            },
        ],
    },

    {
        path: "/list",
        component: List,
    },
    {
        path: "/",
        component: Home,
    },

    // 순서가 위일수록 우선권
    // {
    //     path: "/:anything(.*)",
    //     component: Error,
    // },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
