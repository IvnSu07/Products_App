/**
 * Product Class
 */
export class Product {
  /**
   *
   * @param {string} name El Nombre de Producto
   * @param {number} price El Precio del Producto
   * @param {number} year EL año de creacion del producto
   */
  constructor(name, price, year) {
    this.name = name;
    this.price = price;
    this.year = year;
  }
}
