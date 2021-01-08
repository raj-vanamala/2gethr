import React from "react"
import '../Styles/Tab1.css'
import Image from './Image'
import { connect } from 'react-redux'

function Tab1(props) {
    return (
        <div className="gallery-container">
            <div className="gallery-column">
                {
                    props.column1Images.map((imageObject)=><Image image={imageObject} key={imageObject.key}/>)
                }
            </div>
            <div className="gallery-column">
                {
                    props.column2Images.map((imageObject)=><Image image={imageObject} key={imageObject.key}/>)
                }
            </div>
            <div className="gallery-column">
                {
                    props.column3Images.map((imageObject)=><Image image={imageObject} key={imageObject.key}/>)
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

export default connect(mapStateToProps)(Tab1)