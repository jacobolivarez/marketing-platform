<template>
  <q-page>
    <section id="landing_section" class="section">
      <q-img src="~assets/images/home.jpg" fit="fill" class="section-image">
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
    <section id="about_us" class="section text-center q-pa-sm">
      <div class="row q-col-gutter-md">
        <div class="col-xs-12 col-sm-4">
          <q-img
            src="~assets/images/about_us.jpg"
            alt="Our Team at Work"
            class="rounded-borders shadow-2"
            fit="scale-down"
          />
        </div>
        <div class="col-xs-12 col-sm-8">
          <h2 class="text-h4 text-weight-bold text-center q-mb-sm">About Us</h2>
          <p class="text-body1 text-grey-7 q-mb-md">
            At <strong>Concept Painting and Specialties</strong>, we take pride in transforming
            homes and businesses with craftsmanship you can see and quality you can trust. Since
            1991, our family-owned company has served Lubbock and the surrounding areas, delivering
            professional painting and specialty finishes with care, precision, and decades of
            combined experience.
          </p>
          <p class="text-body1 text-grey-7 q-mb-lg">
            Whether you’re refreshing a single room or updating an entire commercial property, our
            team is dedicated to providing dependable service, clear communication, and results that
            last. From careful preparation to the final brushstroke, we focus on getting every
            detail right because your satisfaction is always our top priority.
          </p>
          <p class="text-body1 text-grey-7 q-mb-lg">
            With over 30 years of combined hands-on experience, we offer a full range of services,
            including residential and commercial painting, Venetian plaster, wood staining, epoxy
            flooring, and pressure washing. We also provide free estimates and complimentary color
            coordination to help bring your vision to life.
          </p>
          <p class="text-body1 text-grey-7 q-mb-lg">
            If you’re ready to give your space a fresh, renewed look, we’re here to help every step
            of the way. Let our commitment to craftsmanship and customer care show you why Lubbock
            has trusted us for more than four decades.
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
            <q-img :src="project.image" :alt="project.caption" spinner-color="primary" />
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
    image: require('src/assets/images/residential_exterior.jpg'),
    caption: 'Residential Exterior Repaint',
    description: 'A full exterior refresh with premium weather-resistant paint.',
  },
  {
    image: require('src/assets/images/living_room_interior.jpg'),
    caption: 'Living Room Interior',
    description: 'Brightened and modernized with neutral tones for a cozy atmosphere.',
  },
  {
    image: require('src/assets/images/commercial_exterior.jpg'),
    caption: 'Commercial Exterior Repaint',
    description: 'Enhanced workspace aesthetics with professional-grade coatings.',
  },
  {
    image: require('src/assets/images/venetian_plaster.jpg'),
    caption: 'Venetian Plaster',
    description: 'A bold accent wall adds warmth and personality to this home.',
  },
  {
    image: require('src/assets/images/epoxy_flooring.jpg'),
    caption: 'Expoxy Flooring',
    description: 'Refreshed exterior signage and trim for improved curb appeal.',
  },
  {
    image: require('src/assets/images/wood_staining.jpg'),
    caption: 'Wood Staining',
    description: 'High-durability finish giving old cabinets a like-new look.',
  },
]
</script>

<style scoped lang="scss">
.section {
  min-height: calc(100vh - 110px);
  position: relative;
}
.section-image {
  height: calc(100vh - 120px);
}
</style>
