function tree (vusota, simvol){
  let a ='';
  for (let i = 1; i <= vusota; i++) {
     a = a + simvol;
     console.log(a);
  }
};

tree(5,"*")


function tree(vusota, simvol) {
  let a = '';
  let i = 1;
  while (i <= vusota) {
    a = a + simvol;
    console.log(a);
    i++;
  }
}

tree(5, "*");