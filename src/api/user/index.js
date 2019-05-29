import request from './../request';
const oauthBaseUrl = 'http://192.168.10.79:9200/oauth-server/';

export function UserLogin (data) {
    return request({
        url: oauthBaseUrl + 'system_user/login/anon',
        method: 'POST',
        data
    });
}