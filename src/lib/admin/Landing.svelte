<script lang='ts'>
    import Drawer from "./Drawer.svelte";
    import UserList from "./manageUsers/UserList.svelte";
    import DoorButton from "./DoorButton.svelte";
    import SurveillanceCamera from "./SurveillanceCamera.svelte";
    import DetectorsViewer from "../DetectorsViewer.svelte";
    import {Router,Route} from 'svelte-routing';
    import DoorRequests from "./DoorRequests.svelte";
    import MovementAlert from "./MovementAlert.svelte";

    let ls = [
        {
            text:"people.png",
            to:"/admin/user",
        },
        {
            text:"RoomTemperature.png",
            to:"/admin/detectors"
        },
        {
            text:"surveillanceCamera.png",
            to:"/admin/camera"
        },
        {
            text:"door bell.png",
            to:"/admin/doorrequests"
        },
        {
            text:"motionDetection.png",
            to:"/admin/motiondetection"
        }
    ]


</script>

<DoorButton/>
<Drawer links={ls}/>
<Router basepath="/admin">
    <Route path="/user">
        <UserList/>
    </Route>
    <Route path="/detectors">
        <DetectorsViewer/>
    </Route>
    <Route path="/camera">
        <SurveillanceCamera/>
    </Route>
    <Route path="/doorrequests">
        <DoorRequests/>
    </Route>
    <Route path="/motiondetection">
        <MovementAlert/>
    </Route>
</Router>


