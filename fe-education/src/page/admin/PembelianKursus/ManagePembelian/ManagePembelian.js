import React from 'react'
import Table from './Table'

function ManagePembelian(props) {
  return (
   <Table data={props.data} title={"pembelian"} tambah={"tambah-kursus"}/>
  )
}

export default ManagePembelian