function solve(arr) {

    let cats = [];

    class Cat {
      constructor(name, age) {
        this.name = name;
        this.age = age;
      }

      meow() {
        console.log(`${this.name}, age ${this.age} says Meow`);
      }
    }

    for (const cat of arr) {
        const [name, age] = cat.split(" ");
        let newCat = new Cat(name, age);
        newCat.meow();
        cats.push(newCat);
    }
}

solve(['Mellow 2', 'Tom 5']);