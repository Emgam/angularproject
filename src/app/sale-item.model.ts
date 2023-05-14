export class SaleItem {
  id: string;
  month: string;
  year: number;
  revenue: number;

  constructor(id: string, month: string, year: number, revenue: number) {
    this.id = id;
    this.month = month;
    this.year = year;
    this.revenue = revenue;
  }
}
