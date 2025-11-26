<template>
  <q-toolbar style="height: 120px">
    <slot name="logo">
      <div>
        <q-img
          src="~assets/logos/concept-painting-logo.png"
          style="height: 90px; width: 150px"
          fit="contain"
        />
      </div>
    </slot>
    <q-toolbar-title v-if="$q.screen.gt.xs" class="col text-center">
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
    </q-toolbar-title>
    <slot name="social-links">
      <div v-if="$q.screen.gt.xs">
        <AppButton
          v-for="icon in icons"
          flat
          round
          color="white"
          :icon="icon.icon"
          :key="icon.title"
          @click="openLink(icon.to)"
        />
        <AppButton
          class="q-ml-sm"
          label="Call Now"
          color="white"
          text-color="black"
          icon="phone"
          @click="callNow"
        />
      </div>
      <div v-if="$q.screen.lt.sm" class="col text-right">
        <AppButton color="white" flat round icon="phone" dense @click="callNow" />
        <AppButton
          v-for="icon in icons"
          flat
          round
          color="white"
          :icon="icon.icon"
          :key="icon.title"
          @click="openLink(icon.to)"
        />
        <AppButton flat round dense icon="menu" @click="onDrawer" />
        <q-drawer side="right" v-model="state.drawerOpen" bordered class="bg-grey-8">
          <q-list bordered separator class="text-left">
            <q-item v-for="tab in mobileTabs" :key="tab.name" clickable v-ripple :to="tab.route">
              <q-item-section>{{ tab.label }}</q-item-section>
            </q-item>
          </q-list>
        </q-drawer>
      </div>
    </slot>
  </q-toolbar>
</template>

<script setup>
import { computed, reactive } from 'vue'
import { useQuasar } from 'quasar'
import { concept_painting } from 'src/helpers/branding'
import { useRouter } from 'vue-router'
import AppButton from 'src/components/AppButton.vue'

const router = useRouter()
const $q = useQuasar()

const props = defineProps({
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
      // {
      //   title: 'Instagram',
      //   to: concept_painting.instagram,
      //   icon: 'fab fa-instagram',
      // },
      {
        title: 'Facebook',
        to: concept_painting.facebook,
        icon: 'fab fa-facebook',
      },
      {
        title: 'Yelp',
        to: concept_painting.yelp,
        icon: 'fab fa-yelp',
      },
    ],
  },
})

const state = reactive({
  tab: 'home',
  drawerOpen: false,
})

const mobileTabs = computed(() => [...props.tabs])

function callNow() {
  window.open(`tel:${concept_painting.phone.replace(/\D+/g, '')}`, '_blank')
}

function openLink(url) {
  window.open(url, '_blank')
}

function goTo(route) {
  router.push(route)
}

function onDrawer() {
  state.drawerOpen = !state.drawerOpen
}
</script>
