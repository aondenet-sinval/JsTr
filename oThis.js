let car ={
	marca: 'Wolks',
	getMarca: function(){
		return this.marca;
	}
}
let marca = car.getMarca.bind(car);
console.log(marca());

let bike = {
	marca: 'Monark',
}

let marcaBike = car.getMarca.bind(bike);
console.log(marcaBike());
