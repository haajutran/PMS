import * as dataService from "../services/DataService";

const requestRoomsAvaiType = "REQUEST_ROOMS_AVAI";
const receiveRoomsAvaiType = "RECEIVE_ROOMS_AVAI";

const initialState = { isLoading: false };

export const actionCreators = {
  requestRoomAvais: () => async dispatch => {
    dispatch({ type: requestRoomsAvaiType });
    const url =
      "api/api/RoomAvailability/getListRoomAvailability?Date=16/09/2018&Guaranteed=True&NonGuaranteed=True&WaitingList=False&EarlyCI=False&LateCO=False&Allotment=True&DayUse=False&OOO=True&OOI=True&HoldRoom=True";
    const res = await dataService.get(url);
    console.log(res);
    dispatch({ type: receiveRoomsAvaiType, roomAvais: res.data });
  }
};

export const reducer = (state, action) => {
  state = state || initialState;

  if (action.type === requestRoomsAvaiType) {
    return {
      ...state,
      isLoading: true
    };
  }

  if (action.type === receiveRoomsAvaiType) {
    return {
      ...state,
      roomAvais: action.roomAvais,
      isLoading: false
    };
  }

  return state;
};
