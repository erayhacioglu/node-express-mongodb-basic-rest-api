import joi from 'joi';

const validation = (data) => {
const schema = {
    name:joi.string().required('name alanı zorunlu'),
    age:joi.number().required('age alanı zorunlu').min(12,'yaş en az 12 olmalı').max(80,'yaş en çok 80 olmalı'),
    city:joi.string().required('city alanı zorunlu'),
}
return joi.validate(data,schema);
}

export default validation;