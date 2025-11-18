<template>
  <q-footer class="bg-primary text-white q-pa-xl q-pa-md-md q-pa-sm-lg">
    <div class="row q-col-gutter-xl q-col-gutter-md-lg q-col-gutter-sm-md justify-between">
      <!-- Brand Column -->
      <div class="col-12 col-md-4 text-center text-md-left">
        <div class="text-h6 q-mb-sm">{{ concept_painting.name }}</div>
        <p class="text-grey-5 q-mb-md">{{ concept_painting.description }}</p>

        <q-img
          src="~assets/logos/concept-painting-logo.png"
          style="max-width: 180px; height: auto"
          class="q-mx-auto q-mx-md-none"
          fit="contain"
        />
      </div>

      <!-- Quick Links Column -->
      <div class="col-12 col-sm-6 col-md-4 text-center text-sm-left q-mt-lg q-mt-md-none">
        <div class="text-subtitle1 text-uppercase q-mb-sm">Quick Links</div>
        <q-list dense class="text-grey-5">
          <q-item clickable v-ripple to="/home"><q-item-section>Home</q-item-section></q-item>
          <q-item clickable v-ripple to="/services"
            ><q-item-section>Services</q-item-section></q-item
          >
          <q-item clickable v-ripple to="/gallery"><q-item-section>Gallery</q-item-section></q-item>
          <q-item clickable v-ripple to="/contact"><q-item-section>Contact</q-item-section></q-item>
        </q-list>
      </div>

      <!-- Contact Column -->
      <div class="col-12 col-sm-6 col-md-4 text-center text-sm-left q-mt-lg q-mt-md-none">
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
</script>
