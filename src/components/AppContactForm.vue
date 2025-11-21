<template>
  <q-card class="q-pa-lg card q-mx-auto">
    <q-card-section>
      <div class="text-h5 text-primary text-center q-mb-md">Contact Us</div>
      <p class="text-body2 text-center text-grey-7 q-mb-lg">
        Have a question or want a free quote? Fill out the form below and we’ll get back to you
        soon.
      </p>
      <q-form ref="formRef" class="q-gutter-md" @submit.prevent="submit">
        <AppInput v-model="state.form.name" label="Name" :rules="[required]" />
        <AppInput
          v-model="state.form.email"
          label="Email"
          type="email"
          :rules="[required, email]"
        />
        <AppInput v-model="state.form.phone" label="Phone" :rules="[required]" />
        <AppInput
          v-model="state.form.message"
          label="Message"
          type="textarea"
          autogrow
          :rules="[required]"
        />
        <div class="text-center">
          <AppButton type="submit" label="Submit" color="primary" :loading="state.loading" />
        </div>
      </q-form>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useQuasar } from 'quasar'
import emailjs from '@emailjs/browser'
import { required, email } from 'src/helpers/formRules.js'

import AppInput from 'src/components/AppInput'
import AppButton from 'src/components/AppButton'

const $q = useQuasar()
const formRef = ref(null)

const state = reactive({
  loading: false,
  form: defaultState(),
})

function defaultState() {
  return {
    name: null,
    email: null,
    phone: null,
    message: null,
  }
}

async function submit() {
  try {
    state.loading = true
    const SERVICE_ID = 'service_nznpyy9'
    const TEMPLATE_ID = 'template_zl1r5bc'
    const PUBLIC_KEY = 'q2-KxsSvlIwhUrFWF'
    await emailjs.send(SERVICE_ID, TEMPLATE_ID, state.form, PUBLIC_KEY)
    $q.notify({
      type: 'positive',
      message: 'Your message has been sent!',
      position: 'top',
    })
    state.form = defaultState()
    formRef.value.reset()
  } catch (error) {
    $q.notify({
      type: 'negative',
      message: 'Failed to send message. Please try again later.',
      position: 'top',
    })
    console.error(error)
  } finally {
    state.loading = false
  }
}
</script>

<style scoped lang="scss">
.card {
  max-width: 500px;
}
</style>
