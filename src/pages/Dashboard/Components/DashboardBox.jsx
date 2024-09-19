import { Button } from '@mui/material'
import React from 'react'
import { HiDotsVertical } from 'react-icons/hi'

function DashboardBox(props) {
  return (
    <Button  className='dashboardBox' style={{backgroundImage:`linear-gradient(to right,${props.color?.[0]},${props.color?.[1]})`}}>
      <div className="d-flex w-100 justify-content-space-between">
        <div className="col1">
          <h4 className="text-white">Total Users</h4>
          <span className="text-white">277</span>
        </div>
        <div className=" ml-auto ">
          <span className="icon">
            {props.icon}
          </span>
        </div>
      </div>
      <div className="d-flex w-100 align-items-center justify-content-space-between">
        <h6 className="text-white mb-0 mt-0"> Last Month</h6>
        <span className="ml-auto toggleIcon"> <HiDotsVertical/> </span>
      </div>
    </Button>
  )
}

export default DashboardBox
