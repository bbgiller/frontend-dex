export type InsulinType = {
  id: number;
  user_id: number;
  dose: number;
  time: string;
  type: string;
};

export interface InsulinsListType {
  insulins_list: [InsulinType] | null;
}
