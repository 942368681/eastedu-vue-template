import ajaxRequest from './index';

const api = {
    getUserInfo: () => ajaxRequest({
        method: 'GET',
        url: 'users/sfl',
        data: {}
    }),
    getList: () => ajaxRequest({
        method: 'GET',
        url: 'api/list',
        data: {},
        useOwnUrl: true
    })
};

export default api;