<template>
  <q-footer class="bg-primary text-white q-pa-lg">
    <div class="row q-col-gutter-md justify-between items-start">
      <!-- Left: Company Info -->
      <div class="col-12 col-md-4">
        <div class="text-h6 q-mb-sm">{{ concept_painting.name }}</div>
        <p class="text-grey-5 q-mb-md">{{ concept_painting.description }}</p>
        <div class="row q-gutter-sm">
          <div>
            <q-img
              src="~assets/logos/concept-painting-logo.png"
              style="height: 100px; width: 170px"
              fit="contain"
            />
          </div>
        </div>
      </div>

      <!-- Center: Quick Links -->
      <div class="col-12 col-md-4">
        <div class="text-subtitle1 text-uppercase q-mb-sm">Quick Links</div>
        <q-list dense class="text-grey-5">
          <q-item clickable v-ripple to="/home">Home</q-item>
          <q-item clickable v-ripple to="/services">Services</q-item>
          <q-item clickable v-ripple to="/gallery">Gallery</q-item>
          <q-item clickable v-ripple to="/contact">Contact</q-item>
        </q-list>
      </div>

      <!-- Right: Contact Info -->
      <div class="col-12 col-md-4">
        <div class="text-subtitle1 text-uppercase q-mb-sm">Contact</div>
        <p class="text-grey-5 q-mb-xs">{{ concept_painting.address }}</p>
        <p class="text-grey-5 q-mb-xs">{{ concept_painting.phone }}</p>
        <p class="text-grey-5">{{ concept_painting.email }}</p>
      </div>
    </div>

    <q-separator dark spaced />
    <div class="text-center text-grey-6 text-caption q-mt-md">
      © {{ new Date().getFullYear() }} {{ concept_painting.name }}. All rights reserved.
    </div>
  </q-footer>
</template>

<script setup>
import { concept_painting } from 'src/helpers/branding'

// const { COMPANY_NAME } = process.env
</script>

<style scoped>
/* .q-footer {
  font-family: 'Roboto', sans-serif;
} */
</style>
