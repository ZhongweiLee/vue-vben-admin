import type { AppRouteModule } from '/@/router/types';

import { getParentLayout, LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const systemLog: AppRouteModule = {
  path: '/system',
  name: 'System',
  component: LAYOUT,
  redirect: '/system',
  meta: {
    icon: 'carbon:user-role',
    title: t('routes.system'),
  },

  children: [
    {
      path: 'dict',
      name: 'Dict',
      component: () => import('/@/views/system/dict/DictDataList.vue'),
      meta: {
        title: t('routes.system.dictDataList'),
      },
    },
    {
      path: 'dept',
      name: 'Dept',
      component: () => import('/@/views/system/dept/DeptList.vue'),
      meta: {
        title: t('routes.system.dept'),
      },
    },
    {
      path: 'menu',
      name: 'Menu',
      component: () => import('/@/views/system/menu/MenuList.vue'),
      meta: {
        title: t('routes.system.menu'),
      },
    },
    {
      path: 'perm',
      name: 'Perm',
      component: () => import('/@/views/system/perm/PermList.vue'),
      meta: {
        title: t('routes.system.perm'),
      },
    },
    {
      path: 'post',
      name: 'Post',
      component: () => import('/@/views/system/post/PostList.vue'),
      meta: {
        title: t('routes.system.post'),
      },
    },
    {
      path: 'role',
      name: 'Role',
      component: () => import('/@/views/system/role/RoleList.vue'),
      meta: {
        title: t('routes.system.role'),
      },
    },
    {
      path: 'sysuser',
      name: 'Sysuser',
      component: () => import('/@/views/system/sysuser/SysUserList.vue'),
      meta: {
        title: t('routes.system.sysuser'),
      },
    },
    {
      path: 'sysuseredit',
      name: 'Sysuseredit',
      component: () => import('/@/views/system/sysuser/SysUserEdit.vue'),
      meta: {
        title: t('routes.system.sysuseredit'),
      },
    },
    {
      path: 'system/log',
      name: 'Log',
      component: getParentLayout('Log'),
      meta: {
        title: t('routes.system.log'),
      },
      children: [
        {
          path: 'opera',
          name: 'OperaLog',
          component: () => import('/@/views/system/log/OperaLog.vue'),
          meta: {
            title: t('routes.system.log.operLog'),
          },
        },
        {
          path: 'login',
          name: 'LoginLog',
          component: () => import('/@/views/system/log/LoginLog.vue'),
          meta: {
            title: t('routes.system.log.loginLog'),
          },
        },
      ],
    },
  ],
};

export default systemLog;
