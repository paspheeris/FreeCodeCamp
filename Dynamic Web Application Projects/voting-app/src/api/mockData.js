const uuidv4 = require('uuid/v4');
//poll_choices => allChoices
//poll_votes => votesByChoice
//poll_question => question
export const polls = {
  byId : {
    "4d4cdb42-3475-432f-bccc-c3cb5d7765d9":  {
      key: "4d4cdb42-3475-432f-bccc-c3cb5d7765d9",
      author_id: "google-oauth2|105786279754106054402",
      author_name: 'Paul',
      created: 11111222333,
      question: 'What\'s the best city?' ,
      allChoices: ['SF', 'NYC', 'Chicago'],
      votesByChoice: {SF: 5, NYC: 2, Chicago: 6},
      participants: ['someuuid', 'someuuid', 'someuuid']
    },
    "e4c25936-55d8-44a8-8684-eb0bc7720442":  {
      key: "e4c25936-55d8-44a8-8684-eb0bc7720442",
      author_id: "google-oauth2|105786279754106054402",
      author_name: 'Paul',
      created: 11111222333,
      question: 'What\'s the best color',
      allChoices: ['Red', 'Green', 'Blue'],
      votesByChoice: {Red: 8, Green: 9, Blue: 10},
      participants: ['someuuid', 'someuuid', 'someuuid']
    },
    "27fb4dab-c512-4685-a6a4-2003a8276439": {
      key: "27fb4dab-c512-4685-a6a4-2003a8276439",
      author_id: "github|20876393",
      author_name: 'Brandon',
      created: 11111222333,
      question: 'What\'s your favorite food?',
      allChoices: ['Pizza', 'Sushi', 'Hamburgers'],
      votesByChoice: {Pizza: 90, Sushi: 31, Hamburgers: 32},
      participants: ['someuuid', 'someuuid', 'someuuid']
    },
    "f66e9aea-0d84-438c-bffe-d7fec535929b": {
      key: "f66e9aea-0d84-438c-bffe-d7fec535929b",
      author_id: "github|20876393",
      author_name: 'Brandon',
      created: 11111222333,
      question: 'What\'s your favorite sport?',
      allChoices: ['Soccer', 'Football', 'Tennis'],
      votesByChoice: {Soccer: 0, Football: 1, Tennis: 1},
      participants: ['someuuid', 'someuuid', 'someuuid']
    },
  },
  allIds : ["4d4cdb42-3475-432f-bccc-c3cb5d7765d9", "e4c25936-55d8-44a8-8684-eb0bc7720442", "27fb4dab-c512-4685-a6a4-2003a8276439", "f66e9aea-0d84-438c-bffe-d7fec535929b"]
};

export const users = {
  byId: {
    "ae650b55-e8b0-4138-97ba-86493d7c4f2d": {
      key: "ae650b55-e8b0-4138-97ba-86493d7c4f2d",
      name: 'Paul',
      password: 'Password1',
      polls: [],
    },
    "bc466e9d-ec0a-48fd-ac98-89bbbfe5fd58": {
      key: "bc466e9d-ec0a-48fd-ac98-89bbbfe5fd58",
      name: 'Brandon',
      password: 'Password2',    
      polls: [],
    },
    "ba5844f0-c25e-4970-b83c-be71321122e2": {
      key: "ba5844f0-c25e-4970-b83c-be71321122e2",
      name: 'Will',
      password: 'Password3',  
      polls: [],
    },
    "00857e1a-c73f-437b-87e9-733417e12f0f": {
      key: "00857e1a-c73f-437b-87e9-733417e12f0f",
      name: 'Wyatt',
      password: 'Password4',    
      polls: [],
    }
  },
  allIds: ["ae650b55-e8b0-4138-97ba-86493d7c4f2d", "bc466e9d-ec0a-48fd-ac98-89bbbfe5fd58", "ba5844f0-c25e-4970-b83c-be71321122e2", "00857e1a-c73f-437b-87e9-733417e12f0f"]
};