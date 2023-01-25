<script lang="ts">
    import { deleteUser, updateUser } from "../../../tsLibs/ManageUsers";
    import type { User } from "../../../tsLibs/Model/UserModel";
    export let user : User;
    export let users : Array<User>;
    let updateMode = false;
</script>



<td>
    {#if !updateMode}
        {user.username}
    {:else}
        <input type="text" bind:value={user.username}>
        <button on:click={()=>{users = updateUser(user,users);updateMode = false;}}>Save</button>
    {/if}
</td>
<td class="actions">
    <button on:click={()=> updateMode = !updateMode}>
        {#if !updateMode}
            Update
        {:else}
            Cancel
        {/if}
    </button>
    <button on:click={()=>users = deleteUser(user,users)}>Delete</button>
</td>


<style>

    input{
        width: 50%;
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
