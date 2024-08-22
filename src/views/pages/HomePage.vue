<template>
<main>
    <HeroSection />
    <CardSection />
</main>
</template>

<script>

import HeroSection from '@components/home/HeroSection.vue';
import CardSection from '@components/home/CardSection.vue';

export default {
    components: {
        HeroSection,
        CardSection,
    }
};
</script>
