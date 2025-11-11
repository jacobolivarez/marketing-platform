<template>
  <q-page>
    <section id="what_we_offer" class="section q-pa-xl bg-white">
      <div class="text-center q-mb-xl">
        <h2 class="text-h5 text-primary text-weight-bold q-mb-sm">What We Offer</h2>
        <p class="text-subtitle1 text-grey-7">
          From homes to businesses, we deliver quality finishes designed to last.
        </p>
      </div>
      <div class="row q-col-gutter-lg justify-center">
        <div v-for="(service, index) in services" :key="index" class="col-12 col-sm-6 col-md-4">
          <q-card flat bordered class="text-center q-pa-md hoverable-card">
            <q-img
              :src="service.image"
              :alt="service.title"
              spinner-color="primary"
              class="q-mb-md"
            />
            <div class="text-subtitle1 text-weight-bold text-primary q-mb-xs">
              {{ service.title }}
            </div>
            <div class="text-body2 text-grey-7 q-mb-sm">
              {{ service.description }}
            </div>
          </q-card>
        </div>
      </div>
      <div class="text-center q-pt-xl">
        <h2 class="text-h5 text-weight-bold q-mb-sm">Ready to Start Your Next Project?</h2>
        <p class="text-subtitle1 q-mb-md">
          Contact us today to schedule your free estimate and experience the quality difference.
        </p>
        <AppButton
          color="primary"
          text-color="white"
          label="Request a Quote"
          to="/contact"
          size="lg"
          rounded
        />
      </div>
    </section>
  </q-page>
</template>

<script setup>
import AppButton from 'src/components/AppButton.vue'

const services = [
  {
    title: 'Residential Painting',
    image: 'https://picsum.photos/800/600?random=11',
    description:
      'Transform your home with our expert interior and exterior residential painting services. We focus on clean lines, durable finishes, and customer satisfaction.',
  },
  {
    title: 'Commercial Painting',
    image: 'https://picsum.photos/800/600?random=12',
    description:
      'Professional painting for offices, retail spaces, and large facilities. Our team minimizes downtime and delivers lasting, professional results.',
  },
  {
    title: 'Pressure Washing',
    image: 'https://picsum.photos/800/600?random=13',
    description:
      'Restore the appearance of your home or business with our power washing services. Perfect for siding, driveways, sidewalks, and more.',
  },
  {
    title: 'Venetian Plaster',
    image: 'https://picsum.photos/800/600?random=14',
    description:
      'Add elegance and texture to your walls with Venetian plaster finishes. Our artisans create rich, polished surfaces that elevate any space.',
  },
  {
    title: 'Concrete & Epoxy Flooring',
    image: 'https://picsum.photos/800/600?random=15',
    description:
      'Durable, beautiful flooring options for residential garages and commercial spaces. Our epoxy coatings protect and enhance your concrete surfaces.',
  },
]
</script>

<style scoped>
.hoverable-card {
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}
.hoverable-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}
.brightness-80::before {
  content: '';
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  inset: 0;
}
.section {
  min-height: calc(100vh - 110px);
  position: relative;
}
</style>
