const routes = [{
    path: '/',
    redirect: 'invoices',
    meta: {
      auth: true
    },
    component: () => import('layouts/MainLayout.vue'),
    children: [{
        path: 'invoices',
        component: () => import('pages/Invoices.vue')
      },
      {
        path: 'invoices',
        name: 'Invoices',
        meta: {
          auth: true
        },
        component: () => import('pages/Invoices.vue'),
      },
      {
        path: 'templates',
        name: 'Templates',
        meta: {
          auth: true
        },
        component: () => import('pages/Index.vue'),
      },
      {
        path: 'details',
        name: 'Personal Details',
        meta: {
          auth: true
        },
        component: () => import('pages/Index.vue'),
      }

    ]
  },
  {
    path: '/auth',
    component: () => import('layouts/Public.vue'),
    children: [{
        path: 'login',
        name: 'Login',
        meta: {
          guest: true
        },
        component: () => import('pages/Login.vue')
      },

      {
        path: 'register',
        name: 'Register',
        meta: {
          guest: true
        },
        component: () => import('pages/Register.vue')
      },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]
export default routes
