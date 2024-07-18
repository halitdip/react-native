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
import AsyncStorage from '@react-native-async-storage/async-storage';

const ApiService = {
    async api( type, baseUrl, url, model, bearer) {

        return new Promise((resolve, reject) => {

            const axiosBase = this.getAxiosBase(baseUrl);
            if (!axiosBase || axiosBase == null) {
                reject(new Error("AxiosBase alınamadı."));
                return;
            }

            this.apiRequest( type, axiosBase, url, model, bearer)
                .then(response => {
                    resolve(response);
                })
                .catch(err => {

                    console.log('httpclien line 45 err : ', err.response.status)

                    if (err.response.status == 401) {

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


    async refreshJwt(token) {
        try {
            let access = jwtDecode(token);
            let datetime = new Date();
            let expTime = new Date(access.exp * 1000);
            datetime.setSeconds(datetime.getSeconds() + 30);
            expTime.setMinutes(expTime.getMinutes());


            console.log(datetime);
            console.log(expTime)
        } catch (err) {
            console.log(err);
        }
    },

    async apiRequest( type, axiosBase, url, model, bearer) {
        const keys = await AsyncStorage.getItem("persist:root");
        const token = JSON.parse(JSON.parse(keys).token);
        
        if (bearer === 1 && token) {
            await this.refreshJwt(token);
        }
        if (type == 'post')
            return axiosBase.post(url, model, bearer === 1 ? { headers: { 'Authorization': `Bearerss ${token}` } } : null);
        else if (type == 'get')
            return axiosBase.get(url, bearer === 1 ? { headers: { 'Authorization': `Bearerss ${token}` } } : null);
    },
};

export default ApiService;

