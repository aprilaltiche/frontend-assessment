<template>
    <div class="accordion-item">
      <div
        :class="['accordion-title', { 'active': isActive }]"
        @click="toggleAccordion"
      >
        {{ title }}
      </div>
      <div v-if="isActive" class="accordion-content" v-html="content"></div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: String,
      content: String,
      isActive: Boolean,
      index: Number
    },
    methods: {
      toggleAccordion() {
        this.$emit('toggle-accordion', this.index);
      }
    }
  };
  </script>
  
  <style scoped>
  .accordion-title {
    @apply px-4 py-2 cursor-pointer bg-gray-200;
  }
  .accordion-content {
    @apply px-4 py-2 bg-gray-100;
  }
  .active.accordion-title {
    @apply bg-blue-500 text-white;
  }
  </style>
  