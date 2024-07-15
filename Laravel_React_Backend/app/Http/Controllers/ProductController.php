<?php

namespace App\Http\Controllers;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
  function addProduct(Request $request){
      $product = new Product();
      $product->name = $request->name;
      $product->price = $request->price;
      $product->description = $request->description;
      $product->image =$request->file('image')->store('products'); 
      $product->save();
      return $product;
  }

  function getProducts(){
       return  Product::all(); 
  }

  function deleteProduct($id){
    $myData=Product::find($id);
    $myData->delete();
    if($myData)
    {
      return ['result'=>'Product has been deleted'];
    }
    else{
      return ['result'=>'Product has not been deleted'];
    }
}

function editProduct( $id){
  $myData = Product::find($id);
  return $myData;
}
function UpdateProduct(Request $request, $id){
  $data = Product::find($id)->update([
       'name'=>$request->name,
       'image'=>$request->file('image')->store('products'),
       'price'=>$request->price,
       'description'=>$request->description
   ]);

   if($data){
       return ['result'=>'Product has been Updated'];
   }
   else{
       return ['result'=>'Product has not been Updated'];
   }
}

}

