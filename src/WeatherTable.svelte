<script>
    export let cities;
</script>

<table>
    <thead>
        <th class="city-name-cell">
            City
        </th>
        <th class="data-cell thin">
            one
        </th>
        <th class="data-cell thin">
            two
        </th>
        <th class="data-cell thin">
            one
        </th>
        <th class="data-cell thin">
            two
        </th>
        <th class="data-cell thin">
            one
        </th>
        <th class="data-cell thin">
            two
        </th>
        <th class="data-cell thin">
            one
        </th>
        <th class="data-cell thin">
            two
        </th>
    </thead>
    { #each cities as city }
    <tr>
        <td class="city-name-cell thin">{city.name}</td>
        <td class="data-cell">14</td>
        <td class="data-cell">1</td>
    </tr>
    { /each }
</table>

<style>
    table {
        /*for centering the table*/
        margin-left: auto;
        margin-right: auto;
        /*for that nice depth look - really subtle*/
        box-shadow: lightgray 2px 1px 10px 1px;
        border-radius: 2px;
        /*these are so the border doesnt show, but it still allows the table to have rounded corners*/
        border-collapse: separate;
        border: 1px solid lightblue;
        border-spacing: 0px;
        margin-bottom: 50px;
    }
    th {
        color: cornflowerblue;
        border: 1px solid lightblue;
    }
    thead {
        background-color: lightblue;
        color: cornflowerblue;
    }
    td, th {
        height: 50px;
    }
    tr {
        color: cornflowerblue;
    }
    .city-name-cell {
        width: 150px;
    }
    .data-cell {
        width: 60px;
    }
    tr:hover {
        color: royalblue;
    }
    tr:nth-child(odd) {
        background-color: aliceblue;
    }
    .thin {
        font-weight: lighter;
    }
</style>
