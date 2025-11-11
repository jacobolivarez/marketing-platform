<template>
  <q-toolbar style="height: 120px">
    <div class="row full-width items-center">
      <div class="col-auto">
        <slot name="logo">
          <div>
            <q-img
              src="~assets/logos/concept-painting-logo.png"
              style="height: 100px; width: 170px"
              fit="contain"
            />
          </div>
        </slot>
      </div>
      <div class="col text-center">
        <slot name="nav-links">
          <div class="nav-links">
            <q-tabs v-model="state.tab">
              <q-tab
                v-for="tab in tabs"
                :key="tab.name"
                :name="tab.name"
                :label="tab.label"
                @click="goTo(tab.route)"
              />
            </q-tabs>
          </div>
        </slot>
      </div>
      <div class="col-auto text-right">
        <slot name="social-links">
          <q-btn
            v-for="icon in icons"
            flat
            round
            color="white"
            :icon="icon.icon"
            :key="icon.title"
            @click="openLink(icon.to)"
          />
          <q-btn
            class="q-ml-sm"
            label="Call Now"
            color="white"
            text-color="black"
            icon="phone"
            @click="callNow"
          />
        </slot>
      </div>
    </div>
  </q-toolbar>
</template>

<script setup>
import { reactive } from 'vue'
// import { scroll } from 'quasar';
import { useRouter } from 'vue-router'

// const { getScrollTarget, setVerticalScrollPosition } = scroll

const router = useRouter()

defineProps({
  tabs: {
    type: Array,
    default: () => [
      {
        name: 'home',
        label: 'Home',
        route: '/home',
      },
      {
        name: 'about',
        label: 'About',
        route: '/about',
      },
      {
        name: 'services',
        label: 'Services',
        route: '/services',
      },
      // {
      //   name: 'venetian-plaster',
      //   label: 'Venetian Plaster',
      //   route: '/venetian-plaster',
      // },
      {
        name: 'gallery',
        label: 'Gallery',
        route: '/gallery',
      },
      {
        name: 'contact',
        label: 'Contact',
        route: '/contact',
      },
    ],
  },
  icons: {
    type: Array,
    default: () => [
      {
        title: 'Instagram',
        to: 'https://www.instagram.com',
        icon: 'fab fa-instagram',
      },
      {
        title: 'Facebook',
        to: 'https://www.facebook.com',
        icon: 'fab fa-facebook',
      },
      {
        title: 'Yelp',
        to: 'https://www.yelp.com',
        icon: 'fab fa-yelp',
      },
    ],
  },
})

const state = reactive({
  tab: 'home',
})

function callNow() {
  window.open('tel:5555555555', '_blank')
}

function openLink(url) {
  window.open(url, '_blank')
}

function goTo(route) {
  router.push(route)
}

// function scrollToElement(tab) {
//   const el = document.getElementById(tab.name)
//   const target = getScrollTarget(el)
//   const offset = el.offsetTop - 100
//   const duration = 800
//   setVerticalScrollPosition(target, offset, duration)
// }
</script>
