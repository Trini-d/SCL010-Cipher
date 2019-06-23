const btnCode = document.getElementById('codificar');
btnCode.addEventListener("click", () => {
  document.getElementById('paginaInicio').style.display="none";
  document.getElementById('paginaParaCode').style.display="block";
  document.getElementById("paginaParaDecode").style.display="none";
});

const btnDecode = document.getElementById('decodificar');
btnDecode.addEventListener("click", () => {
  document.getElementById('paginaInicio').style.display="none";
  document.getElementById('paginaParaCode').style.display="none";
  document.getElementById("paginaParaDecode").style.display="block";
});

const inputOffset = document.getElementById("numberOffset1");
inputOffset.addEventListener("click", ()=>{
  alert ("¡No olvides tu clave, recuerda que si deseas desencriptar tu texto la necesitarás!");
});

document.getElementById('codeTextBtn').addEventListener("click",()=>{
  let texto = document.getElementById('textAreaCode').value.toUpperCase();
  let offset=parseInt(document.getElementById('numberOffset1').value);
  let textoFinalCode=window.cipher.encode(texto,offset);
  document.getElementById('textAreaRespuesta1').value=textoFinalCode;
  //document.getElementById('textArea2').value = textoFinalCode;
})

document.getElementById('decodeTextBtn').addEventListener("click",()=>{
  let texto2 = document.getElementById('textAreaDecode').value.toUpperCase();
  let offset2=parseInt(document.getElementById('numberOffset2').value);
  let textoFinalDecode=window.cipher.decode(texto2,offset2);
  document.getElementById('textAreaRespuesta2').value=textoFinalDecode;
})
const btnlimpiarCode = document.getElementById("btnlimpiar1");
btnlimpiarCode.addEventListener("click", ()=>{
  document.getElementById("textAreaCode").value="";
  document.getElementById("textAreaRespuesta1").value="";
  document.getElementById("numberOffset1").value="";
});

const btnlimpiarDecode = document.getElementById("btnlimpiar2");
btnlimpiarDecode.addEventListener("click", ()=>{
  document.getElementById("textAreaDecode").value="";
  document.getElementById("textAreaRespuesta2").value="";
  document.getElementById("numberOffset2").value="";
});

const btnCopiar1 = document.getElementById("btnCopiar1");
btnCopiar1.addEventListener("click", ()=>{
  let copied= document.getElementById("textAreaRespuesta1");
  copied.select();
  document.execCommand("copy");
});

const btnCopiar2= document.getElementById("btnCopiar2");
btnCopiar2.addEventListener("click",() => {
    let copied = document.getElementById("textAreaRespuesta2");
    copied.select();
    document.execCommand("copy");
});

const btnVolver1= document.getElementById("btnVolver1");
btnVolver1.addEventListener("click", ()=>{
  document.getElementById("textAreaCode").value="";
  document.getElementById("textAreaRespuesta1").value="";
  document.getElementById("numberOffset1").value="";
  document.getElementById("paginaParaCode").style.display="none";
  document.getElementById("paginaInicio").style.display="block";

});

const btnVolver2= document.getElementById("btnVolver2");
btnVolver2.addEventListener("click", ()=>{
  document.getElementById("textAreaDecode").value="";
  document.getElementById("textAreaRespuesta2").value="";
  document.getElementById("numberOffset2").value="";
  document.getElementById("paginaParaDecode").style.display="none";
  document.getElementById("paginaInicio").style.display="block";
});
const btnEnlace= document.getElementById("enlace");
btnEnlace.addEventListener("click",() => {
    let enlazar = document.location.href="https://radiojgm.uchile.cl/con-las-amigas-y-en-la-casa-como-abortar-de-forma-segura/";

});

const btnEnlace2= document.getElementById("enlace2");
btnEnlace2.addEventListener("click",() => {
    let enlazar2 = document.location.href="https://www.eldesconcierto.cl/2014/07/08/linea-aborto-libre-en-chile-ni-los-medicos-saben-como-utilizar-el-misoprostol-para-abortar-de-manera-segura/";

});
const btnEnlace3= document.getElementById("enlace3");
btnEnlace3.addEventListener("click",() => {
    let enlazar3 = document.location.href="https://www.facebook.com/lineaaborto.chile/";

});
