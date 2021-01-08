import React, { useState } from "react"
import {Button,Form,Col,Modal,Row } from 'react-bootstrap';
import '../Styles/Image.css'
import { connect } from 'react-redux'
import { addInformation } from '../Actions/ImageInformation_Actions'

function Image({image,addInformation}) {

    const [show,setShow] = useState(false);
    const [imageName,setImageName] = useState("");
    const [ImageInfo,setImageInfo] = useState("");

    function handleShow () {
        setShow(true)
    }

    function handleClose() {
        setImageName("")
        setImageInfo("")
        setShow(false);
    }

    function changeValue(event) {

        let target = event.target;

        if(target.name === "imageName")
            setImageName(target.value)

        else if(target.name === "ImageInfo")
            setImageInfo(target.value)
    }

    function saveInformation() {
        addInformation(image,imageName,ImageInfo);
        handleClose();
    }
    return (
        <>
        <img alt="" src={image.source} onClick={handleShow}/>
        <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Add Information
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Row>
                                <Col lg={12}>
                                    <Form.Group controlId="formBasicImageName">
                                        <Form.Label>Image Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Image Name" name = 'imageName'  value = {imageName} onChange={changeValue}/>
                                    </Form.Group>
                                </Col>
                                
                                <Col lg={12}>
                                        <Form.Group controlId="formBasicImageInfo">
                                            <Form.Label>Image Info</Form.Label>
                                            <Form.Control type="text" placeholder="Enter ImageInfo" name = 'ImageInfo'  value = {ImageInfo} onChange={changeValue}/>
                                        </Form.Group>
                                </Col>
                            </Row>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="outline-danger" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="outline-info" onClick={saveInformation}>
                            Save
                        </Button>
                    </Modal.Footer>
        </Modal>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {

    return {
        addInformation : (image,imageName,ImageInfo) => dispatch(addInformation(image,imageName,ImageInfo))
    }
}

export default connect(null,mapDispatchToProps)(Image)