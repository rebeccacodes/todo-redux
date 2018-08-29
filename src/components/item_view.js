import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSingleItem, deleteItem, resetSingle } from '../actions';


class ItemView extends Component {

    componentDidMount() {
        this.props.getSingleItem(this.props.match.params.id);
    }

    componentWillUnmount() {
        this.props.resetSingle();
    }

    handleDelete = () => {
        this.props.deleteItem(this.props.match.params.id);

    }

    render() {
        if (this.props.error) {
            return (
                <h2 className="center red-text">{this.props.error}</h2>
            )
        }

        return (
            <div>
                <h1 className="center">View Item</h1>
                <h2>{this.props.item.title}</h2>
                <button className="btn red darken-2" onClick={this.handleDelete}>Delete Item</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        item: state.list.single,
        error: state.list.error
    }
}

export default connect(mapStateToProps, {
    getSingleItem: getSingleItem,
    deleteItem: deleteItem,
    resetSingle: resetSingle
})(ItemView);