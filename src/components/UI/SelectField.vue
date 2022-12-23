<script lang="ts" setup>
import { defineProps } from "@vue/runtime-core"
import { SelectHTMLAttributes } from "vue";

interface Props extends SelectHTMLAttributes {
  options: any[],
  label: string
}

const props = defineProps<Props>()
</script>
<template>
  <div>
    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900">{{ label }}</label>
    <select id="countries" v-bind="$attrs"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
      <option v-for="(option, i) in options" :key="i" :value="option.value">{{ option.label }}</option>
    </select>
  </div>
</template>


<style>

</style>