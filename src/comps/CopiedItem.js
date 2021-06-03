import React from 'react';
import "./copiedItem.css";
import Button from "@material-ui/core/Button"
import { MdDelete} from "react-icons/md"

const CopiedItem = ({link}) => {
    return (
        <div class ="copied_item">
            <p><a href ={link} rel="noreferrer" target = "_blank">{link}</a></p>
            <div className = "icons">
                <Button className = "cpy_btn" variant="contained" color="secondary">
                    Copy Link
                </Button>
                <MdDelete className ="delete_icon" />
            </div>
        </div>
    )
}

export default CopiedItem
