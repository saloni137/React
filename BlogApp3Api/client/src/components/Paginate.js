import React, { Component } from 'react';
import '../App.css'

class Paginate extends Component {
    render() {
        return (
            <div className="Paginate">
            <div className="pagination">
            <span>&laquo;</span>
            <span className="active">1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>&raquo;</span>
            </div>
            </div>
        )
    }
}

export default  Paginate;
