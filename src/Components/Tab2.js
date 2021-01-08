import React from "react"
import { connect } from 'react-redux'
import ImageAndInfo from "./ImageAndInfo"

function Tab2(props) {
    return (
        <div className="gallery-container">
            <div className="gallery-column">
                {
                    props.column1Images.map((imageObject)=><ImageAndInfo imageObject={imageObject} />)
                }
            </div>
            <div className="gallery-column">
                {
                    props.column2Images.map((imageObject)=><ImageAndInfo imageObject={imageObject} />)
                }
            </div>
            <div className="gallery-column">
                {
                    props.column3Images.map((imageObject)=><ImageAndInfo imageObject={imageObject} />)
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {

    return {

        column1Images : state.column1Images,
        column2Images : state.column2Images,
        column3Images : state.column3Images

    }
}

export default connect(mapStateToProps)(Tab2)