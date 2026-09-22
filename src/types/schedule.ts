export type ScheduleGroupType =
  | "beginner"
  | "advanced"
  | "children";

export type ScheduleDay =
  | "monday"
  | "tuesday"
  | "thursday";

export type ScheduleNote =
  | "sparring";

export interface ScheduleEntry {
  day: ScheduleDay;
  time: string;
  note?: ScheduleNote;
}

export interface ScheduleGroup {
  id: string;
  type: ScheduleGroupType;
  entries: ScheduleEntry[];
}