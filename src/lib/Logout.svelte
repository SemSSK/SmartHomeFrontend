<script>
    import {Link, navigate} from 'svelte-routing';
    const onClick = ()=>{
        localStorage.removeItem("Auth");
        navigate("/");
    }
</script>

<div class="appbar">
    <button class="logout" on:click={()=>onClick()}>Logout</button>
</div>

<style>
    .logout{
        background-color: rgb(153, 1, 1);
    }

    .logout:hover{
        background-color: red;
        border-radius: 0%;
    }

    .appbar{
        position: absolute;
        top: 0;
        left: 0;
        width:98vw;
        height:1.5cm;
        display: flex;
        flex-direction: row;
        justify-content: end;
        align-items: center;
    }
</style>