import { createRouter, createWebHistory } from 'vue-router';
import { PersonalInformation, PasswordConfig, EmailConfig, SubscriptionPlan, Security, ProjectRegistration, DescriptionProject, TypeProject, SizeProject, CompleteProject } from '@/components';

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
          component: () => import('@/views/global/DashboardView.vue')
        },
        {
          path: 'profile',
          name: 'profile',
          component: () => import('@/views/user/ProfileUserView.vue')
        },
        {
          path: 'configurations/',
          name: 'configurations',
          component: () => import('@/views/user/ConfigurationUserView.vue'),
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
          path: '/register-project/',
          name: 'registerProject',
          component: () => import('@/views/project/RegisterProjectView.vue'),
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
              path: 'complete',
              name: 'complete',
              component: CompleteProject
            }
          ]
        },
        {
          path: 'subscription-plan',
          name: 'subscriptionPlan',
          component: () => import('@/views/plan/SubscriptionPlanView.vue')
        },
        {
          path: 'proposal-registration/:project',
          name: 'proposalRegistration',
          component: () => import('@/views/project/ProposalRegistrationProjectView.vue')
        },
        {
          path: 'chat',
          name: 'chat',
          component: () => import('@/views/chat/ChatView.vue')
        },
        {
          path: 'payment/:project',
          name: 'payment',
          component: () => import('@/views/payment/PaymentView.vue')
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
          path: 'report',
          name: 'report',
          component: () => import('@/views/report/ReportView.vue')
        }
      ]
    },
    
    {
      path: '/sign-up',
      name: 'signUp',
      component: () => import('@/views/user/SignUpUserView.vue')
    },
    {
      path: '/sign-in',
      name: 'signIn',
      component: () => import('@/views/user/SignInUserView.vue')
    }
  ]
})

export default router
