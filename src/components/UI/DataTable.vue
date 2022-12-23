<script lang="ts" setup>
import { IDocument } from '@/models';
import { defineProps } from '@vue/runtime-core'

interface IHeader {
  value: string
  class?: string
  text: string
}

interface Props {
  headers: IHeader[]
  items: IDocument[] | any
}

const props = defineProps<Props>()

</script>

<template>
  <div class="overflow-x-auto relative border sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th class="py-3 px-6" v-for="header in headers" :key="header.value" :class="[header.class, header.value]">
            {{ header.text }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white border-b" v-for="(item, index) in items" :key="index">
          <th v-for="header in headers" :key="header.value"
            class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
            <span v-if="header.value !== 'edit'">{{ item[header.value] }}</span>
            <slot v-else name="edit" :items="{ index, item }"></slot>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>

</style>