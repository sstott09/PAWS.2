// import React, { Component } from 'react';
// import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import uuid from 'uuid';

// class StarterKit extends Component {
//     state = {
//         items: [
//             { id: uuid(), name: 'Leash'},
//             { id: uuid(), name: 'Harness'},
//             { id: uuid(), name: 'Bedding'},
//             { id: uuid(), name: 'Dog Bowl'},
//             { id: uuid(), name: 'Dog Food'},
//         ]
//     }

// render() {
//     const { items } = this.state;
//     return(
//             <Container>
//                 <Button
//                     color="dark"
//                     style={{marginBottom: '2rem'}}
//                     onClick={() => {
//                         const name = prompt ('Enter Item');
//                         if(name) {
//                             this.setState(state => ({
//                                 items: [...state.items, { id: uuid(), name: name }]
//                             }));
//                         }
//                     }}
//                 >Add Item</Button>
//             </Container>
//         );
//     }
// }

// export default StarterKit;