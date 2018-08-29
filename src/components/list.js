import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllListData } from '../actions'

class List extends Component {
    componentDidMount() {
        this.props.getAllListData();
    }
    render() {
        const listElements = this.props.list.map(item => {
            return (
                <li key={item._id} className="collection-item" >

                    <Link to={`/item/${item._id}`}>{item.title}</Link>
                </li>
            )
        });
        return (
            <div>
                <h1 className="center">REDUX TO DO LIST</h1>
                <div className="row">
                    <div className="col s12 right-align">
                        <Link to="/add-item" className="btn blue darken-2">Add Item</Link>
                    </div>
                </div>
                <ul className="collection">
                    {listElements}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        list: state.list.all
    }
}

export default connect(mapStateToProps, { getAllListData: getAllListData })(List);