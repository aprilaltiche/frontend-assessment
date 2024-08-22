<template>
<div :class="cardClass">
    <!-- Card Body -->
    <div class="card__body">
        <img v-if="imageSrc" :src="require(`@assets/images/${imageSrc}`)" :alt="imageAlt" class="card__img" />
        <slot>
            <p class="card__text">{{ description }}</p>
        </slot>
    </div>
    <!-- Card Footer -->
    <div class="card__footer">
        <ButtonComponent variant="light" size="md" @click="handleButtonClick">
            Read More
        </ButtonComponent>
    </div>

</div>
</template>

<script>
import ButtonComponent from '@components/ButtonComponent.vue';
export default {

    name: 'CardComponent',
    components: {
        ButtonComponent
    },
    props: {
        imageSrc: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        imageAlt: {
            type: String,
            default: "Card image",
        },
        padding: {
            type: String,
            default: "p-4", // Default padding
        },
        shadow: {
            type: String,
            default: "shadow-lg", // Default shadow
        },
        rounded: {
            type: String,
            default: "rounded-md", // Default border radius
        },
        hoverable: {
            type: Boolean,
            default: false,
        },
        headerClass: {
            type: String,
            default: "p-4 border-b", // Default header styling
        },
        bodyClass: {
            type: String,
            default: "p-4", // Default body styling
        },
        footerClass: {
            type: String,
            default: "p-4 border-t", // Default footer styling
        },
    },
    computed: {
        cardClass() {
            return {
                "card": true,
                "bg-white": true,
                [this.shadow]: true,
                [this.rounded]: true,
                "transition duration-200 ease-in-out": this.hoverable,
                "transform hover:scale-105": this.hoverable,
                "custom-card": true,
                
            };
        },
        
    },

};
</script>

<style lang="scss" scoped>
.card {
    @apply shadow grid grid-cols-1 content-between  ;

    &__body {
        @apply px-6 py-4 text-center xsm:w-auto h-auto; 
    }
    &__img {
        @apply rounded-md w-full; 
    }
    &__text {
        @apply text-gray-700 text-base pt-4;
    }
    &__footer {
        @apply px-6 py-4 text-center; 
    }
}
</style>
