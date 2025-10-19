<template>
  <q-btn v-bind="$attrs" :no-caps="noCaps" />
</template>

<script setup>
defineProps({
  noCaps: {
    type: Boolean,
    default: true,
  },
})
</script>
