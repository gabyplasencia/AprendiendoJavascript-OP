//Un nuevo Set con los nombres de tu familia
const familia = ["Mama", "Papa", "Hermana", "Hermano"];
const familiaSet = new Set(familia);

//Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
familiaSet.add("yo");

//Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
familiaSet.add("Javascript");



console.log(familiaSet);