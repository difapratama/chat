import React from 'react';
import { Button } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Comment = (props) => {
    return (
        
            <div className="card-body bg-light">
                <h3><strong>{props.user}</strong></h3>
                <br></br>
                {props.message}
                <Button color="danger" className="btn btn-danger float-right btn-sm" type="button" onClick={props.onDelete}>Hapus</Button>{' '}
            </div>
            )
        }
        
export default Comment;