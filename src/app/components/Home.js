import React from "react";

export class Home extends React.Component {
  constructor(props) {
    //execute parent constructor since inheritng from react Component
    super();
    this.state = {
      age: props.initialAge,
      status: 0,
      homeLink: props.initialLinkName
    };
    console.log("Constructor")
  }
  componentWillMount() {
    console.log("Component will mount");
  }

  componentDidMount() {
    console.log("Component did mount");
  }

  componentWillReceiveProps() {
    console.log("Component will receive props", nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Should component update", nexProps, nextState);
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("component will update", nextProps, nextState);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component did update", prevProps, prevState);
  }

  componentWillUnmount() {
    console.log("component will mount");
  }

  onMakeOlder() {
    //setstate takes js object and changes whatever part is specified
    this.setState({
      age: this.state.age + 3
    });
  }

  onChangeLink() {
    this.props.changeLink(this.state.homeLink);
  }
  onHandleChange(event) {
    this.setState({
      homeLink: event.target.value
    })
  }

  render() {
    return(
      <div>
        <p>In a new Component!</p>
        <p>Your name is {this.props.name}, your age is {this.state.age}</p>
        <p>Status: {this.state.status}</p>
        <hr/>
        <button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Make me older!</button>
        <hr />
        <button onClick={this.props.greet} className="btn btn-primary">Greet</button>
        <hr />
        <input type="text" value={this.state.homeLink} onChange={this.onHandleChange.bind(this)}/>
        <button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">Change Header Link</button>

      </div>
    );
  }
}

Home.propTypes = {
  name: React.PropTypes.string,
  initialAge: React.PropTypes.number,
  greet: React.PropTypes.func,
  initialLinkName: React.PropTypes.string
}
