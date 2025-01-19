const { default: axios } = require("axios");

const axiosCLient  = axios.create({
    baseURL:'http://192.168.48.1:1337/api'
});

const getCatgeory=()=>axiosCLient.get('/categories?populate=*')

const getSlider =()=>axiosCLient.get('/sliders?populate=*').then(rea=>{
    return rea.data.data;
});

const getCatgeoryList=()=>axiosCLient.get('/categories?populate=*').then((res)=>{
    return res.data.data;
});
const getAllProducts=()=>axiosCLient.get('/products?populate=*').then((res)=>{
    return res.data.data;
})

const getAllProductsbyCategory=(category)=>axiosCLient.get('/products?filters[category][name][$in]='+category+"&populate=*").then((res)=>{
    return res.data.data;
})

const registerUser=(username,email,password)=>axiosCLient.post('/auth/local/register',{
    username:username,
    email:email,
    password:password
});

const signIn=(email,password)=>axiosCLient.post('/auth/local',{
    identifier:email,
    password:password
});

const addtoCart=()=>axiosCLient.post('user-carts',data,{
    headers:{
        Authorization:'Bearer'+jwt
    }
})

export default {
    getCatgeory,
    getSlider,
    getCatgeoryList,
    getAllProducts,
    getAllProductsbyCategory,
    registerUser,
    signIn,
    addtoCart
}