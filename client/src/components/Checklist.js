import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';
  
class Checklist extends Component {
    componentDidMount() {
        this.props.getItems();
    }

    onDeleteclick = (id) => {
        this.props.deleteItem(id);
    }

    render() {
        const {items} = this.props.item;
        return (<Container>
            <col-sm-6>
            <ListGroup>
                <TransitionGroup className="Checklist"> {
                    items.map(({_id, name}) => (<CSSTransition key={_id}
                        timeout={500}
                        classNames="fade">
                        <ListGroupItem>
                            <Button className="remove-btn" color="danger" size="sm"
                                onClick={
                                    this.onDeleteclick.bind(this, _id)
                            }>
                                &times;
                            </Button>
                            {name} </ListGroupItem>
                    </CSSTransition>))
                } </TransitionGroup>
            </ListGroup>
            </col-sm-6>
        </Container>);
    }
} Checklist.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({item: state.item});
// const mapDispatchToProps ;

export default connect(mapStateToProps, {getItems, deleteItem})(Checklist);

