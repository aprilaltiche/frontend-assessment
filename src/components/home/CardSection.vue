<template>
<section>
    <div class="wrapper">
    <CardComponent v-for="card in cards" :key="card.id" :imageSrc="card.imageSrc" :description="card.description" :buttonText="card.buttonText" />

    </div>
</section>
</template>

<script>
import {
    mapGetters
} from 'vuex';
import CardComponent from '@components/CardComponent.vue';

export default {
    name: 'CardSection',
    components: {
        CardComponent,
    },
    computed: {
        ...mapGetters(['getAllCards']),
        cards() {
            return this.getAllCards;
        },
    },
};
</script>

<style lang="scss" scoped>
section{
    @apply w-full grid justify-center;
}
.wrapper {
    @apply grid grid-cols-1  lg:grid-cols-3 xsm:grid-flow-row gap-x-5 gap-y-5 py-8 xsm:px-4 max-w-screen-lg;
}

</style>
