const BASE = 32;
export default function() {
	return new Date().getTime().toString(BASE) + Math.random().toString(BASE).slice(2);
}
