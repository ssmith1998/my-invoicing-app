<template>
  <q-page class="q-px-md">
      <h1 class="text-center text-h3">Invoices</h1>

    <q-table
      title="Invoices"
      :rows="invoices"
      :columns="columns"
      row-key="id"
    >
    <template v-slot:top>
      <q-icon name="add_circle" style="font-size:45px; cursor:pointer;" color="positive" @click="addInvoiceDialog = true"/>
    </template>
    
    </q-table>
    <q-dialog v-model="addInvoiceDialog">
      <q-card style="width:90%;" >
          <q-card-section>
            <h1 class="text-h5 q-ma-none">Add Invoice</h1>
          </q-card-section>
          <q-card-section>
            <form>
            <div class="row">
              <div class="col-xs-12 col-sm-4">
                <q-select
                label="Customer"
                v-model="invoice.customer"
                >

                </q-select>
              </div>
              <div class="col-xs-12 col-sm-4">
                <q-select
                label="Template"
                v-model="invoice.template"
                >

                </q-select>
              </div>
              <div v-if="!invoice.template" class="col-xs-12 col-sm-4">
                <q-input
                label="Name"
                v-model="invoice.name"
                ></q-input>
              </div>
              <div class="col-xs-12 col-sm-4">
                <q-input
                label="Due Date"
                v-model="invoice.due_date"
                type="date"
                ></q-input>
              </div>
            </div>
            </form>
          </q-card-section>

      </q-card>


    </q-dialog>
  </q-page>
</template>

<script>
export default {
data () {
    return{
      invoice: {
        customer:'',
        template:'',
        name:'',
        due_date: ''
      },
      addInvoiceDialog: false,
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
.q-table__top  {
  justify-content:flex-end;
}
</style>