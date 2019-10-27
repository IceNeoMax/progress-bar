import {
  GET_BAR_ASYNC,
  CHANGE_BAR,
  START_LOADING,
  STOP_LOADING
} from "../actions";

const initialState = {
  buttons: [],
  bars: [],
  loading: false,
  limit: 0,
  currentBar: 0
};
export default function bar(state = initialState, action) {
  switch (action.type) {
    case GET_BAR_ASYNC: {
      const { buttons, bars, limit } = action.params;
      return { ...state, buttons, bars, limit };
    }
    case CHANGE_BAR: {
      const { value, barPosition } = action.params;
      const bars = [...state.bars];
      bars[barPosition] =
        bars[barPosition] + value < 0 ? 0 : bars[barPosition] + value;
      return { ...state, bars };
    }
    case STOP_LOADING:
      return { ...state, loading: false };
    case START_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
}
