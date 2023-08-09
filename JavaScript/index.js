let edad;
edad= Number(prompt(`Ingrese su edad`));
   
while (!edad){
    alert("dato invalido")
    edad= Number(prompt(`Ingrese su edad`))
};

if (edad >= 18){
    alert("Bienvenido")
}
else {
    alert("Es menor de edad")
};