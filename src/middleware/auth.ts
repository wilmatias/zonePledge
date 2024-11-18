import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';
import { useUserStore } from '@/store/user';
import { showFailToast } from 'vant';

export const authMiddleware = (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    const userStore = useUserStore();
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    if (requiresAuth && !userStore.isLogin) {
        showFailToast({ 
            message: 'Disconnect!, please login your account.',
            className: 'custom-toast',
        });
        console.log(from)
        next('/login');
    } else {
        next();
    }
};