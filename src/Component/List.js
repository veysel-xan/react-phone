import React, {Component} from 'react';
import '../App.css'
import PropTypes from 'prop-types';
class List extends Component {

    static propTypes = {
        contacts: PropTypes.array.isRequired,

    };

    state = {
        filterText:""
    }

    OnchangeFilterText = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const  filterContacts = this.props.contacts.filter(
            contact => {
                return contact.name.toLowerCase().indexOf(
                    this.state.filterText.toLowerCase()
                ) !== -1

            }
        );
        return (
            <div className={"listArea"}>
                <input
                    value={this.state.filterText}
                    onChange={this.OnchangeFilterText}
                    type="text"
                    name={"filterText"}
                    id={"filter"}
                    placeholder={"Ara"}/>

                <ul className={"Listul"}>
                    {
                        filterContacts.map(cont =>{
                            return(
                                <li key={cont.Phone}>
                                    <span className={"name"}>{cont.name}</span>
                                    <span className={"telefon"}>{cont.Phone}</span>
                                </li>
                            )
                        })
                    }



                </ul>
            </div>
        );
    }
}

export default List;
