<template>
  <div class="new-document max-w-xl mx-auto pt-6 flex flex-col gap-4">
    <h2 class="text-center text-2xl font-bold">{{ document_title }}</h2>

    <div class="" v-for="(n, i) in fields" :key="i">
      <template v-if="n.field_type == 2">
        <select-field :options="n.select_values" :label="n.field_name" />
      </template>
      <template v-else>
        <input-field :label="n.field_name" :type="n.field_type === 1 ? 'text' : 'number'" />
      </template>
    </div>
    <button @click="$router.back()" class="base-button">Back</button>
  </div>
</template>

<script setup lang="ts">
import { getDocumentById } from "@/api/api";
import { ref } from "@vue/reactivity";
import { useRoute } from "vue-router";

import InputField from "@/components/UI/InputField.vue";
import SelectField from "@/components/UI/SelectField.vue";
import UiButton from "@/components/UI/UiButton.vue";

import { IDocumentDetailField } from "@/models";

const document_title = ref('')
const fields = ref<IDocumentDetailField>()
const route = useRoute()
console.log(route.params.id);

function compare(a, b) {
  if (a.field_seq < b.field_seq) {
    return -1;
  }
  if (a.field_seq > b.field_seq) {
    return 1;
  }
  return 0;
}


const getData = async () => {
  const response = await getDocumentById(Number(route.params.id))
  document_title.value = response?.data.document_name
  fields.value = response?.data.fields.sort(compare)
  console.log(fields.value);
}
getData()
</script>

<style>

</style>