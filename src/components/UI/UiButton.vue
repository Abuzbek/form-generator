<script setup lang="ts">
import { defineEmits, defineProps } from '@vue/runtime-core'

const props = defineProps({
  href: {
    type: String,
    default: "#"
  },
  type: {
    type: String,
  },
  className: {
    type: String,
    default: "base-button"
  }
})

const emit = defineEmits(['click'])
</script>

<template>
  <router-link :class="className" :to="href" :type="type" @click="emit('click', $event)">
    <slot />
  </router-link>
</template>

<style>

</style>