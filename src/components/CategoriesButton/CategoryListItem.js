import React, { PureComponent } from 'react'
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'

class CategoryListItem extends PureComponent{

    render() {
        return (
            <Button className="btn btn-xs btn-success">
                {this.props.value}
            </Button>
        );
    }

}

export default CategoryListItem