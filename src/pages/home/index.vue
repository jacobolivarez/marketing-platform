<template>
  <q-page>
    <section id="landing_section" class="section">
      <q-img src="~assets/images/house.jpg" fit="fill" class="section-image">
        <div class="absolute-full flex flex-center column text-center text-white">
          <h1 class="text-h3 text-weight-bold">Concept Painting and Specialties</h1>
          <p class="text-subtitle1 q-mt-sm">
            Refresh your home or business with quality you can trust.
          </p>
          <AppButton
            color="primary"
            label="Get a Free Estimate"
            class="q-mt-md"
            to="/contact"
            size="lg"
          />
          <h1 class="text-h3 text-weight-bold">{{ concept_painting.phone }}</h1>
        </div>
      </q-img>
    </section>
    <section id="about_us" class="section q-pa-xl">
      <div class="row items-center q-col-gutter-xl">
        <div class="col-12 col-md-6">
          <q-img
            src="~assets/images/house.jpg"
            alt="Our Team at Work"
            class="rounded-borders shadow-2"
          />
        </div>
        <div class="col-12 col-md-6">
          <h2 class="text-h4 text-weight-bold q-mb-sm">About Us</h2>
          <p class="text-subtitle1 text-grey-7 q-mb-md">
            At <strong>Concept Painting</strong>, we specialize in transforming spaces with
            precision, professionalism, and pride. Whether it’s your home, office, or commercial
            property, our team delivers exceptional painting and plaster finishes that stand the
            test of time.
          </p>
          <p class="text-body1 text-grey-7 q-mb-lg">
            With years of experience in residential and commercial projects, we’re committed to
            providing reliable service, clear communication, and beautiful results — every single
            time. From prep work to the final coat, your satisfaction is our priority.
          </p>
          <p class="text-body1 text-grey-7 q-mb-lg">
            With years of experience in residential and commercial projects, we’re committed to
            providing reliable service, clear communication, and beautiful results — every single
            time. From prep work to the final coat, your satisfaction is our priority.
          </p>
          <AppButton color="primary" label="Get a Free Estimate" to="/contact" size="lg" />
        </div>
      </div>
    </section>
    <section id="why_choose_us" class="section q-pt-sm bg-grey-1">
      <div class="text-center q-mb-lg">
        <h2 class="text-h4 text-weight-bold">Why Choose Us</h2>
        <p class="text-subtitle1 text-grey-7 q-mt-sm">
          Trusted by homeowners and businesses for quality, reliability, and attention to detail.
        </p>
      </div>
      <div class="row q-col-gutter-lg justify-center q-pa-xl">
        <div v-for="(feature, index) in features" :key="index" class="col-12 col-sm-6 col-md-4">
          <q-card flat bordered class="q-pa-lg text-center">
            <q-icon :name="feature.icon" size="48px" color="primary" class="q-mb-md" />
            <div class="text-h6 text-weight-medium">{{ feature.title }}</div>
            <p class="text-body2 text-grey-7 q-mt-sm">
              {{ feature.description }}
            </p>
          </q-card>
        </div>
      </div>
    </section>
    <section id="recent_projects" class="section q-pt-sm bg-white">
      <div class="text-center q-mb-lg">
        <h2 class="text-h4 text-primary text-weight-bold">Recent Work</h2>
        <p class="text-subtitle1 text-grey-7">
          A glimpse of our latest residential and commercial painting projects.
        </p>
      </div>
      <div class="row q-col-gutter-lg q-pa-lg">
        <div v-for="(project, index) in projects" :key="index" class="col-12 col-sm-6 col-md-4">
          <q-card flat bordered class="q-hoverable">
            <q-img src="~assets/images/house.jpg" :alt="project.caption" spinner-color="primary" />
            <q-card-section>
              <div class="text-subtitle1 text-weight-medium">{{ project.caption }}</div>
              <!-- <div class="text-grey-7 text-body2">{{ project.description }}</div> -->
            </q-card-section>
          </q-card>
        </div>
      </div>
    </section>
    <section class="section q-pt-sm bg-grey-1">
      <div class="text-center q-mb-lg">
        <h2 class="text-h4 text-weight-bold">Areas We Serve</h2>
        <p class="text-subtitle1 text-grey-7 q-mt-sm">
          Proudly serving Lubbock, Wolfforth, Shallowater, and surrounding West Texas communities.
        </p>
      </div>
      <div class="q-mt-xl">
        <div class="q-pa-md flex flex-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d220000!2d-101.855166!3d33.577863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1690400000000!5m2!1sen!2sus"
            width="100%"
            height="400"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup>
import { concept_painting } from 'src/helpers/branding'
import AppButton from 'src/components/AppButton'

const features = [
  {
    icon: 'format_paint',
    title: 'Expert Craftsmanship',
    description:
      'Our experienced team delivers smooth finishes and lasting results for every project.',
  },
  {
    icon: 'home',
    title: 'Residential & Commercial',
    description:
      'From homes to offices, we provide professional painting and plastering for any space.',
  },
  {
    icon: 'timer',
    title: 'On-Time & Reliable',
    description: 'We respect your time and property — completing each job efficiently and cleanly.',
  },
  {
    icon: 'verified',
    title: 'Quality Guaranteed',
    description: 'We use premium paints and materials to ensure vibrant, long-lasting results.',
  },
  {
    icon: 'handshake',
    title: 'Customer-Focused Service',
    description: 'We listen, plan, and communicate clearly from estimate to final walk-through.',
  },
  {
    icon: 'eco',
    title: 'Eco-Friendly Options',
    description: 'Low-VOC paints available to keep your home and environment safe and healthy.',
  },
]

const projects = [
  {
    image: 'https://source.unsplash.com/800x600/?house,painting',
    caption: 'Residential Exterior Repaint',
    description: 'A full exterior refresh with premium weather-resistant paint.',
  },
  {
    image: 'https://source.unsplash.com/800x600/?interior,painting',
    caption: 'Living Room Interior',
    description: 'Brightened and modernized with neutral tones for a cozy atmosphere.',
  },
  {
    image: 'https://source.unsplash.com/800x600/?office,painting',
    caption: 'Commercial Office Renovation',
    description: 'Enhanced workspace aesthetics with professional-grade coatings.',
  },
  {
    image: 'https://source.unsplash.com/800x600/?bedroom,paint',
    caption: 'Bedroom Accent Wall',
    description: 'A bold accent wall adds warmth and personality to this home.',
  },
  {
    image: 'https://source.unsplash.com/800x600/?building,paint',
    caption: 'Retail Storefront',
    description: 'Refreshed exterior signage and trim for improved curb appeal.',
  },
  {
    image: 'https://source.unsplash.com/800x600/?kitchen,paint',
    caption: 'Kitchen Cabinet Refinishing',
    description: 'High-durability finish giving old cabinets a like-new look.',
  },
]
</script>

<style scoped lang="scss">
.section {
  height: calc(100vh - 110px);
  position: relative;
}
.section-image {
  height: calc(100vh - 120px);
}
</style>
