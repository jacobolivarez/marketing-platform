<template>
  <q-page>
    <section id="who_we_are" class="section q-pa-xl bg-white">
      <div class="row items-center q-col-gutter-lg">
        <div class="col-12 col-md-6">
          <q-img
            src="https://picsum.photos/800/600?random=2"
            alt="Professional painter"
            class="rounded-borders shadow-2"
          />
        </div>
        <div class="col-12 col-md-6">
          <h2 class="text-h5 text-primary text-weight-bold q-mb-sm">Who We Are</h2>
          <p class="text-body1 text-grey-8 q-mb-md">
            We’re a locally owned and operated painting company proudly serving the West Texas area.
            With years of experience in both residential and commercial painting, our team delivers
            high-quality finishes, reliable service, and attention to detail that stands out.
          </p>
          <p class="text-body1 text-grey-8">
            Whether you're refreshing your home or enhancing your business space, we use only
            premium paints and professional techniques to ensure lasting results. Your satisfaction
            is our top priority.
          </p>
        </div>
      </div>
    </section>
    <section id="our_mission" class="section q-pa-xl bg-grey-1">
      <div class="row items-center q-col-gutter-lg">
        <div class="col-12 col-md-6">
          <h2 class="text-h5 text-primary text-weight-bold q-mb-sm">Our Mission</h2>
          <p class="text-body1 text-grey-8 q-mb-md">
            Our mission is to bring beauty, protection, and value to every project we complete. We
            believe in honest communication, clean workspaces, and craftsmanship that speaks for
            itself. From prep to finish, we go above and beyond to deliver results that make our
            customers proud of their property.
          </p>
          <p class="text-body1 text-grey-8">
            Whether you're refreshing your home or enhancing your business space, we use only
            premium paints and professional techniques to ensure lasting results. Your satisfaction
            is our top priority.
          </p>
        </div>
        <div class="col-12 col-md-6">
          <q-img
            src="https://picsum.photos/800/600?random=2"
            alt="Professional painter"
            class="rounded-borders shadow-2"
          />
        </div>
      </div>
    </section>
    <section id="why_choose_us" class="section q-pa-xl bg-white">
      <div class="text-center q-mb-lg">
        <h2 class="text-h5 text-primary text-weight-bold">Why Choose Us</h2>
        <p class="text-subtitle1 text-grey-7">
          Here’s what sets us apart from other painting contractors.
        </p>
      </div>
      <div class="row q-col-gutter-lg q-py-md">
        <div v-for="(item, index) in highlights" :key="index" class="col-12 col-sm-6 col-md-3">
          <q-card flat bordered class="text-center q-pa-md hoverable-card">
            <q-icon :name="item.icon" size="48px" color="primary" class="q-mb-sm" />
            <div class="text-subtitle1 text-weight-bold q-mb-xs">
              {{ item.title }}
            </div>
            <div class="text-body2 text-grey-7">{{ item.text }}</div>
          </q-card>
        </div>
      </div>
      <div class="text-center q-mt-xl">
        <h2 class="text-h5 text-weight-bold q-mb-sm">Ready to Transform Your Space?</h2>
        <p class="text-subtitle1 q-mb-md">
          Contact us today for a free estimate and see the difference our painters can make.
        </p>
        <q-btn
          color="primary"
          text-color="white"
          label="Get a Free Estimate"
          to="/contact"
          size="lg"
          rounded
        />
      </div>
    </section>
  </q-page>
</template>

<script setup>
const highlights = [
  {
    icon: 'brush',
    title: 'Expert Craftsmanship',
    text: 'Our painters are trained professionals who take pride in every detail.',
  },
  {
    icon: 'schedule',
    title: 'On-Time Completion',
    text: 'We respect your schedule and complete every project as promised.',
  },
  {
    icon: 'workspace_premium',
    title: 'Quality Materials',
    text: 'We use premium paints and coatings designed for durability and beauty.',
  },
  {
    icon: 'favorite',
    title: 'Customer Satisfaction',
    text: 'We’re committed to earning your trust through reliable and honest service.',
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
  height: calc(100vh - 110px);
  position: relative;
}
.section-image {
  height: calc(100vh - 120px);
}
</style>
