import React from 'react';
import ReactDOM from 'react-dom';

type Foo = {
    bar: string;
}

const App = () => {
    const foo: Foo = {
        bar: '1'
    };

  return <div>Hello, Vite + React</div>;
};

ReactDOM.render(<App />, document.getElementById('root'));