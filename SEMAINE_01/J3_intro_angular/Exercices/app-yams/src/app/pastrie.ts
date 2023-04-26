export interface Pastrie {
  id: string;
  ref: string;
  name: string;
  description: string;
  quantity: number;
  order: number;
  like?: string;
  tags?: string[];
  url?: string;
}

export interface List {
  id: string;
  list: string[];
}