// Valores Falsy
console.log(110); 
// false
console.log(!!"");
// false
console.log(!!null);
// false


// Valores Truthy
console.log(111);
// true
console.log(!!"Texto");
// true

console.log(!![]);

// true (Arrays vazios são objetos, logo são truthy)
console.log(!!{});
// true (Objetos vazios são truthy)