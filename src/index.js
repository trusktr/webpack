// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
//
// ReactDOM.render(<App />, document.getElementById('root'));

class A {
    static [Symbol.hasInstance] (instance) {
        console.log('custom instanceof check!', instance)
        return false
    }
}

class B extends A { constructor() {super()} }

class C extends B { constructor() {super()} }
class D extends B { constructor() {super()} }

let c = new C

console.log('should be false and not using custom hasInstance:', c instanceof D)
console.log('should be true and not using custom hasInstance:', c instanceof B)
console.log('should be false due to custom hasInstance:', c instanceof A)
