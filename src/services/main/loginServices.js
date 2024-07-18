import ApiService from '../extension/httpClientServices';
/* 
    ilk değişken get veya post
    ikinci değişken - endpoint
    üçüncü değişken - model (get servisinde boş [] yollayalım)
    dördüncü değişken bearer api için 1 eklemeliyiz yoksa 0
*/

  const deneme = () => {
    return ApiService.api('get',`users`,[],1)
  }
  const login = (model) => {
    return ApiService.api('post',`api/Account/WfebLogin`,model,0)
  }

export default {
  deneme,
  login
}
