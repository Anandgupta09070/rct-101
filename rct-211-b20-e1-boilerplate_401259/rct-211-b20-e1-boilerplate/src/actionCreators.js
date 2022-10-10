//create action creator functions here, using the action types from actionTypes.js;
import { GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from "./actionTypes";
function actionCreactor(value.payload =[]){
    if(value ==1){
        return {type:GET_PRODUCTS_REQUEST}
    }
    else if(value === 2){
        return {type:GET_PRODUCTS_SUCCESS,payload:payload}
    }else if (value ===3){
        return {type: GET_PRODUCTS_FAILURE}
    }
}
export {actionCreactor};