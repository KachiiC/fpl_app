import React from 'react'
// Components
import CircularProgress from '@material-ui/core/CircularProgress'
import ReportProblemIcon from '@material-ui/icons/ReportProblem';

const SiteRender = (props) => {

    const renderLogic = (props.data.IsFetching)?(
        <ReportProblemIcon />
      ):(
          (props.data.isDisplayable) ? (
            props.component
          ):(
              <div>
                  <h1>Loading Please Wait...</h1>
                  <CircularProgress />
              </div>
          )
        )

    return renderLogic
}

export default SiteRender
