//Liste 5 objetos nativos

Object
String
Array
Function
Number

//Liste 5 objetos do browser

Window
History
Document
HTMLCollection
NodeList

//Liste 2 métodos, propriedades ou objetos presente no Chrome que não existe no Firefox

if (typeof document.webkitVisibilityState !== "undefined"){
    console.log('Existe');
}else{
    console.log('Não existe');
};