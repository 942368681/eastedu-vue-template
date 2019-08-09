import Page1 from '../pages/page1';

export const routes = [
    {
        path: '/',
        name: 'page1',
        component: Page1
    },
    {
        path: '/page2',
        name: 'page2',
        component: () => import(/* webpackChunkName: "page2" */'../pages/page2.vue')
    }
];