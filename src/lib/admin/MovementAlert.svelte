<script lang="ts">
    import { getAlert } from "../../tsLibs/MovementDetection";
    let moves = getAlert();
</script>

<table>
    <thead>
        <tr>
            <td>Movement detected At</td>
        </tr>
    </thead>
    <tbody>
        {#each moves as move}
            <tr>
                <td>{move}</td>
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