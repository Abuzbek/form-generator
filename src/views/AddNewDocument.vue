<script lang="ts" setup>
import { IDocumentBodyFormValues } from "@/models";
import { ref } from "@vue/reactivity";

import InputField from "@/components/UI/InputField.vue";
import SelectField from "@/components/UI/SelectField.vue";
import UiButton from "@/components/UI/UiButton.vue";

import { InputHTMLAttributes } from "vue";
import { createDocument } from "@/api/api";
import { useRouter } from "vue-router";

const router = useRouter()

const document_title = ref<string>('')

type IDocumentFields = 'field_seq' |
  'is_mandatory' |
  'field_type' |
  'field_name'

const form_values = ref<IDocumentBodyFormValues[]>([{
  field_seq: 0,
  is_mandatory: false,
  field_type: 1,
  field_name: '',
  select_values: null,
}])

const options = ref([{ label: 'Input', value: 1 }, { label: 'Select', value: 2 }, { label: 'NumberInput', value: 3 }])

const onChangeDocumentTitle = (e: Event) => {
  const target = e.target as HTMLInputElement
  document_title.value = target.value
}

const onChangeFormValue = (value: IDocumentFields, index: number, e: Event) => {
  const target = e.target as HTMLInputElement
  if (value === 'is_mandatory') {
    form_values.value[index][value] = target.checked
  }
  else {
    form_values.value[index][value] = value === 'field_type' ? Number(target.value) : target.value
  }
}


const addMore = () => {
  form_values.value = [...form_values.value, {
    field_seq: '',
    is_mandatory: false,
    field_type: 1,
    field_name: '',
    select_values: null,
  }]
}

const removeOne = (index: number) => {
  form_values.value.splice(index, 1);
}

const submit = async () => {
  try {
    form_values.value = form_values.value.map((value, index) => {
      value.select_values = value.select_values && JSON.parse(value.select_values.trim())
      return value
    })
    const response = await createDocument({ document_name: document_title.value, form_values: form_values.value })
    router.push('/document/' + response?.data.id)
    console.log(response);
  } catch (error) {
    alert(error.message)
  }
}

</script>

<template>
  <form @submit.prevent="submit" class="new-document max-w-xl mx-auto pt-6 flex flex-col gap-4">
    <input-field label="Document Title" @input="onChangeDocumentTitle" v-model="document_title" />
    <hr>
    <div class="flex flex-col gap-4" v-for="(value, index) in form_values" :key="index">
      <input-field label="Field sequence (weight)" @input="onChangeFormValue('field_seq', index, $event)"
        v-model="value.field_seq" />
      <select-field @input="onChangeFormValue('field_type', index, $event)" label="Field type" :options="options" />
      <input-field label="Field name" @input="onChangeFormValue('field_name', index, $event)"
        v-model="value.field_name" />
      <div v-if="value.field_type == 2">
        <label class="block mb-2 text-sm font-medium text-gray-900">Paste JSON (string) e.g. <span
            class="font-mono">[{"value": true, "label": "Agree"}, {"value": false, "label": "Disagree"}]</span></label>
        <input v-model="value.select_values"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 font-mono" />
      </div>
      <div class="flex items-center gap-4 justify-between">
        <div class="flex items-center gap-4">
          <label for="Mandatory">Mandatory</label>
          <input label="Mandatory" type="checkbox" id="Mandatory"
            @input="onChangeFormValue('is_mandatory', index, $event)" v-model="value.is_mandatory" />
        </div>
        <div class="red-button" @click="removeOne(index)" v-if="index !== 0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
      </div>
      <hr>
    </div>
    <div class="flex items-center justify-between">
      <div class="outline-button" @click="addMore">
        Add more
      </div>
      <button class="base-button" type="submit">
        Save
      </button>
    </div>
  </form>
</template>
