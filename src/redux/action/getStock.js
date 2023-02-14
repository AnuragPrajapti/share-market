import * as type from './type';

export function getStock(users) {
  return { 
    type: type.GET_STOCK,
    payload : users,
  }
}