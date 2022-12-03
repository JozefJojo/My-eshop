import React, { Component } from 'react';


class ListProduktComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            products:[]
        }
    }
  

    render() {
        return (
            <div>
                <h2 className='text-center'>Product List</h2>
                <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>Product Id</th>
                                <th>Product Title</th>
                                <th>Product Description</th>
                                <th>Product thumbnail</th>
                                <th>Product Category Id</th>
                                <th>Product Price</th>
                                <th>Product Producer Id</th>
                            </tr>
                        </thead>
                            <tbody>
                                this.state.products.map(
                                    product =>
                                    <tr key = {product.id}>
                                        <td>{product.title}</td>
                                        <td>{product.description}</td>
                                        <td>{product.thumnail}</td>
                                        <td>{product.categoryId}</td>
                                        <td>{product.price}</td>
                                        <td>{product.producerId}</td>
                                    </tr>
                                )
                            </tbody>
                    </table>

                </div>
            </div>
        )
    }
}

export default ListProduktComponent;