import { response, request } from 'express';

// Renderiza la pagina de productos
export const pageInit = (_req = request, res = response) => {
  res.render('inicio', {
    page: 'Carga de productos',
    title: 'Nuevo producto'
  });
};