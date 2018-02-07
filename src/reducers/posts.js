// reducer takes in:
//  1. the action (info about what happend)
//  2. copy of current state

function posts(state = [], action) {
  switch (action.type) {
    case "ADD_POST":
      // return the updated state
      console.log("adding post");
      return [action.post, ...state];

    default:
      return state;
  }
}

export default posts;
