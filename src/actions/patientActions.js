import axios from "axios";

import {
    GET_ALL_PATIENT
  } from "./types";


export const getAllPatient = () => async dispatch => {
    const res = await axios.get(
      "https://emr-backend.herokuapp.com/api/getAllPatient"
    );
    dispatch({
      type: GET_ALL_PATIENT,
      payload: res.data
    });
  };