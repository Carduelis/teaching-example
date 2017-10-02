import ajax from './fake_libs/ajax';
import './styles/style.less';
import Trianglify from 'trianglify'
const rootElement = document.getElementById('root');
// rootElement.innerHTML = 'hello world!';
var pattern = Trianglify({
    width: window.innerWidth,
    height: window.innerHeight
});
rootElement.appendChild(pattern.canvas());

ajax({
	debug: false,
	success: (...rest) => {
		console.log(...rest);
	},
	error: (...rest) => {
		console.error(...rest);
	}
}).then(
	response => console.log(response),
	error => console.error(error)
);
class Rabbit {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    return 'My name is '+ this.name;
  }
}

const vasya = new Rabbit('Вася');
vasya.sayHi();
