<template>
    <div v-for="(a, i) in arrayData" :key="i">
        <h5 @click="$router.push('/detail/' + i)">{{ a.title }}</h5>

        <p>{{ arrayData[i].date }}</p>
    </div>
    <!-- <div>
        <h5>{{ arrayData[1].title }}</h5>
        <p>{{ arrayData[1].date }}</p>
    </div>
    <div>
        <h5>{{ arrayData[2].title }}</h5>
        <p>{{ arrayData[2].date }}</p>
    </div> -->
    <!-- <div>
        <h5>{{ arrayData[0].title }}</h5>
        <p>{{ arrayData[0].date }}</p>
    </div>
    <div>
        <h5>{{ arrayData[1].title }}</h5>
        <p>{{ arrayData[1].date }}</p>
    </div>
    <div>
        <h5>{{ arrayData[2].title }}</h5>
        <p>{{ arrayData[2].date }}</p>
    </div> -->
</template>

<script>
export default {
    /* eslint-disable */
    name: "List",
    props: {
        arrayData: Array,
    },
};
</script>

<style></style>
