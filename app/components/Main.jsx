var React = require('react');
var Nav = require('Nav');


var Main = props => {
    return (
            <div>
                <Nav/>
                <p>main.jsx</p>
                {props.children}
                    
           </div>
        );
};

module.exports = Main;