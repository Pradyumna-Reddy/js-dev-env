import numeral from "numeral";
import './index.css';

const courseValue = numeral(1000).format('$0,0.00');
console.log(`I would want ${courseValue}, just for no sake`);
