export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', component: './User/Login' },
      { path: '/user/register', component: './User/Register' },
      { path: '/user/register-result', component: './User/RegisterResult' },
    ],
  },

  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    authority: ['admin', 'user'],
    routes: [
      // 主页
      { path: '/', redirect: '/user/login' },
      {
        path: '/dashboard/analysis',
        name: '主页',
        icon: 'dashboard',
        component: './Dashboard/Analysis',

      },
      // 客户
      {
        path: '/form/basic-form',
        icon: 'form',
        name: '客户',
        component: './Forms/form',
      },
      { path: '/form/advanced-form', component: './Forms/BasicForm' },
      // 联系人
      {
        path: '/list/table-list',
        icon: 'table',
        name: '联系人',
        component: './List/TableList',
      },
      { path: '/list/basic-list', component: './List/BasicList' },
      {
        path: '/profile/basic',
        name: '潜在用户',
        icon: 'profile',
        component: './Profile/BasicProfile',
      },
      { path: '/profile/advanced', component: './Profile/AdvancedProfile' },
      {
        name: '业务机会',
        icon: 'check-circle-o',
        path: '/result/success',
        component: './Result/Success',
        },
          // 业务机会
          { path: '/result/fail', component: './Result/Error' },
      {
        name: '任务',
        icon: 'warning',
        path: '/exception',
        routes: [
          // 任务
          {
            path: '/exception/403',
            name: 'not-permission',
            component: './Exception/403',
          },
          {
            path: '/exception/404',
            name: 'not-find',
            component: './Exception/404',
          },
          {
            path: '/exception/500',
            name: 'server-error',
            component: './Exception/500',
          },
          {
            path: '/exception/trigger',
            name: 'trigger',
            hideInMenu: true,
            component: './Exception/TriggerException',
          },
        ],
      },
      {
        //部门
        name: '部门',
        icon: 'user',
        path: '/account',
        routes: [
          {
            path: '/account/center',
            name: 'center',
            component: './Account/Center/Center',
            routes: [
              {
                path: '/account/center',
                redirect: '/account/center/articles',
              },
              {
                path: '/account/center/articles',
                component: './Account/Center/Articles',
              },
              {
                path: '/account/center/applications',
                component: './Account/Center/Applications',
              },
              {
                path: '/account/center/projects',
                component: './Account/Center/Projects',
              },
            ],
          },
          {
            path: '/account/settings',
            name: 'settings',
            component: './Account/Settings/Info',
            routes: [
              {
                path: '/account/settings',
                redirect: '/account/settings/base',
              },
              {
                path: '/account/settings/base',
                component: './Account/Settings/BaseView',
              },
              {
                path: '/account/settings/security',
                component: './Account/Settings/SecurityView',
              },
              {
                path: '/account/settings/binding',
                component: './Account/Settings/BindingView',
              },
              {
                path: '/account/settings/notification',
                component: './Account/Settings/NotificationView',
              },
            ],
          },
        ],
      },
      {
        name: '竞争对手',
        icon: 'warning',
        path: '/exception',
      },
      {
        component: '404',
      },
    ],
  },
];
