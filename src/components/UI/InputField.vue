<script lang="ts" setup>
import { defineProps, defineEmits } from '@vue/runtime-core'

import slug from 'slugify'

import { InputHTMLAttributes } from 'vue';

interface Props extends InputHTMLAttributes {
  label: string;
  classParent?: string;
}

const props = defineProps<Props>()
</script>

<template>
  <div :class="classParent">
    <label :for="slug(label)" class="block mb-2 text-sm font-medium text-gray-900">{{ label }}</label>
    <input :id="slug(label)"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      v-bind="props">
  </div>
</template>


<style>

</style>