const uuidv4 = require('uuid/v4');

export const polls = [
  {
    key: uuidv4(),
    author_uuid: '"ae650b55-e8b0-4138-97ba-86493d7c4f2d"',
    author_name: 'Paul',
    created: Date.now(),
    poll_question: 'What\'s the best city?' ,
    poll_choices: ['SF', 'NYC', 'Chicago'],
    poll_votes: [5, 2, 6],
    participants: ['someuuid', 'someuuid', 'someuuid']
  },
  {
    key: uuidv4(),
    author_uuid: '"ae650b55-e8b0-4138-97ba-86493d7c4f2d"',
    author_name: 'Paul',
    created: Date.now(),
    poll_question: 'What\s the best color',
    poll_choices: ['Red', 'Green', 'Blue'],
    poll_votes: [8, 9, 10],
    participants: ['someuuid', 'someuuid', 'someuuid']
  },
  {
    key: uuidv4(),
    author_uuid: '"ae650b55-e8b0-4138-97ba-86493d7c4f2d"',
    author_name: 'Paul',
    created: Date.now(),
    poll_question: 'What\'s your favorite food?',
    poll_choices: ['Pizza', 'Sushi', 'Hamburgers'],
    poll_votes: [90, 31, 32],
    participants: ['someuuid', 'someuuid', 'someuuid']
  },
  {
    key: uuidv4(),
    author_uuid: '"bc466e9d-ec0a-48fd-ac98-89bbbfe5fd58"',
    author_name: 'Brandon',
    created: Date.now(),
    poll_question: 'What\'s your favorite sport?',
    poll_choices: ['Soccer', 'Football', 'Tennis'],
    poll_votes: [0, 1, 1],
    participants: ['someuuid', 'someuuid', 'someuuid']
  },
];

export const users = [
  {
    key: "ae650b55-e8b0-4138-97ba-86493d7c4f2d",
    name: 'Paul',
    password: 'Password1',
    polls: [],
  },
  {
    key: "bc466e9d-ec0a-48fd-ac98-89bbbfe5fd58",
    name: 'Brandon',
    password: 'Password2',    
    polls: [],
  },
  {
    key: uuidv4(),
    name: 'Will',
    password: 'Password3',  
    polls: [],
  },
  {
    key: uuidv4(),
    name: 'Wyatt',
    password: 'Password4',    
    polls: [],
  },
];