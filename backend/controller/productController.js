import Product from "../models/productModel.js";
import HandleError from "../utils/handleError.js";
import handleAsyncError from "../../middleware/handleAsyncError.js";
// Create Product
export const createProducts = async (req, res) => {
 
    const product = await Product.create(req.body);
    res.status(201).json({
      success: true,
      product
    });
  
};

// Get All Products
export const getAllProducts = async (req, res) => {
 
    const products = await Product.find();
    res.status(200).json({
      success: true,
      products
    })
};

// Get Single Product
export const getSingleProduct = async (req, res,next) => {

    const product = await Product.findById(req.params.id);
     if (!product) {
      return next (new HandleError("Product Node Found",404));
    }

    res.status(200).json({
      success: true,
      product
    })
};

// Update Product
export const updateProduct = async (req, res,next) => {
 
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
  
};

// Delete Product
export const deleteProduct = async (req, res,next) => {
 
    const product= await Product.findByIdAndDelete(req.params.id); 
     if (!product) {
      return next (new HandleError("Product Node Found",404));
    }
    res.status(200).json({
      success: true,
      message: "Product deleted successfully"
    })
 
};
