<template>
  <div class="q-pa-md">
    <div class="text-h5 text-primary text-center q-mb-md">Project Gallery</div>

    <div class="row q-col-gutter-md justify-center">
      <div v-for="(photo, index) in photos" :key="index" class="col-12 col-sm-6 col-md-4 col-lg-3">
        <q-img
          :src="photo.src"
          :alt="photo.caption"
          ratio="4/3"
          class="rounded-borders cursor-pointer shadow-2"
          @click="openPreview(photo)"
        >
          <div
            class="absolute-bottom text-center bg-black bg-opacity-50 text-white text-caption q-pa-xs"
          >
            {{ photo.caption }}
          </div>
        </q-img>
      </div>
    </div>

    <!-- Fullscreen Preview Dialog -->
    <q-dialog v-model="showPreview" maximized transition-show="fade" transition-hide="fade">
      <q-card class="bg-black">
        <q-img :src="selectedPhoto.src" :alt="selectedPhoto.caption" class="fit" />
        <q-btn
          icon="close"
          flat
          round
          color="white"
          class="absolute-top-right q-ma-md"
          @click="showPreview = false"
        />
        <div
          class="absolute-bottom text-center text-white text-subtitle1 bg-black bg-opacity-50 q-pa-sm"
        >
          {{ selectedPhoto.caption }}
        </div>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showPreview = ref(false)
const selectedPhoto = ref({})

const openPreview = (photo) => {
  selectedPhoto.value = photo
  showPreview.value = true
}

// Stock sample images — free-to-use placeholders
const photos = ref([
  { src: 'https://source.unsplash.com/800x600/?house,painting', caption: 'Exterior Home Painting' },
  {
    src: 'https://source.unsplash.com/800x600/?interior,painting',
    caption: 'Interior Living Room',
  },
  { src: 'https://source.unsplash.com/800x600/?kitchen,paint', caption: 'Kitchen Renovation' },
  { src: 'https://source.unsplash.com/800x600/?office,interior', caption: 'Commercial Office' },
  { src: 'https://source.unsplash.com/800x600/?bedroom,decor', caption: 'Bedroom Accent Wall' },
  { src: 'https://source.unsplash.com/800x600/?hallway,paint', caption: 'Hallway Refresh' },
  { src: 'https://source.unsplash.com/800x600/?painting,contractor', caption: 'Office Painting' },
  { src: 'https://source.unsplash.com/800x600/?house,exterior', caption: 'Outdoor Trim Work' },
])
</script>

<style scoped>
.rounded-borders {
  border-radius: 12px;
}
.cursor-pointer {
  cursor: pointer;
}
</style>
