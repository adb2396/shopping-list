import React from 'react';
import {
    Container,
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

class ShoppingList extends React.Component {

    componentDidMount() {
        this.props.getItems();
    }

    render() {
        const { items } = this.props.item;
        return(
            <Container>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {items.map( ({ id, name }) => {
                            return <CSSTransition 
                                key={id} 
                                timeout={500}
                                classNames="fade" 
                            >   
                                <ListGroupItem>
                                    <Button
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick={ () => this.props.deleteItem(id) }
                                    >
                                        &times;
                                    </Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition> 
                        })}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        ); 
    }
}

ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
    return { item: state.item }
}

export default connect(
    mapStateToProps,
    { getItems, deleteItem }
)(ShoppingList);
