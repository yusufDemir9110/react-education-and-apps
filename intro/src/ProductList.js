import React, { Component } from 'react'
import { Table } from 'reactstrap'

export default class ProducList extends Component {

    render() {
        return (
            <div>
                <h3>{this.props.info.title}-{this.props.currentCategory}</h3>
                <Table>
                    <thead>
                        <tr>
                            <th>Category Name</th>
                            <th>productName</th>
                            <th>quantityPerUnit</th>
                            <th>unitPrice</th>
                            <th>unitsInStock</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.products.map(product => (
                            <tr key={product.id}>
                                <td>{product.categoryId}</td>
                                <td>{product.productName}</td>
                                <td>{product.quantityPerUnit}</td>
                                <td>{product.unitPrice}</td>
                                <td>{product.unitsInStock}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                    

                </Table>
            </div>
        )
    }
}
