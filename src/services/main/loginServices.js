import ApiService from '../extension/httpClientServices';
/* 

    ilk değişken get veya post
    ikinci değişken - base url (ikapi,bodyapi vb httpClientServices de tanımlanır)
    üçüncü değişken - endpoint
    dördüncü değişken - model (get servisinde boş [] yollayalım)
    beşinci değişken bearer api için 1 eklemeliyiz yoksa 0


        altı ve yedinci değişken redux fonksiyonlarını kullanmamız için 
    örnek - > import { useSelector, useDispatch } from 'react-redux';   const dispatch = useDispatch();
     bu değişkenleri bearer api ile korunan apiler için yollamalıyız bearer değil ise null,null




*/

  const deneme = () => {
    return ApiService.api('get',`users`,[],1)
  }
  const login = (model) => {
    return ApiService.api('post','Api',`api/Account/WebLogin`,model,0,null,null)
  }
  const faqinfo = (dispatch,session) => {
    return ApiService.api('get','Api',`api/FaqInfo/GetMainFaqInfo`,[],1,dispatch,session)
  }
export default {
  deneme,
  login,
  faqinfo
}
