var React = require('react');
var ReactDOM = require('react-dom');


var DUMMY_DATA = {
    name:'Aviad Hahami',
    username:'aviadhahami',
    imageUrl:'https://avatars0.githubusercontent.com/u/7353632?v=3&s=460'
};

var ProfileName = React.createClass({
    render:function(){
        return(
            <div>{this.props.name}</div>
        )
    }
});

var ProfilePic = React.createClass({
    render:function(){
        return(
            <img src={this.props.imageUrl} style={{height:100,width:100}}/>
        )
    }
});

var ProfileLink = React.createClass({
    render: function(){
        return(
            <div>
                <a href={'https://github.com/'+ this.props.username}>
                    {this.props.username}
                </a>
            </div>
        )
    }
});

var Avatar = React.createClass({
    render: function(){
        return(
            <div>
                <ProfilePic imageUrl={this.props.user.imageUrl}></ProfilePic>
                <ProfileName name={this.props.user.name}></ProfileName>
                <ProfileLink username={this.props.user.username}></ProfileLink>
            </div>
        )
    }
})
ReactDOM.render(<Avatar user={DUMMY_DATA} />, document.getElementById('app'));