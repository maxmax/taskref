import { connect } from 'react-redux';
import * as components from '../modules/todo';
import { addTodo, toggleTodo } from '../actions';

//container method
export const TodoList = connect(

  function mapStateToProps( state ){
    return { todos: state.todo };
  },

  function mapDispatchToProps( dispatch ){
    return {
      addTodo   : text => dispatch( addTodo( text ) ),
      toggleTodo: id => dispatch( toggleTodo( id ) )
    };
  }

)( components.TodoList );
