<template>
    <div
      :class="['tab', { 'active': isActive }]"
      @click="selectTab"
    >
      {{ title }}
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: String,
      isActive: Boolean,
      index: Number
    },
    methods: {
      selectTab() {
        this.$emit('select-tab', this.index);
      }
    }
  };
  </script>
  
  <style scoped>
  .tab {
    @apply px-4 py-2 cursor-pointer;
  }
  .active.tab {
    @apply bg-blue-500 text-white;
  }
  </style>
  