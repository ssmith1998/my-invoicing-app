<template>
  <q-page class="q-px-md">
      <h1 class="text-center text-h3">Invoices</h1>

    <q-table
      title="Invoices"
      :rows="invoices"
      :columns="columns"
      row-key="id"
    />
  </q-page>
</template>

<script>
export default {
data () {
    return{
        columns: [
    {
    name: 'id',
    required: true,
    label: '#',
    align: 'left',
    field: row => row.id,
    sortable: true
    },
     {
    name: 'name',
    required: true,
    label: 'Name',
    align: 'left',
    field: row => row.name,
    sortable: true
    },
        ],
        invoices:[
            {
                id: 1,
                name: 'Invoice 1'

            },
        ]
    }
},
}
</script>

<style>

</style>