class ProductController{
  constructor(productService) {
    this.productService = productService;
  };

  //get de productos
  //Nuestra cantidad de productos esta escalando mucho por lo que queremos establecer paginas de a 3 productos. Para eso vamos a modificar nuestro endpoint [GET] /products para que este limitado a los primeros tres productos.
  //Para pasar de pagina vamos a usar el query param "page"
  async getProduct(req, res){
    const { page } = req.query;
    let offset = 0;
    let limit = 3;

    if(page){
      try{
        offset = 3 * (page - 1);
        const product = await this.productService.getProduct(offset, limit);
        res.status(200).json(product);
      }catch(e){
        console.log(e);
        res.status(500).send('Error en recibir')
      };
    }else{
      try{
        const product = await this.productService.getProduct();
        res.status(200).json(product);
      }catch(e){
        console.log(e);
        res.status(500).send('Error en recibir')
      };
    };
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
      };
    }else{
      res.status(400).send('Falta información');
    };
  };

  //mostrar producto según el id
  async getProductId(req, res){
    const { id } = req.params; 
    
    try{
      const product = await this.productService.getProductId(id);
      res.status(200).json(product);
    }catch(e){
      console.log(e);
      res.status(500).send('Error en recibir')
    };
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
      };
    }else{
      res.status(400).send('Falta información');
    };
  };

  //filtrar producto si tiene envío gratis
  async getProductFilter(req, res){
    try{
      const product = await this.productService.filterProduct();
      res.status(200).json(product);
    }catch(e){
      console.log(e);
      res.status(500).send('Error en recibir')
    };
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
      };
    }else{
      res.status(400).send('Falta información');
    };
  };
};

module.exports = ProductController;