import Product from "../models/productModel.js";
import HandleError from "../utils/handleError.js";
import handleAsyncError from "../../middleware/handleAsyncError.js";
import APIFunctionality from "../utils/apiFunctionality.js";
//import { Query } from "mongoose";

// http://localhost:8000/api/v1/product/686e7781cfbcd2b25cc31ab4?keyword=shirt



// Create Product
export const createProducts = handleAsyncError(async (req, res,next) => {
 
    const product = await Product.create(req.body);
    res.status(201).json({
      success: true,
      product
    });
  
});

// Get All Products
export const getAllProducts = handleAsyncError(async (req, res,next) => {
 
  const apiFunctionality= new APIFunctionality(Product.find(),req.query);
  console.log(apiFunctionality);
    // const products = await Product.find();
    // res.status(200).json({
    //   success: true,
    //   products
    // })
});

// Get Single Product
export const getSingleProduct = handleAsyncError(async (req, res,next) => {

    const product = await Product.findById(req.params.id);
     if (!product) {
      return next (new HandleError("Product Node Found",404));
    }

    res.status(200).json({
      success: true,
      product
    })
});

// Update Product
export const updateProduct = handleAsyncError(async (req, res,next) => {
 
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
    
    if (!product) {
      return next (new HandleError("Product Node Found",404));
    }

    res.status(200).json({
      success: true,
      product
    })
  
});

// Delete Product
export const deleteProduct = handleAsyncError(async (req, res,next) => {
 
    const product= await Product.findByIdAndDelete(req.params.id); 
     if (!product) {
      return next (new HandleError("Product Node Found",404));
    }
    res.status(200).json({
      success: true,
      message: "Product deleted successfully"
    })
 
});
