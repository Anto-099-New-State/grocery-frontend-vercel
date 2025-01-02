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

export default {
    getCatgeory,
    getSlider,
    getCatgeoryList
}