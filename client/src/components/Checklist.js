import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';
import { Card, CardImg } from 'reactstrap';
import { Nav, NavLink } from 'reactstrap';
  
  const Logo = (props) => {
    return (
      <div>
        <Card>
          <CardImg top width="100%" src="../media/paws-logo.png" alt="Card image cap" />
        </Card>
      </div>
    );
  };

  const ChecklistLink = (props) => {
    return (
      <div>
        <hr />
        <p>Checklist for New Adopters</p>
        <Nav>
          <NavLink href="https://www.petfinder.com/pet-adoption/dog-adoption/pet-adoption-checklist/">Link</NavLink>
        </Nav>
      </div>
    );
  }
  
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
        </Container>);
    }
} Checklist.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({item: state.item});

export default connect(mapStateToProps, {getItems, deleteItem})(Checklist)(Logo)(ChecklistLink);

