class ProductController{
  constructor(productService) {
    this.productService = productService;
  };

  async getProduct(req, res){
    const product = await this.productService.getProduct();
    try{
      res.status(200).json(product);
    }catch(e){
      console.log(e);
      res.status(500).send('Error en recibir')
    }
  };

  async postProduct(req, res){
    const { name, price, description, category, stock, freeshipping } = req.body;
    const product = {
      name: name,
      price: price,
      description: description,
      category: category,
      stock: stock,
      freeshipping: freeshipping
    };

    if(product){
      try{
        await this.productService.addProduct(product);
        res.status(200).send('Se agrego el producto con éxito');
      }catch(e){
        console.log(e);
        res.status(500).send('Error en la creación');
      }
    }else{
      res.status(400).send('Falta información');
    }
  };

  async putProduct(req, res){
    const { name, price, description, category, stock, freeshipping } = req.body;
    const { id } = req.params;
    const product = {
      name: name,
      price: price,
      description: description,
      category: category,
      stock: stock,
      freeshipping: freeshipping
    };

    if(id && product){
      try{
        await this.productService.modifyProduct(id, product);
        res.status(200).send(`Se modificó con éxito el id ${id} por el producto ${name}`);
      }catch(e){
        console.log(e);
        res.status(500).send('Error en la modificación');
      }
    }else{
      res.status(400).send('Falta información');
    }
  };

  async getProductFilter(req, res){
    const product = await this.productService.filterProduct();
    try{
      res.status(200).json(product);
    }catch(e){
      console.log(e);
      res.status(500).send('Error en recibir')
    }
  }
}

module.exports = ProductController;