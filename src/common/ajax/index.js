import axios from 'axios';
import baseUrl from '../config/index';

const ajaxRequest = options => {
    return new Promise((resolve, reject) => {
        const defaultOptions = {};
        const newOptions = {
            ...defaultOptions,
            ...options
        };

        newOptions.headers = {
            'content-Type': 'application/json;charset=UTF-8',
            ...newOptions.headers
        };
        
        if (!options.useOwnUrl) {
            console.log(ENV_MODE);
            switch (ENV_MODE) {
                case 'dev':
                    newOptions.url = baseUrl.dev + newOptions.url;
                    break;
                case 'test':
                    newOptions.url = baseUrl.test + newOptions.url;
                    break;
                case 'prod':
                    newOptions.url = baseUrl.prod + newOptions.url;
                    break;
                default:
                    break;
            }
        }

        axios({
            method: newOptions.method,
            url: newOptions.url,
            data: newOptions.data,
            headers: newOptions.headers
        }).then(res => {
            if (res.status == 200) {
                resolve(res.data);
            } else {
                reject(res);
            }
        }).catch(err => {
            reject(err);
        });
    });
};

export default ajaxRequest;