const routes = [{
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{
        path: '',
        component: () => import('pages/Index.vue')
      },
      {
        path: 'auth',
        component: () => import('pages/Index.vue'),
        children: [{
            path: '/login',
            name: 'Login',
            component: () => import('pages/Index.vue')
          },

          {
            path: '/register',
            name: 'Register',
            component: () => import('pages/Index.vue')
          },
        ]
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

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
