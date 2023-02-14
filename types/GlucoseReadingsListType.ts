type GlucoseReadingsObject = {
  glucose_value: number;
  time: string;
};

export interface GlucoseReadingsListType {
  glucose_list: [GlucoseReadingsObject];
}
