import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { authMiddleware } from '@/middleware/auth';

import Home from '@/views/Home/index.vue';
import Market from '@/views/Market/index.vue';
import Trade from '@/views/Trade/index.vue';
import Asset from '@/views/Assets/index.vue';

import Contract from '@/views/Contract/index.vue';
import Certification from '@/views/Certification/index.vue';
import BankCard from '@/views/Bank/index.vue';
import Address from '@/views/Address/index.vue';
import AssetTransaction from '@/views/AssetTransaction/index.vue';
import About from '@/views/About/index.vue';
import Share from '@/views/Share/index.vue';
import UserInfo from '@/views/UserInfo/index.vue';
import Recharge from '@/views/Recharge/index.vue';
import Withdraw from '@/views/Withdraw/index.vue';
import Exchange from '@/views/Exchange/index.vue';
import LockMining from '@/views/LockMining/index.vue';
import Login from '@/views/Auth/Login/index.vue';


const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        components: {
            default: Home,
        },
        meta: { requiresAuth: true },
    },
    {
        path: '/market',
        name: 'market',
        components: {
            default: Market,
        },
        meta: { requiresAuth: false },
    },
    {
        path: '/trade',
        name: 'trade',
        components: {
            default: Trade,
        },
        meta: { requiresAuth: false },
    },
    {
        path: '/asset',
        name: 'asset',
        components: {
            default: Asset,
        },
        meta: { requiresAuth: false },
    },
    {
        path: '/contract-position/:type',
        name: 'contract-position',
        components: {
            default: Contract,
        },
        meta: { requiresAuth: false },
    },
    {
        path: '/certification/:type',
        name: 'certification',
        components: {
            default: Certification,
        },
        meta: { requiresAuth: false },
    },
    {
        path: '/bank-card',
        name: 'bank-card',
        components: {
            default: BankCard,
        },
        meta: { requiresAuth: false },
    },
    {
        path: '/wallet-address',
        name: 'wallet-address',
        components: {
            default: Address,
        },
        meta: { requiresAuth: false },
    },
    {
        path: '/asset-transaction/:type',
        name: 'asset-transaction',
        components: {
            default: AssetTransaction,
        },
        meta: { requiresAuth: false },
    },
    {
        path: '/about',
        name: 'about',
        components: {
            default: About,
        },
        meta: { requiresAuth: false },
    },
    {
        path: '/share',
        name: 'share',
        components: {
            default: Share,
        },
        meta: { requiresAuth: false },
    },
    {
        path: '/user-info',
        name: 'user-info',
        components: {
            default: UserInfo,
        },
        meta: { requiresAuth: false },
    },
    {
        path: '/deposit',
        name: 'deposit',
        components: {
            default: Recharge,
        },
        meta: { requiresAuth: false },
    },
    {
        path: '/withdraw',
        name: 'withdraw',
        components: {
            default: Withdraw,
        },
        meta: { requiresAuth: false },
    },
    {
        path: '/exchange',
        name: 'exchange',
        components: {
            default: Exchange,
        },
        meta: { requiresAuth: false },
    },
    {
        path: '/lock-mining',
        name: 'lock-mining',
        components: {
            default: LockMining,
        },
        meta: { requiresAuth: false },
    },
    {
        path: '/login',
        name: 'login',
        components: {
            default: Login,
        },
        meta: { requiresAuth: false },
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior() {
        return { 
            top: 0,
            behavior: 'smooth',
        };
    },
});

router.beforeEach(authMiddleware);

export default router;
