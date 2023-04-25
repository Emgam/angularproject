export class Order {
  id: string;
  orderNumber: number;
  date: Date;
  total: number;
  status: string;

  constructor(id: string, orderNumber: number, date: Date, total: number, status: string) {
    this.id = id;
    this.orderNumber = orderNumber;
    this.date = date;
    this.total = total;
    this.status = status;
  }
}
