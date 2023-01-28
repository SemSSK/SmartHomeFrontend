<script lang="ts">
    import AddLine from "./AddLine.svelte";
    import {getUsersAsync, updateUserAsync} from "../../../tsLibs/ManageUsers";
    import type {User} from "../../../tsLibs/Model/UserModel";
    import Line from "./Line.svelte";

    let users = [];
    getUsersAsync((res)=>users = res)
</script>



<table>
    <thead>
        <tr>
            <td>Username</td>
            <td>Actions</td>
        </tr>
    </thead>
    <tbody>
        {#each users as user}
            <tr>
                <Line user={user} bind:users={users}/>
            </tr>
        {/each}
        <tr>
            <AddLine bind:users={users}/>
        </tr>
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
        background-color: #f9fafb;
    }
    table tbody tr:nth-child(odd) {
        background-color: #ffffff;
    }
</style>