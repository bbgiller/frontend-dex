export interface GlucoseDataType {
  glucose_value: number;
  mmol: number;
  time: string;
  trend: number;
  trend_arrow: string;
  trend_description: string;
}
export type GlucoseDataState = GlucoseDataType | undefined;
