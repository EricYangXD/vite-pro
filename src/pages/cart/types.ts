export interface DateRange {
  startDate: string;
  endDate: string;
}

export interface DateRangePage extends DateRange {
  page: number;
  size: number;
}
