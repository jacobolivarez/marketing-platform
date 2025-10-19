<template>
  <q-input
    v-bind="$attrs"
    :model-value="modelValue"
    :dense="dense"
    :clearable="clearable"
    :outlined="outlined"
    @update:model-value="(val) => emit('update:model-value', val)"
  />
</template>

<script setup>
defineProps({
  modelValue: {
    type: [String, null, Array, Object, Number],
    required: true,
  },
  dense: {
    type: Boolean,
    default: true,
  },
  clearable: {
    type: Boolean,
    default: true,
  },
  outlined: {
    type: Boolean,
    default: true,
  },
})

const emit = defineEmits(['update:model-value'])
</script>
