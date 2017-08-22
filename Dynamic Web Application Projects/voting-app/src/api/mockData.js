const uuidv4 = require('uuid/v4');

export const polls = [
  {
    key: "4d4cdb42-3475-432f-bccc-c3cb5d7765d9",
    author_uuid: '"ae650b55-e8b0-4138-97ba-86493d7c4f2d"',
    author_name: 'Paul',
    created: 11111222333,
    poll_question: 'What\'s the best city?' ,
    poll_choices: ['SF', 'NYC', 'Chicago'],
    poll_votes: [5, 2, 6],
    participants: ['someuuid', 'someuuid', 'someuuid']
  },
  {
    key: "e4c25936-55d8-44a8-8684-eb0bc7720442",
    author_uuid: '"ae650b55-e8b0-4138-97ba-86493d7c4f2d"',
    author_name: 'Paul',
    created: 11111222333,
    poll_question: 'What\s the best color',
    poll_choices: ['Red', 'Green', 'Blue'],
    poll_votes: [8, 9, 10],
    participants: ['someuuid', 'someuuid', 'someuuid']
  },
  {
    key: "27fb4dab-c512-4685-a6a4-2003a8276439",
    author_uuid: '"ae650b55-e8b0-4138-97ba-86493d7c4f2d"',
    author_name: 'Paul',
    created: 11111222333,
    poll_question: 'What\'s your favorite food?',
    poll_choices: ['Pizza', 'Sushi', 'Hamburgers'],
    poll_votes: [90, 31, 32],
    participants: ['someuuid', 'someuuid', 'someuuid']
  },
  {
    key: "f66e9aea-0d84-438c-bffe-d7fec535929b",
    author_uuid: '"bc466e9d-ec0a-48fd-ac98-89bbbfe5fd58"',
    author_name: 'Brandon',
    created: 11111222333,
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
    key: "ba5844f0-c25e-4970-b83c-be71321122e2",
    name: 'Will',
    password: 'Password3',  
    polls: [],
  },
  {
    key: "00857e1a-c73f-437b-87e9-733417e12f0f",
    name: 'Wyatt',
    password: 'Password4',    
    polls: [],
  },
];