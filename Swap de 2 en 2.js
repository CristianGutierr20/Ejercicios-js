//Primer metodo

const a = ['H', 'O', 'L', 'A'];


 a[0], a[1], a[2], a[3] = [a[1], a[0], a[3], a[2]]

 
//Segundo Metodo

 const a = ['H', 'O', 'L', 'A'];



 temp = a[0]
a[0] = a[1];
a[1] = temp;

temp = a[2]
a[2] = a[3];
a[3] = temp;

console.log(a);
