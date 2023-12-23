import React from 'react'
import "./Dashboard.css"
import { MdFileUpload } from "react-icons/md";
import DBCal from './DBCal';
import DBFileUpload from './DBFileUpload';
import DBDetails from './DBDetails';

function Dashboard() {
  return (
    <div className="main">
      <div className="head">
        <div className="logo">
          <img src="" alt="" />
        </div>
        <div>
          <h1>Your Next Class is Scheduled in </h1>
        </div>
        <div></div>
      </div>
      <div className="body">
        <div className="body-1">
          <div className="b-1">
            <h1>Resource</h1>
          </div>
        <DBFileUpload/>
          </div>
        <DBCal/>
        <DBDetails/>
        
      </div>
    </div>
  )
}

export default Dashboard