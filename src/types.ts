export type Column = {
  id: number;
  title: string;
};

export type Task = {
  id: number;
  columnId: number;
  content: string;
};
