/**
 * Created by aviad on 5/2/2016.
 */
var React = require('react');


var Main = React.createClass({
    render : function(){
        return(
            <div>
                Hello from Main
                {this.props.children}
            </div>
        );
    }
});

module.exports = Main;