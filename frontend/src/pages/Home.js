import React, { Component } from 'react';
import ProductService from '../services/ProductService';


class Home extends Component {

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
                                <th>Product Producer Name</th>
                            </tr>
                        </thead>
                            <tbody>
                            {/* <tr key = {1}>
                                <td>{1}</td>
                                <td>{"auto"}</td>
                                <td>{"porsche"}</td>
                                <td>{""}</td>
                                <td>{2}</td>
                                <td>{100}</td>
                                <td>{"porsche"}</td>
                                <td><button onClick={this.props.navigation.navigate(`/products/${1}`)}>Buy</button> </td>
                            </tr> */}


                                {/* {
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
                                            <td><button onClick={this.props.navigation.navigate(`/products/${product.id}`)}>Buy</button> </td>
                                        </tr>)
                                } */}
                            </tbody>
                    </table>

                </div>
            </div>
        );
    }
}

export default Home;