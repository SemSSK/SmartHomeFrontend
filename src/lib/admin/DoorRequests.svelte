<script lang="ts">
    import { onMount } from "svelte";
    import { getRequest } from "../../tsLibs/DoorRequestManage";
    import type { DoorRequest } from "../../tsLibs/Model/DoorReqModel";


    let requests : Array<DoorRequest>= [];
    onMount(()=>{
        const interval = setInterval(()=>{
            getRequest((arr)=> requests = arr);
        },500)
        return () => clearInterval(interval);
    })
</script>

<table>
    <thead>
        <tr>
            <td>By</td>
            <td>At</td>
        </tr>
    </thead>
    <tbody>
        {#each requests as request}
            <tr>
                <td>{request.username}</td>
                <td>{request.time}</td>
            </tr>
        {/each}
    </tbody>
</table>

<style>
    table {
        border-collapse: collapse;
        width: 50vw;
    }
    table :global(td) {
        padding: 15px;
    }
    table thead :global(td) {
        background-color: #54585d;
        color: #ffffff;
        font-weight: bold;
        font-size: 20px;
        border: 1px solid #54585d;
    }
    table tbody :global(td) {
        color: #636363;
        font-size: 18px;
        border: 1px solid #dddfe1;
    }
    table tbody tr {
        background-color: #d3d3d3;
    }
    table tbody tr:nth-child(odd) {
        background-color: #d3d3d3;
    }
</style>