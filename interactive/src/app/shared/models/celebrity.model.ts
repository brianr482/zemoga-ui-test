import { CelebrityCategory } from '../enums';

export interface Celebrity {
  id: number;
  fullName: string;
  period: string;
  category: CelebrityCategory | string;
  positiveVotes: number;
  negativeVotes: number;
  imageUrl: string;
}
