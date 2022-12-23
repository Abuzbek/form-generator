<script lang="ts" setup>
import { ref } from 'vue';

import DataTable from '@/components/UI/DataTable.vue';
import UiButton from '@/components/UI/UiButton.vue';

import { IDocument } from '@/models';
import { useFormatDate } from '@/hooks/useFormatDate'
import { getListOfDocuments } from '@/api/api';

const loading = ref<boolean>(false)

const items = ref<IDocument[]>([])

const headers = ref([
  {
    value: 'id',
    text: 'ID'
  },
  {
    value: 'document_name',
    text: 'Document title'.toUpperCase()
  },
  {
    value: 'created_at',
    text: 'created date'.toUpperCase()
  },
  {
    value: 'field_count',
    text: 'document size'.toUpperCase()
  },
  {
    value: 'edit',
    text: ''
  },
])

const getData = async () => {
  const response = await getListOfDocuments()
  items.value = response?.data.map((n: IDocument) => {
    n.created_at = useFormatDate(n.created_at)
    return n
  });
  loading.value = true;
}

getData()
</script>

<template>
  <div class="home p-6 container mx-auto flex flex-col gap-4">
    <div class="flex items-center justify-end">
      <UiButton :tag="'a'" :href="'/add-new-document'">
        New document form
      </UiButton>
    </div>
    <data-table v-if="loading" :headers="headers" :items="items">
      <template #edit="{ items }">
        <router-link :to="`/document/${items.item.id}`" class="text-sky-500">
          Document perview
        </router-link>
      </template>
    </data-table>
    <span v-else class="uppercase">Loading...</span>
  </div>
</template>


