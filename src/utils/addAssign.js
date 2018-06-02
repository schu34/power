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

const a  ={
  a: 1,
  b: 2,
  c: 3,
}
const b = {
  a: 3, 
  b: 2,
  c: 1,
  z: 5,
}

console.log((addAssign(a, b)));

export default addAssign;
