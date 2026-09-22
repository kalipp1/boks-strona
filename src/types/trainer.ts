export type TrainerContentKey =
  | "trainerOne"
  | "trainerTwo"
  | "trainerThree";

export interface Trainer {
  id: string;
  contentKey: TrainerContentKey;
  image: string | null;
}