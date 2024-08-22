<template>
<section class="hero">
    <div class="hero__content">
        <slot name="title">
            <h1 class="hero__title">{{ title }}</h1>
        </slot>
        <p class="hero__subtitle">{{ subtitle }}</p>

    </div>
</section>
</template>

<script>
export default {
    name: 'HeroSection',
    props: {
        title: {
            type: String,
            default: 'Hello Developer!',
        },
        subtitle: {
            type: String,
            default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
    },
};
</script>

<style lang="scss" scoped>
.hero {
    
    @apply h-[50vh] backdrop-contrast-50 bg-white/30 xsm:bg-hero-small lg:bg-hero-large bg-cover bg-center flex items-center justify-center;
   
    &__content {
        @apply px-4 md:px-8 text-center ;
    }

    &__title {
        @apply text-3xl xsm:text-5xl md:text-5xl font-bold text-white leading-tight;
        margin-bottom: 1rem;
    }

    &__subtitle {
        @apply text-lg  xsm:text-2xl  md:text-xl text-white mb-4;
    }

}
</style>
