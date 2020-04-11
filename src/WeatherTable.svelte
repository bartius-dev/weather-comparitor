<script>
    export let cities;
</script>

<table>
    <thead>
        <th class="city-name-cell">

        </th>
        <th class="data-cell">
            one
        </th>
        <th class="data-cell">
            two
        </th>
        <th class="data-cell">
            one
        </th>
        <th class="data-cell">
            two
        </th>
        <th class="data-cell">
            one
        </th>
        <th class="data-cell">
            two
        </th>
        <th class="data-cell">
            one
        </th>
        <th class="data-cell">
            two
        </th>
    </thead>
    { #each cities as city }
    <tr>
        <td class="city-name-cell">{city}</td>
        <td class="data-cell">14</td>
        <td class="data-cell">1</td>
    </tr>
    { /each }
</table>

<style>
    table {
        margin-left: auto;
        margin-right: auto;
        border-collapse: collapse;
        border-radius: 2px;
        box-shadow: lightgray 1px 1px 5px 1px;
    }
    th {
        color: cornflowerblue;
    }
    tr {
        background-color: lightblue;
        color: cornflowerblue;
        border-radius: 2px;
    }
    td, th {
        height: 50px;
    }
    tr:hover {
        color: royalblue;
    }
    .city-name-cell {
        width: 150px;
    }
    .data-cell {
        width: 60px;
    }
</style>
