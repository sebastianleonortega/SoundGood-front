export interface TestLeftRightInterface {
}

export type SalesMonthlyResponse = SalesByMonth[];

export interface SalesByMonth {
  ear: 'Derecho' | 'Izquierdo';
  total_sales: number;
}
