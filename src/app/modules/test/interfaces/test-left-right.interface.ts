export interface TestLeftRightInterface {
}

export type SalesMonthlyResponse = SalesByMonth[];

export interface SalesByMonth {
  ear: 'Derecho' | 'Izquierdo';
  total_sales: number;
}

export interface UserResponseData {
  name: string; // El nombre del usuario
  total_sales: number; // La respuesta del usuario
}
