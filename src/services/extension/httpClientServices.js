import axios from 'axios';

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
