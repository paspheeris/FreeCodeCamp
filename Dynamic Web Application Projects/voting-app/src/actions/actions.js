export const POLL_VOTE = 'POLL_VOTE';

export function pollVote(pollUUID, choice) {
  return {
    type: POLL_VOTE,
    payload: {
      pollUUID,
      choice
    }
  }
}