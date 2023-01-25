import type { DoorRequest } from "./Model/DoorReqModel";


export const getRequest = (assign : (doorReq:Array<DoorRequest>)=>void) => assign([{
    username:"wassim",
    madeAt:new Date().toISOString()
}]);