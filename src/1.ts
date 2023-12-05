//TODO:  Клас Student, який містить три властивості: name, age та grade. 
//TODO: Замість того, щоб оголошувати ці властивості в тілі класу, потім у конструкторі, і нарешті надавати їм значення, 
//TODO: напишіть скорочену ініціалізацію.


class Student {
  constructor(public name: string, public age: number, public grade: string) {}
}

export {Student};