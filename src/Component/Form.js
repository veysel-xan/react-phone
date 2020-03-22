import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  constructor() {
      super();
      this.oNchange = this.oNchange.bind(this)
      this.onSubmit = this.onSubmit.bind(this)
  }
    static propTypes = {

        addContact:PropTypes.func
    };

    oNchange(e){
      this.setState({
          [e.target.name]: e.target.value
      })
    }
    onSubmit(e){
        e.preventDefault()
        this.props.addContact({
            ...this.state
        })
        this.setState({
            name:"",
            Phone:""
        })
    }
    state = {
        name:"",
        Phone:""
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} >
                    <input
                        type="text"
                        name={"name"}
                        value={this.state.name}
                        onChange={this.oNchange}
                        id={"name"}
                        placeholder={"Enter Name"}/>
                    <br/>
                    <input
                        type="text"
                        name={"Phone"}
                        value={this.state.Phone}
                        onChange={this.oNchange}
                        id={"Phone"}
                        placeholder={"Enter phone"}/>
                    <br/>
                    <button>Add</button>
                </form>
            </div>
        );
    }
}

export default Form;
