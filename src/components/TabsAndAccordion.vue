<template>
    <div class="custom">
      <!-- Tabs for desktop -->
      <div v-if="isDesktop" class="tab">
        <TabComponent
          v-for="(section, index) in sections"
          :key="index"
          :title="section.title"
          :isActive="activeIndex === index"
          :index="index"
          @select-tab="setActiveIndex"
        />
      </div>
  
      <!-- Accordion for mobile -->
      <div v-else class="accordion">
        <AccordionComponent
          v-for="(section, index) in sections"
          :key="index"
          :title="section.title"
          :content="section.content"
          :isActive="activeIndex === index"
          :index="index"
          @toggle-accordion="setActiveIndex"
        />
      </div>
  
      <!-- Display content (optional for tabs) -->
      <div v-if="isDesktop && activeIndex !== null && sections.length > 0 && sections[activeIndex]" class="content" v-html="sections[activeIndex].content"></div>
    </div>
  </template>
  
  <script>
  import TabComponent from './TabComponent.vue';
  import AccordionComponent from './AccordionComponent.vue';
  
  export default {
    components: { TabComponent, AccordionComponent },
    data() {
      return {
        sections: [], // Holds the sections from data.json
        activeIndex: 0, // The currently active tab or accordion
        isDesktop: false, // Determines whether the view is desktop or mobile
      };
    },
    mounted() {
      fetch('/data.json')
        .then(response => response.json())
        .then(data => {
          this.sections = data;
        });
  
      this.checkScreenSize();
      window.addEventListener('resize', this.checkScreenSize);
    },
    methods: {
      setActiveIndex(index) {
        this.activeIndex = this.activeIndex === index ? null : index;
      },
      checkScreenSize() {
        this.isDesktop = window.innerWidth >= 768; // 768px is a common breakpoint for mobile
      }
    },
    beforeUnmount() {
      window.removeEventListener('resize', this.checkScreenSize);
    }
  };
  </script>
  
  <style lang="scss" scoped>
  
  .tab {
    @apply flex space-x-2;

  }
  .accordion {
    @apply space-y-2;

  }
  </style>
  