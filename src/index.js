//const btnSave = document.getElementById("codeText");
//btnSave.addEventListener("click", ()=>{
//  alert("Hello");
//});
const btnCode = document.getElementById('codificar');
btnCode.addEventListener("click", () => {
  document.getElementById('pagina1').style.display="none";
  document.getElementById('pagina2').style.display="block";
  document.getElementById("pagina3").style.display="none";
});

const btnDecode = document.getElementById('decodificar');
btnDecode.addEventListener("click", () => {
  document.getElementById('pagina1').style.display="none";
  document.getElementById('pagina2').style.display="none";
  document.getElementById("pagina3").style.display="block";
});




document.getElementById('codeTextBtn').addEventListener("click",()=>{
  let texto = document.getElementById('textAreaCode').value.toUpperCase();
  let offset=parseInt(document.getElementById('numberOffset1').value);
  let textoFinalCode=window.cipher.encode(texto,offset);
  document.getElementById('textAreaRespuesta').value=textoFinalCode;
  //document.getElementById('textArea2').value = textoFinalCode;
})



document.getElementById('decodeTextBtn').addEventListener("click",()=>{
  let texto2 = document.getElementById('textAreaDecode').value.toUpperCase();
  let offset2=parseInt(document.getElementById('numberOffset2').value);
  let textoFinalDecode=window.cipher.decode(texto2,offset2);
  document.getElementById('textAreaRespuesta2').value=textoFinalDecode;
})



//btnSave.addEventListener("click",()=>{
  //let texto= document.getElementById('name').value;
//})
