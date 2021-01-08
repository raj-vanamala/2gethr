import React from "react"
import '../Styles/ImageAndInfo.css'
export default function ImageAndInfo(props) {

    return (
        <div key={props.imageObject.key} className="image-container">
            <img src={props.imageObject.source} alt="" />
                {
                    (props.imageObject.name !== "")?
                        <div className="image-info">
                            <h1>{props.imageObject.name}</h1>
                            <p>{props.imageObject.info}</p>
                            </div>
                            : 
                            ""
                }
        </div>
    )

}