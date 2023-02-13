export interface GlucoseReadingsObject {
  glucose_value: number;
  time: string;
}

export interface GlucoseReadingsType {
  glucose_list: [GlucoseReadingsObject];
}
