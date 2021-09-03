const routes = [{
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{
        path: '',
        component: () => import('pages/Index.vue')
      },
      {
        path: 'invoices',
        name: 'Invoices',
        component: () => import('pages/Index.vue'),
      },
      {
        path: 'templates',
        name: 'Templates',
        component: () => import('pages/Index.vue'),
      },
      {
        path: 'details',
        name: 'Personal Details',
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
        component: () => import('pages/Login.vue')
      },

      {
        path: 'register',
        name: 'Register',
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
