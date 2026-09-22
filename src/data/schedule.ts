import type { ScheduleGroup } from "@/types/schedule";

export const scheduleGroups: ScheduleGroup[] = [
  {
    id: "beginner-group",
    type: "beginner",
    entries: [
        {
          day: "tuesday",
          time: "17:45",
        },
        {
          day: "thursday",
          time: "17:45",
        },
    ],
  },
  {
    id: "advanced-group",
    type: "advanced",
    entries: [
        {
          day: "monday",
          time: "19:00",
        },
        {
          day: "tuesday",
          time: "19:00",
          note: "sparring",
        },
        {
          day: "thursday",
          time: "19:00",
        },
    ],
  },
  {
    id: "children-group",
    type: "children",
    entries: [],
  },
];