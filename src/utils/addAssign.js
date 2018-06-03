function addAssign(dest, source){
  Object.keys(source).forEach(key=>{
    if(dest[key]){
      dest[key] += source[key];
    }else {
      dest[key] = source[key];
    }
  })
  return dest;
}

function addProps(dest, source){
  addAssign(dest, source);

  if(dest.power < 0) dest.power = 0;

  return dest; 
}



export default addProps;
