import type { DoorRequest } from "./Model/DoorReqModel";


export const getRequest = (assign : (doorReq:Array<DoorRequest>)=>void) => assign([{
    id:0,
    username:"wassim",
    madeAt:new Date().toISOString()
}]);