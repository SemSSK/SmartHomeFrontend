<script lang='ts'>
    import { askForDoorToOpen } from "../../tsLibs/DoorManager";
    import ErrorPanel from "../ErrorPanel.svelte";

    let askedForDoorToOpen = false;
    let request = {
        title: "Request sent",
        msg: "Please wait for door to open"
    }

    const sendOpenDoorRequest = ()=>{
        askForDoorToOpen();
        askedForDoorToOpen = true;
    };
</script>

<button on:click={()=>sendOpenDoorRequest()}>
    <div>
    </div>
</button>
{#if askedForDoorToOpen}
    <ErrorPanel title={request.title} msg={request.msg}/>
{/if}

<style>
    button{
        position: fixed;
        right: 2vw;
        top: 40vh;
        height: 20vh;
        width: 10vw;
        padding:1%;
        background-color: #00000000;
    }

    div{
        background-image: url("../../assets/door bell.png");
        background-size: cover;
        width: 100%;
        height: 100%;
    }


</style>