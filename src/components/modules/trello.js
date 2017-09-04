import React, { Component } from 'react';
import {Board} from 'react-trello'

function TrelloWr({data}) {
  return (
    <Board data={data} draggable />
  )
}

export default TrelloWr;
