<template>
  <q-page class="gallery-page bg-grey-1">
    <section class="q-pa-md q-pa-lg-xl">
      <div class="text-center q-mb-xl">
        <h2 class="text-h4 text-primary text-weight-bold q-mb-sm">📸 Our Craftsmanship Gallery</h2>
        <p class="text-subtitle1 text-grey-7">
          A glimpse of the quality and care we bring to every project. Click on any image to expand
          it!
        </p>
      </div>
      <div class="row q-col-gutter-md justify-center">
        <div
          v-for="(photo, index) in photos"
          :key="index"
          class="col-12 col-sm-6 col-md-4 col-lg-3 flex flex-center"
        >
          <q-img
            :src="photo"
            :ratio="4 / 3"
            spinner-color="primary"
            class="full-width cursor-pointer shadow-3 rounded-borders hover-scale"
            @click="openImage(index)"
          >
            <div class="absolute-bottom-right text-subtitle2 q-pa-sm">View Project</div>
          </q-img>
        </div>
      </div>
    </section>

    <q-dialog
      v-model="showDialog"
      persistent
      maximized
      transition-show="fade"
      transition-hide="fade"
    >
      <q-card flat class="bg-black flex flex-center relative-position">
        <!-- Fullscreen Image -->
        <q-img
          :src="activeImage"
          class="full-width full-height"
          fit="contain"
          spinner-color="white"
        />
        <!-- Close Button -->
        <q-btn
          flat
          dense
          round
          color="white"
          icon="close"
          class="absolute-top-right q-ma-md z-index-10"
          @click="showDialog = false"
        />
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const showDialog = ref(false)
const activeIndex = ref(0) // Now tracks the index of the photo
const activeImage = ref(null)

// Sample photo data
const photos = [
  'https://picsum.photos/800/600?random=101',
  'https://picsum.photos/800/600?random=102',
  'https://picsum.photos/800/600?random=103',
  'https://picsum.photos/800/600?random=104',
  'https://picsum.photos/800/600?random=105',
  'https://picsum.photos/800/600?random=106',
  'https://picsum.photos/800/600?random=107',
  'https://picsum.photos/800/600?random=108',
  'https://picsum.photos/800/600?random=109',
  'https://picsum.photos/800/600?random=110',
  'https://picsum.photos/800/600?random=111',
  'https://picsum.photos/800/600?random=112',
]

const openImage = (index) => {
  activeIndex.value = index
  activeImage.value = photos[index]
  showDialog.value = true
}

// const prevImage = () => {
//   if (activeIndex.value > 0) {
//     activeIndex.value--
//     activeImage.value = photos[activeIndex.value]
//   }
// }

// const nextImage = () => {
//   if (activeIndex.value < photos.length - 1) {
//     activeIndex.value++
//     activeImage.value = photos[activeIndex.value]
//   }
// }
</script>

<style scoped>
/*
  Styles for the image tiles.
  Uses a subtle hover effect common in business galleries.
*/
.hover-scale {
  transition:
    transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94),
    box-shadow 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  /* Ensure images in the grid have space below/above */
  margin-bottom: 0;
}

.hover-scale:hover {
  transform: scale(1.05); /* Slightly bigger scale on hover */
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2); /* Lifted shadow */
  z-index: 10; /* Bring it above neighbors while hovered */
}

/* Style for the "View Project" overlay text on the tiles */
.q-img > div {
  background: rgba(0, 0, 0, 0.5);
  padding: 6px 10px;
}

/* Ensure the navigation buttons are prominent in the lightbox */
.navigation-btn {
  opacity: 0.7;
  transition: opacity 0.3s;
}
.navigation-btn:hover {
  opacity: 1;
  background-color: rgba(255, 255, 255, 0.1);
}

/* Remove the specific height restriction that was in the original code */
.gallery-page {
  min-height: 100vh; /* Ensure it takes up at least full viewport height */
}
</style>
