export interface Note {
  id: number;
  title: string;
  text: string;
  color: string;
  createdAt: string;
  tags?: string[];
  editedAt?: string;
}
