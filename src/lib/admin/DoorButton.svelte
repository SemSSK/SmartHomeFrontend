<script lang="ts">
    import { closeDoor, getDoorState, openDoor } from "../../tsLibs/DoorManager";

    
    let doorState;
    const setDoorState = (b:boolean)=>doorState = b;
    getDoorState(setDoorState);
    const changeState = (doorState : boolean)=> doorState ? closeDoor(setDoorState) : openDoor(setDoorState); 
    
</script>

<button on:click={()=> changeState(doorState)}>
    <div class={doorState ? "openDoor" : "closedDoor"}>
    </div>
</button>


<style>
    button{
        position: fixed;
        right: 2%;
        top: 40%;
        height: 15%;
        width: 8%;
        padding:1%;
        background-color: #00000000;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    div{
        background-size: cover;
        width: 100%;
        height: 100%;
    }

    .openDoor{
        background-image: url("../../assets/open door.png");
    }

    .closedDoor{
        background-image: url("../../assets/closed door.png");
    }

</style>