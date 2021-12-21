import axios from 'axios'
import React,{useEffect} from 'react'
import ProductComponent from './ProductComponent'
import {setProducts} from '../Redux/actions/productAction'
import { useDispatch, useSelector } from 'react-redux'

function ProductListing() {
    const dispatch = useDispatch()
    
    const fetchProducts = async () =>{
        const response =  await axios.get("https://fakestoreapi.com/products").catch((error)=>{
            alert(error)
        })
        dispatch(setProducts(response.data))
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    return (
        <div className='ui grid container'>
            <ProductComponent />
        </div>
    )
}

export default ProductListing

