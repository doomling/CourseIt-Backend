class ProductController{
  constructor(productService) {
    this.productService = productService;
  };

  //get de productos
  async getProduct(req, res){
    const product = await this.productService.getProduct();
    try{
      res.status(200).json(product);
    }catch(e){
      console.log(e);
      res.status(500).send('Error en recibir')
    }
  };

  //post de productos
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

  //mostrar producto según el id
  async getProductId(req, res){
    const { id } = req.params; 
    const product = await this.productService.getProductId(id);
    try{
      res.status(200).json(product);
    }catch(e){
      console.log(e);
      res.status(500).send('Error en recibir')
    }
  };

  //modificación de producto según el id
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

  //filtrar producto si tiene envío gratis
  async getProductFilter(req, res){
    const product = await this.productService.filterProduct();
    try{
      res.status(200).json(product);
    }catch(e){
      console.log(e);
      res.status(500).send('Error en recibir')
    }
  };

  //agregar la propiedas discount: 0 a los que no tienen
  async putAddProperty(req, res){
    const { name, price, description, category, stock, freeshipping, discount } = req.body;
    const product = {
      name: name,
      price: price,
      description: description,
      category: category,
      stock: stock,
      freeshipping: freeshipping,
      discount: 0
    };

    if(product && !discount){
      try{
        await this.productService.addProperty(product);
        res.status(200).send('Se agregó discount con éxito');
      }catch(e){
        res.status(500).send('Error al agregar');
      }
    }else{
      res.status(400).send('Falta información');
    }
  }
}

module.exports = ProductController;