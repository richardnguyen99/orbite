export interface TaskProps {
  name: string;
  category: string;
  prior: number;

  finished: boolean;
  notes?: string;
}

export interface TaskItemProps {
  task: TaskProps;
}
