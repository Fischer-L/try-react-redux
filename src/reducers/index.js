export default function (previousState, action) {
  let state = {};
  
  switch (action.type) {
    case "update_text":
      state.text = action.newText;
      break;

    default:
      state = previousState ? previousState : {
        text: "APPPPPPPPPB"
      };
  }

  console.log("reducers - state =", JSON.stringify(state));
  console.log("");
  return state;
}
