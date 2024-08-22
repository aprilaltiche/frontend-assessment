<template>
  <button
    :class="buttonClass"
    :disabled="isDisabled"
    @click="handleClick"
  >
    <slot />
  </button>
</template>
<script>
export default {
    name: 'ButtonComponent',
    props: {
    variant: {
      type: String,
      default: "primary",
      validator(value) {
        return ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"].includes(value);
      },
    },
    size: {
      type: String,
      default: "md",
      validator(value) {
        return ["sm", "md", "lg"].includes(value);
      },
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    buttonClass() {
      return {
        [`btn-${this.variant}`]: true,
        [`btn-${this.size}`]: true,
        "btn-block": this.block,
        disabled: this.isDisabled || this.isLoading,
        "is-loading": this.isLoading,
      };
    },
  },
  methods: {
    handleButtonClick(event) {
      if (!this.isDisabled && !this.isLoading) {
        this.$emit("click", event);
      }
    },
  },
};
</script>

  
<style scoped lang="scss">
/* Additional scoped styles can go here */
button {
  letter-spacing: 3px;  
  @apply font-bold rounded-full transition duration-700 ease-in-out uppercase;

  &.btn-primary {
    @apply bg-blue-500 hover:bg-blue-700 text-white;
  }

  &.btn-secondary {
    @apply bg-gray-500 hover:bg-gray-700 text-white;
  }

  &.btn-success {
    @apply bg-green-500 hover:bg-green-700 text-white;
  }

  &.btn-danger {
    @apply bg-red-500 hover:bg-red-700 text-white;
  }

  &.btn-warning {
    @apply bg-yellow-500 hover:bg-yellow-700 text-white;
  }

  &.btn-info {
    @apply bg-teal-500 hover:bg-teal-700 text-white;
  }

  &.btn-light {
    @apply bg-white hover:bg-black border-2 border-black hover:text-white text-black;
  }

  &.btn-dark {
    @apply bg-gray-800 hover:bg-gray-900 text-white;
  }

  &.btn-sm {
    @apply text-xs py-2 px-4;
  }

  &.btn-md {
    @apply text-sm py-2.5 px-5;
  }

  &.btn-lg {
    @apply text-lg py-3 px-6;
  }

  &.btn-block {
    @apply w-full;
  }

  &.is-loading {
    @apply cursor-not-allowed opacity-75;
    pointer-events: none;
  }
}
</style>
