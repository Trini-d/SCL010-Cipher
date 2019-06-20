
window.cipher = {
  encode: (texto, offset) => {
    let textoFinalCode= '';
  
    for(let i = 0; i < texto.length; i++){
    let  asci_inicial = texto.charCodeAt(i);//texto ingresado por usuario, se convierte en un número ASCII
    if(asci_inicial>=65 && asci_inicial<=90){
    let  asci_final = ((asci_inicial-65 + offset)%26 + 65);//número ASCii es desplazado
    let  letrafinal = String.fromCharCode(asci_final);//el número desplazado se convierte en nueva letra.
      textoFinalCode += letrafinal; //concatenación de letras
    }
  }
  return textoFinalCode;

  },
  decode: (texto2,offset2) => {
   let  textoFinalDecode= '';
    for(let i = 0; i < texto2.length; i++){
    let asci_inicial = texto2.charCodeAt(i);//texto ingresado por usuario, se convierte en un número ASCII
    if(asci_inicial>=65 && asci_inicial<=90){
    let asci_final = ((asci_inicial + 65 - offset2 - 26)%26 + 65);//número ASCii es desplazado
    let letrafinal = String.fromCharCode(asci_final);//el número desplazado se convierte en nueva letra.
      textoFinalDecode += letrafinal; //concatenación de letras
    }
  }
  return textoFinalDecode;

  }
};
