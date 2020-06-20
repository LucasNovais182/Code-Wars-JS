// Remove acentos
const str = 'ÁÉÍÓÚáéíóúâêîôûàèìòùÇç' ;
const parsed = str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
console.log(parsed);

// Remove Caracteres especiais

const str2 = 'ÁÉÍÓÚáéíóú""âêîôûàèìòùÇç/.,~!@#$%&_-12345';
const parsed2 = str2.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '');
console.log(parsed2);