import { INCREMENT } from "../constants";
import {DECREMENT} from '../constants'

export function increment() {
  return {
    type: INCREMENT
  };
}

export function decrement() {
  return {
    type: DECREMENT
  };
}

