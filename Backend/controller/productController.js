const productModel = require("../model/productModel.js")

const getProduct = async (req, res) => {
    let name = req.body.name
    let price = req.body.price
    let brand = req.body.brand
    let image = req.body.image

    const product =  productModel.create({
        name: name,
        price: price,
        brand: brand,
        image: image
    })
    res.send("data save");

}
const DisplayProduct= async(req,res)=>{
  let product = await productModel.find().then((data)=>{
    res.send(data)
  });
}

module.exports ={
  getProduct,
  DisplayProduct
}
