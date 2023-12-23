import React from 'react'
import "./Dashboard.css"
function DBFileUpload() {
  return (
<div className="b-1" id="temp">
            <div>
              <h1>File upload</h1>
            </div>
            <div class="file-input-wrapper">
              <label for="file-input" class="file-label">
                <span class="icon"><MdFileUpload />
                </span> Choose File
              </label>
              <input type="file" id="file-input" class="file-input" />
            </div>



          </div>


    
  )
}

export default DBFileUpload