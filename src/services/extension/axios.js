import axios from 'axios'
export  const base = {
    Api:{
        apiProd : axios.create({
            baseURL: 'https://101ikapitest.a101.com.tr'
        }),
    }
}

