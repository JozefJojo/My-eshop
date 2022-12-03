import React, { Component } from 'react';
import ProductService from '../services/ProductService';

class ListProductsComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            products:[]
        }
    }

    componentDidMount(){
        ProductService.getProducts().then((res) =>{
              this.setState({products: res.data});   
        });
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
                                {
                                    this.state.products.map(
                                        product =>
                                        <tr key = {product.id}>
                                            <td>{product.id}</td>
                                            <td>{product.title}</td>
                                            <td>{product.description}</td>
                                            <td>{product.thumnail}</td>
                                            <td>{product.category_id}</td>
                                            <td>{product.price}</td>
                                            <td>{product.producer_id}</td>
                                        </tr>)
                                }
                            </tbody>
                    </table>

                </div>
            </div>
        );
    }
}

export default ListProductsComponent;