import ApiService from '../extension/httpClientServices';
/* 
    ilk değişken get veya post
    ikinci değişken - base url (ikapi,bodyapi vb httpClientServices de tanımlanır)
    üçüncü değişken - endpoint
    dördüncü değişken - model (get servisinde boş [] yollayalım)
    beşinci değişken bearer api için 1 eklemeliyiz yoksa 0
*/

  const deneme = () => {
    return ApiService.api('get',`users`,[],1)
  }
  const login = (model) => {
    return ApiService.api('post','Api',`api/Account/WebLogin`,model,0)
  }
  const faqinfo = () => {
    return ApiService.api('get','Api',`api/FaqInfo/GetMainFaqInfo`,[],1)
  }
export default {
  deneme,
  login,
  faqinfo
}
