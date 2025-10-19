const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'home', component: () => import('pages/home/index.vue') },
      { path: 'about', component: () => import('pages/about/index.vue') },
      { path: 'contact', component: () => import('pages/contact/index.vue') },
      { path: 'gallery', component: () => import('pages/gallery/index.vue') },
      { path: 'services', component: () => import('pages/services/index.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
