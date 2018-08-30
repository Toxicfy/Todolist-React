import {
  CHANGE_INPUT_VALUE,
  ADD_INPUT_VALUE,
  DELETE_TODO_ITEM
} from "./actionType";

const defaultValue = {
  inputValue: "",
  list: []
};

export default (state = defaultValue, action) => {
  const newState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      newState.inputValue = action.value;
      return newState;

    case ADD_INPUT_VALUE:
      newState.list = [...newState.list, newState.inputValue];
      newState.inputValue = "";
      return newState;

    case DELETE_TODO_ITEM:
      newState.list.splice(action.index, 1);
      return newState;

    default:
      return newState;
  }
};
