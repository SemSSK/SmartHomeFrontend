<script lang="ts">
    import { deleteUserAsync, updateUserAsync } from "../../../tsLibs/ManageUsers";
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
        <button on:click={()=>{updateUserAsync(user,users,(res)=>{users = res});updateMode = false;}}>Save</button>
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
    <button on:click={()=>deleteUserAsync(user,users,(res)=>{users = res})}>Delete</button>
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
