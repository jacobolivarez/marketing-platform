<template>
  <q-card class="q-pa-lg card q-mx-auto">
    <q-card-section>
      <div class="text-h5 text-primary text-center q-mb-md">Contact Us</div>
      <p class="text-body2 text-center text-grey-7 q-mb-lg">
        Have a question or want a free quote? Fill out the form below and we’ll get back to you
        soon.
      </p>
      <q-form class="q-gutter-md" @submit.prevent="submit">
        <AppInput v-model="state.name" label="Name" />
        <AppInput v-model="state.email" label="Email" />
        <AppInput v-model="state.phone" label="Phone" />
        <AppInput v-model="state.message" label="Message" type="textarea" />
        <div class="text-center">
          <AppButton type="submit" label="Submit" color="primary" />
        </div>
      </q-form>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { reactive } from 'vue'

import AppInput from 'src/components/AppInput'
import AppButton from 'src/components/AppButton'

const state = reactive({
  name: null,
  email: null,
  phone: null,
  message: null,
})

async function submit() {
  console.log('submit')
}
</script>

<style scoped lang="scss">
.card {
  max-width: 500px;
}
</style>
