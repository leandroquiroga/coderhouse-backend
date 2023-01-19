import { response, request } from 'express';
import { producto } from '../../app.js';

export const postNewProduct = async (req = request, res = response) => {
  try {

    const data = req.body
    const { name, price, url_imagen } = data;
    
    if (!name) {
      return res.status(400).json({
        status: false,
        mensaje: 'El campo nombre es obligatorio'
      });
    }

    if(!price){
      return res.status(400).json({
        status: false,
        mensaje: 'El campo precio es obligatorio'
      });
    };

    if(!url_imagen){
      return res.status(400).json({
        status: false,
        mensaje: 'URL es obligatoria'
      });
    };


    const info = await producto.newProduct(data);

    res.status(200).json({
    status: true,
    info,
    mensaje: `Se creo un nuevo producto ${info.name}`
  });
  
  } catch (error) {
    res.status(500).json({
      status: false,
      mensaje: 'Ups! Comuniquese con el administrador'
    });
  }
};