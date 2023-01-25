<script lang="ts">
    import { addUserAsync } from "../../../tsLibs/ManageUsers";
    import type { User } from "../../../tsLibs/Model/UserModel";


    export let users : Array<User>;
    let username : string = "";
    const updateAndClear = () => {
        addUserAsync(username,users,(res)=>{users = res});
        username = "";
    }
</script>


<td>
    <input type="text" placeholder="username" bind:value={username}>
</td>
<td>
    <button on:click={()=>updateAndClear()}>Add</button>
</td>

<style>
    td {
        padding: 15px;
    }

    input{
        width: 90%;
        padding: 2%;
        font-size: 18px;
        background-color: rgb(255, 255, 255);
        color: black;
        border: none;
        border-bottom: 1px solid black;
    }

    input:focus{
        outline: none;
    }

</style>
