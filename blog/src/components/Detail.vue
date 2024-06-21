<template>
    {{ $route.params.id }}
    <div>
        <h4>상세페이지</h4>
        <h5>{{ arrayData[$route.params.id].title }}</h5>
        <p>{{ arrayData[$route.params.id].content }}~</p>
    </div>
    <router-view></router-view>
</template>

<script>
export default {
    /* eslint-disable */
    name: "Detail",
    props: {
        arrayData: Array,
    },
};
</script>

<style></style>
