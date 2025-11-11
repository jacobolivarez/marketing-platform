<template>
  <q-page class="q-pa-md q-mt-lg">
    <section class="section text-center">
      <div>
        <h1 class="text-h4 text-weight-bold text-primary q-mb-sm">Get in Touch</h1>
        <p class="text-grey-7 text-body1">
          We’d love to hear from you! Whether you’re looking for a free estimate, have a question
          about our services, or want to discuss your next project — we’re here to help.
        </p>
      </div>
      <!-- Contact Info + Form -->
      <div class="row justify-center q-col-gutter-xl q-mb-xl">
        <!-- Contact Info -->
        <div class="col-12 col-md-5">
          <q-card class="q-pa-lg">
            <q-card-section>
              <div class="text-h6 text-primary q-mb-md">Contact Information</div>
              <div class="q-mb-md">
                <q-icon name="location_on" size="sm" class="q-mr-sm text-primary" />
                <span>Lubbock, TX and surrounding areas</span>
              </div>
              <div class="q-mb-md">
                <q-icon name="phone" size="sm" class="q-mr-sm text-primary" />
                <a href="tel:5555555555" class="text-grey-8"> (555) 555-5555 </a>
              </div>
              <div class="q-mb-md">
                <q-icon name="email" size="sm" class="q-mr-sm text-primary" />
                <a href="mailto:info@conceptpainting.com" class="text-grey-8">
                  info@conceptpainting.com
                </a>
              </div>
              <div>
                <q-icon name="schedule" size="sm" class="q-mr-sm text-primary" />
                <span>Mon–Fri: 8am – 6pm</span>
              </div>
              <div class="text-center q-mb-md text-h6 text-primary">Our Service Area</div>
              <iframe
                src="https://www.google.com/maps?q=Lubbock,TX&z=9&output=embed"
                width="100%"
                height="200"
                style="border: 0; border-radius: 8px"
                allowfullscreen=""
                loading="lazy"
              />
            </q-card-section>
          </q-card>
        </div>
        <!-- Contact Form -->
        <div class="col-12 col-md-6">
          <AppContactForm />
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup>
import AppContactForm from 'src/components/AppContactForm.vue'
</script>

<style scoped>
a {
  text-decoration: none;
}
.section {
  height: calc(100vh - 110px);
  position: relative;
}
</style>
