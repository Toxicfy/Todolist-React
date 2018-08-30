import {
  CHANGE_INPUT_VALUE,
  ADD_INPUT_VALUE,
  DELETE_TODO_ITEM
} from "./actionType";

export const getInputChangeAction = value => ({
  type: CHANGE_INPUT_VALUE,
  value
});

export const getAddItemAction = () => ({
  type: ADD_INPUT_VALUE,
});

export const getDeleteItemAction = index => ({
  type: DELETE_TODO_ITEM,
  index
});