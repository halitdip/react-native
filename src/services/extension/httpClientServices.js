/* import axios from 'axios';

const baseUrl = 'https://101ikapitest.a101.com.tr';

const ApiService = {
    async api(type, url, model, bearer) {
        const response = await axios.request({
            method: type,
            url: `${baseUrl}/${url}`,
            data: type !== 'get' ? model : undefined,
            headers: {
                Authorization: bearer == 1 ? `Bearer testbearer` : null
            },
        }).catch(err => {
            console.log('httpclient err line 15', err)
        })

        return response;
    }
};


export default ApiService;
 */

import { base } from '../extension/axios'
import jwtDecode from 'jwt-decode';
import { setLogout, setToken } from '../../redux/userSlice';


const ApiService = {
    async api(type, baseUrl, url, model, bearer, dispatch, session) {

        return new Promise((resolve, reject) => {

            const axiosBase = this.getAxiosBase(baseUrl);
            if (!axiosBase || axiosBase == null) {
                reject(new Error("AxiosBase alınamadı."));
                return;
            }

            this.apiRequest(type, axiosBase, url, model, bearer, dispatch, session)
                .then(response => {
                    resolve(response);
                })
                .catch(err => {
                    if (err.response.status == 401) {
                        dispatch(setLogout())
                    }
                    reject(err);


                })
        });
    },

    getAxiosBase(baseUrl) {

        switch (baseUrl) {
            case 'Api':
                return base.Api.apiProd;
            default:
                return null;
        }
    },


    async refreshJwt(refreshtoken, token, dispatch) {
        try {
            let access = jwtDecode(token);
            let datetime = new Date();
            let expTime = new Date(access.exp * 1000);
            datetime.setSeconds(datetime.getSeconds() + 30);
            expTime.setMinutes(expTime.getMinutes());

            if (datetime >= expTime) {
                await base.Api.apiProd.post('/api/Account/GetAccessToken', {
                    "refreshToken": `${refreshtoken}`
                }).then(function (resp) {
                    dispatch(setToken(resp.data.result))
                })
                    .catch(function (err) {
                        console.log('httpclien line 83 : ' + err);
                    })
            }

        } catch (err) {
            console.log('httpclient line 88 :' + err);
        }
    },

    async apiRequest(type, axiosBase, url, model, bearer, dispatch, session) {

        const token = session?.accessToken;
        if (bearer === 1 && token) {
            await this.refreshJwt(session?.refreshToken, token, dispatch);
        }
        if (type == 'post')
            return axiosBase.post(url, model, bearer === 1 ? { headers: { 'Authorization': `Bearer ${token}` } } : null);
        else if (type == 'get')
            return axiosBase.get(url, bearer === 1 ? { headers: { 'Authorization': `Bearer ${token}` } } : null);
    },
};

export default ApiService;

