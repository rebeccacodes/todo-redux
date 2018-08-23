import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllListData } from '../actions'

class List extends Component {
    componentDidMount() {
        this.props.getAllListData();
    }
    render() {
        const listElements = this.props.list.map(item => {
            return <li className="collection-item" key={item._id}>{item.title}</li>
        })
        return (
            <ul className="collection">
                {listElements}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        list: state.list.all
    }
}

export default connect(mapStateToProps, { getAllListData: getAllListData })(List);