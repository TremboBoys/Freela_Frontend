import { createRouter, createWebHistory } from 'vue-router';
import { PersonalInformation, PasswordConfig, EmailConfig, SubscriptionPlan, Security, VerificationCode, ProjectRegistration, DescriptionProject, TypeProject, SizeProject, CompleteProject, MethodsPayment, AddressUser, PaymentConfirm, QRCode } from '@/components';
import { useAuthStore } from '@/stores/auth/auth';
import { useSignUpStore } from '@/stores/auth/signUp';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/global/HomeView.vue')
    },
    {
      path: '/',
      component: () => import('@/layouts/default/DefaultLayout.vue'),
      children: [
        {
          path: 'dashboard',
          name: 'dashboard',
          component: () => import('@/views/global/DashboardView.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: 'profile',
          name: 'profile',
          component: () => import('@/views/user/ProfileUserView.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: 'configurations/',
          name: 'configurations',
          component: () => import('@/views/user/ConfigurationUserView.vue'),
          meta: { requiresAuth: true },
          children: [
            {
              path: '',
              name: 'personalInformation',
              component: PersonalInformation
            },
            {
              path: 'password',
              name: 'password',
              component: PasswordConfig
            },
            {
              path: 'email',
              name: 'email',
              component: EmailConfig
            },
            {
              path: 'subscription',
              name: 'subscription',
              component: SubscriptionPlan
            },
            {
              path: 'security',
              name: 'security',
              component: Security
            }
          ]
        },

        {
          path: 'confirmation-email',
          name: 'ConfirmationEmail',
          component: () => import('@/views/user/ConfirmationEmailUserView.vue')
        },

        {
          path: 'confirmation-password',
          name: 'ConfirmationPassword',
          component: () => import('@/views/user/ConfirmationPasswordUserView.vue')
        },
        {
          path: 'projects',
          name: 'projects',
          component: () => import('@/views/project/ProjectsView.vue')
        },
        {
          path: 'projects/:project',
          name: 'project',
          component: () => import('@/views/project/DetailProjectView.vue')
        },
        {
          path: 'register-project/',
          name: 'registerProject',
          component: () => import('@/views/project/RegisterProjectView.vue'),
          meta: { requiresAuth: true },
          children: [
            {
              path: '',
              component: ProjectRegistration
            },
            {
              path: 'description',
              name: 'description',
              component: DescriptionProject
            },
            {
              path: 'types',
              name: 'types',
              component: TypeProject
            },
            {
              path: 'size',
              name: 'size',
              component: SizeProject
            },
            {
              path: 'complete/:id',
              name: 'complete',
              component: CompleteProject
            }
          ]
        },
        {
          path: 'subscription-plan',
          name: 'subscriptionPlan',
          component: () => import('@/views/plan/SubscriptionPlanView.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: 'proposal-registration/:project',
          name: 'proposalRegistration',
          component: () => import('@/views/project/ProposalRegistrationProjectView.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: 'chat',
          name: 'chat',
          component: () => import('@/views/chat/ChatView.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: 'payment/:project',
          name: 'payment',
          component: () => import('@/views/payment/PaymentView.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: 'freelancers',
          name: 'freelancers',
          component: () => import('@/views/freelancer/FreelancerView.vue')
        },
        {
          path: 'contact',
          name: 'contact',
          component: () => import('@/views/help/ContactView.vue')
        },
        {
          path: 'contact/about',
          name: 'about',
          component: () => import('@/views/help/AboutContactView.vue')
        },
        {
          path: 'contact/help',
          name: 'help',
          component: () => import('@/views/help/HelpContactView.vue')
        },
        {
          path: 'contact/privacy-policy',
          name: 'privacyPolicy',
          component: () => import('@/views/help/PrivacyPolicyContactView.vue')
        },
        {
          path: 'finished-project',
          name: 'finishedProject',
          component: () => import('@/views/project/FinishedProjectView.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: 'make-payment',
          name: 'makePayment',
          component: () => import('@/views/payment/PaymentView.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: 'received-proposals',
          name: 'receivedProposals',
          component: () => import('@/views/proposal/ReceivedProposalView.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: 'report',
          name: 'report',
          component: () => import('@/views/report/ReportView.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: 'finances',
          name: 'finances',
          component: () => import('@/views/finances/FinancesView.vue'),
          meta: { requiresAuth: true }
         },
         {
          path: 'methods-payment/',
          name: 'methodsPayment',
          component: () => import('@/views/payment/MethodsPaymentView.vue'),
          children: [
            {
              path: '',
              component: MethodsPayment
            },
            {
              path: 'address',
              name: 'addressUser',
              component: AddressUser
            },
            {
              path: 'paymentConfirm',
              name: 'paymentConfirm',
              component: PaymentConfirm
            },
            {
              path: 'QRCode',
              name: 'QRCode',
              component: QRCode
            }
          ],
          meta: { requiresAuth: true }
        },
        {
          path: 'profile/:id',
          name: 'profile',
          component: () => import('@/views/user/ProfileUserView.vue'),
          meta: { requiresAuth: true }
        }
      ]
    }, 
    // {
    //   path: '/sign-up/',
    //   name: 'signUp',
    //   component: () => import('@/views/user/SignUpUserView.vue'),
    // },
    // {
    //   path: '/sign-in',
    //   name: 'signIn',
    //   component: () => import('@/views/user/SignInUserView.vue')
    // }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
})

router.beforeEach(async (to, from, next) => {
  const useAuth = useAuthStore();
  const useSignUp = useSignUpStore();
  
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (useAuth.state.isAuthenticatedPassage === null) {
      if (await useAuth.verifyAuth() === true) {
        next();
      }
      else {
        next('/');
      }
    } else if (useAuth.state.isAuthenticatedPassage === false) {
      useAuth.state.showLogin = true;
      next('/');
    } else if (useAuth.state.userExist === false) {
      useSignUp.state.registerUser = true;
      next('/');
    } else {
      next();
    }
  } else {
    next();
  }
});


export default router;
