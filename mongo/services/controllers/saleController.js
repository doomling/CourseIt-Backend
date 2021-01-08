class SaleController{
  constructor(saleService){
    this.saleService = saleService;
  };

  //get de sales
  async getSale(req, res){
    const { page } = req.query;
    let offset = 0;
    const limit = 3;

    if(page){
      try{
        offset = 3 * (page - 1);
        const sale = await this.saleService.getSale(offset, limit);
        res.status(200).json(sale);
      }catch(e){
        console.log(e);
        res.status(500).send('Error in receiving')
      };
    }else{
      try{
        const sale = await this.saleService.getSale();
        res.status(200).json(sale);
      }catch(e){
        console.log(e);
        res.status(500).send('Error in receiving')
      };
    }
  };

  //post de sales
  async postSale(req, res){
    const { product, user, date, sales } = req.body;
    const sale = {
      product: product,
      user: user,
      date: date,
      sales: sales
    };

    // el problema con validar usando 'sale' acâ es que siempre va a existir porque la creas arriba, te conviene hacer un check
    // antes de crear sale con los campos requeridos si o si, por ejemplo (if req.product && req.ser)
    
    if(sale){
      try{
        await this.saleService.addSale(sale);
        res.status(200).send('Sale added successfully');
      }catch(e){
        console.log(e);
        res.status(500).send('Creation error');
      };
    }else{
      res.status(400).send('Information is missing');
    };
  };

  //get de sales por id
  async getSaleId(req, res){
    const { id } = req.params;

      try{
        const sale = await this.saleService.getSaleId(id);
        res.status(200).json(sale);
      }catch(e){
        console.log(e);
        res.status(500).send('Error receiving')
      };
  };

  //get de sales por user
  async getSaleUser(req, res){
    const { user } = req.params;
    
    try{
      const sale = await this.saleService.getSaleUser(user);
      
      // acá si te molesta devolver todo el objeto podés modelarlo previo a hacer el .json(), pero así está bien
      res.status(200).json(sale);
    }catch(e){
      console.log(e);
      res.status(500).send('Error receiving')
    };
  };

  //get de productos y user ordenandos por mas vendidos
  async getTop(req, res){
    const sale = await this.saleService.getTop();
    // acá si te molesta devolver todo el objeto podés modelarlo previo a hacer el .json(), pero así está bien
    res.json(sale);
  };

}

module.exports = SaleController;
