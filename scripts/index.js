


  const convert= text => {

return parseInt(text);
  }


const reverse = text =>{
  if(typeof text !=='string' ){
    return false;
  } else{
    return text.split('').reverse('').join('');
  }


}

module.exports= {convert:convert,reverse:reverse};
