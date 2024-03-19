const container = document.getElementById('react-container');

//////////// render

ReactDOM.render("Hello! Welcome to React",container);

/////////// functional component rendering

// const Container = ()=>( 
//         React.createElement(`div`, null, `Hello Kalvian! welcome to react`, 
//         React.createElement(`div`, null, `Hey Kalvian how is it going?`)
//         )
// );

//////////// class component rendering

// class ReactContainer extends React.Component {
//     // constructor()
//     render() {
//         return React.createElement('div', null, 'Hello Kalvian! Welcome to React',
//             React.createElement('div', null, 'Hey Kalvian, how is it going?')
//         );
//     }
// }

ReactDOM.render(React.createElement(ReactContainer), container);
