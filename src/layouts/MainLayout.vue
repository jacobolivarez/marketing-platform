<template>
  <q-layout view="hHh lpR fff">
    <q-header elevated>
      <AppToolbar />
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer>
      <AppFooter />
    </q-footer>
  </q-layout>
</template>

<script setup>
import AppToolbar from 'src/components/AppToolbar.vue'
import AppFooter from 'src/components/AppFooter.vue'
</script>
