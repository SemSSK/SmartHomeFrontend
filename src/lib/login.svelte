<script lang="ts">
    import { navigate } from 'svelte-routing';
    import {login} from '../tsLibs/login';
    import type { User } from '../tsLibs/Model/UserModel';
    import ErrorPanel from './ErrorPanel.svelte';

    let username = "";
    let password = "";
    let loginFailed = false;

    const submit = (username : string,password: string) => {
        let res: User;
        login(username,password,(user)=>{res = user});
        if(!res){
            loginFailed = true;
        }
        else if(res.isAdmin){
            navigate("/admin");
        }
        else{
            navigate("/visitor")
        }
    }
    
</script>
{#if loginFailed}
    <ErrorPanel title="Login error" msg="Wrong credentials"/>
{/if}
<div class="card">
    <h1>Log in</h1>
    <input class="elem" type="text" placeholder="username" bind:value={username} on:change={e => console.log(username)}>
    <input class="elem" type="password" placeholder="password" bind:value={password} on:change={e => console.log(password)}>
    <button class="elem" on:click={()=>submit(username,password)}>submit</button>
</div>

<style>
    div{
        width: 10cm;
        background-color: #0081AF;
        border-radius: 0.3cm;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    input{
        width: 90%;
        padding: 2%;
        background-color: inherit;
        color: #FFFFFFFF;
        font-size: medium;
        border: none;
        border-bottom: solid #FEFEFF 1px;
    }
    input:focus{
        outline: none;
    }


    button{
        width: fit-content;
    }

    .elem{
        margin-top: 5%;
    }

    
</style>