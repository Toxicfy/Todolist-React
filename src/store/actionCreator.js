import {
  CHANGE_INPUT_VALUE,
  ADD_INPUT_VALUE,
  DELETE_TODO_ITEM,
  INIT_LIST_ACTION
} from "./actionType";
import axios from "axios";

export const getInputChangeAction = value => ({
  type: CHANGE_INPUT_VALUE,
  value
});

export const getAddItemAction = () => ({
  type: ADD_INPUT_VALUE
});

export const getDeleteItemAction = index => ({
  type: DELETE_TODO_ITEM,
  index
});

export const initListAction = data => ({
  type: INIT_LIST_ACTION,
  data
});

export const getTodoList = () => {
  return dispath => {
    axios.get("./list.json").then(res => {
      const action = initListAction(res.data);
      dispath(action);
    });
  };
};
