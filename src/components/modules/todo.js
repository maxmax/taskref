import React from 'react';
import { Container, Row, Col, Card, CardBlock, ListGroup, ListGroupItem, Form, FormGroup, Label, Input } from 'reactstrap';

export function Todo( props ){
  const { todo } = props;

  if( todo.isDone ){
    return <strike>{todo.text}</strike>;
  } else {
    return <span>{todo.text}</span>;
  }
}

export function TodoList( props ){
  const { todos, toggleTodo, addTodo } = props;

  const onSubmit = ( event ) => {
    const input        = event.target;
    const text         = input.value;
    const isEnterKey   = (event.which == 13);
    const isLongEnough = text.length > 0;

    if( isEnterKey && isLongEnough ) {
      input.value = '';
      addTodo( text );
    }
  };

  const toggleClick = id => event => toggleTodo( id );

  return (
    <div className='todo'>
      <Card>
        <CardBlock>
          <FormGroup>
            <Input
              type='text'
              placeholder='New todo'
              onKeyDown={ onSubmit }
            />
          </FormGroup>
        </CardBlock>
        <ListGroup>
          {todos.map( todo => (
            <ListGroupItem
              key={ todo.get( 'id' ) }
              className='todo__item'
              onClick={ toggleClick( todo.get( 'id' ) ) }
              action
            >
              <Todo todo={ todo.toJS() } />
            </ListGroupItem>
          ))}
        </ListGroup>
      </Card>
    </div>
  );
}
