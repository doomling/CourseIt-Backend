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
        res.status(500).send('Error en recibir')
      };
    }else{
      try{
        const sale = await this.saleService.getSale();
        res.status(200).json(sale);
      }catch(e){
        console.log(e);
        res.status(500).send('Error en recibir')
      };
    }
  };

  //post de sales
  async postSale(req, res){
    const { product, user, date } = req.body;
    const sale = {
      product: product,
      user: user,
      date: date
    };

    if(sale){
      try{
        await this.saleService.addSale(sale);
        res.status(200).send('Se agregó el sale con éxito');
      }catch(e){
        console.log(e);
        res.status(500).send('Error en la creación');
      };
    }else{
      res.status(400).send('Falta información');
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
        res.status(500).send('Error en recibir')
      };
  };

  //get de sales por user
  async getSaleUser(req, res){
    const { user } = req.params;
    
    try{
      const sale = await this.saleService.getSaleUser(user);
      res.status(200).json(sale);
    }catch(e){
      console.log(e);
      res.status(500).send('Error en recibir')
    };
  };
}

module.exports = SaleController;