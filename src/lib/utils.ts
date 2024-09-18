import { clsx, type ClassValue } from "clsx";
import { DateRange } from "react-day-picker";
import { twMerge } from "tailwind-merge";
import {
  differenceInMinutes,
  differenceInHours,
  differenceInDays,
  differenceInMonths,
  differenceInYears,
  differenceInWeeks,
} from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const isMacOs = () => {
  if (typeof window === "undefined") return false;
  return window.navigator.userAgent.includes("Mac");
};

export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export const formatPassedTime = (date: Date) => {
  const now = new Date();

  const minutes = differenceInMinutes(now, date);
  const hours = differenceInHours(now, date);
  const days = differenceInDays(now, date);
  const weeks = differenceInWeeks(now, date);
  const months = differenceInMonths(now, date);
  const years = differenceInYears(now, date);

  // Determine the appropriate time unit and format the string
  let timeUntilString = "";
  if (years > 0) {
    timeUntilString = `${years} year${years > 1 ? "s" : ""} ago`;
  } else if (months > 0) {
    timeUntilString = `${months} month${months > 1 ? "s" : ""} ago`;
  } else if (weeks > 0) {
    timeUntilString = `${weeks} week${weeks > 1 ? "s" : ""} ago`;
  } else if (days > 0) {
    timeUntilString = `${days} day${days > 1 ? "s" : ""} ago`;
  } else if (hours > 0) {
    timeUntilString = `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (minutes > 0) {
    timeUntilString = `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else {
    timeUntilString = "now";
  }

  return timeUntilString;
};

interface Preset {
  name: string;
  label: string;
}

export const PRESETS: Preset[] = [
  { name: "today", label: "Today" },
  { name: "yesterday", label: "Yesterday" },
  { name: "last7", label: "Last 7 days" },
  { name: "last14", label: "Last 14 days" },
  { name: "last30", label: "Last 30 days" },
  /* { name: 'thisWeek', label: 'This Week' },
  { name: 'lastWeek', label: 'Last Week' },
  { name: 'thisMonth', label: 'This Month' },
  { name: 'lastMonth', label: 'Last Month' } */
];

export const getPresetRange = (presetName: string): DateRange => {
  const preset = PRESETS.find(({ name }) => name === presetName);
  if (!preset) throw new Error(`Unknown date range preset: ${presetName}`);
  const from = new Date();
  const to = new Date();
  const first = from.getDate() - from.getDay();

  switch (preset.name) {
    case "today":
      from.setHours(0, 0, 0, 0);
      to.setHours(23, 59, 59, 999);
      break;
    case "yesterday":
      from.setDate(from.getDate() - 1);
      from.setHours(0, 0, 0, 0);
      to.setDate(to.getDate() - 1);
      to.setHours(23, 59, 59, 999);
      break;
    case "last7":
      from.setDate(from.getDate() - 6);
      from.setHours(0, 0, 0, 0);
      to.setHours(23, 59, 59, 999);
      break;
    case "last14":
      from.setDate(from.getDate() - 13);
      from.setHours(0, 0, 0, 0);
      to.setHours(23, 59, 59, 999);
      break;
    case "last30":
      from.setDate(from.getDate() - 29);
      from.setHours(0, 0, 0, 0);
      to.setHours(23, 59, 59, 999);
      break;
    case "thisWeek":
      from.setDate(first);
      from.setHours(0, 0, 0, 0);
      to.setHours(23, 59, 59, 999);
      break;
    case "lastWeek":
      from.setDate(from.getDate() - 7 - from.getDay());
      to.setDate(to.getDate() - to.getDay() - 1);
      from.setHours(0, 0, 0, 0);
      to.setHours(23, 59, 59, 999);
      break;
    case "thisMonth":
      from.setDate(1);
      from.setHours(0, 0, 0, 0);
      to.setHours(23, 59, 59, 999);
      break;
    case "lastMonth":
      from.setMonth(from.getMonth() - 1);
      from.setDate(1);
      from.setHours(0, 0, 0, 0);
      to.setDate(0);
      to.setHours(23, 59, 59, 999);
      break;
  }

  return { from, to };
};

export const getPresetsName = (date: Date) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Check for "today"
  if (date.toDateString() === today.toDateString()) {
    return "today"
  }

  // Check for "yesterday"
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  if (date.toDateString() === yesterday.toDateString()) {
    return "yesterday"
  }

  // Check for "last7"
  const last7 = new Date(today);
  last7.setDate(last7.getDate() - 6);
  if (date >= last7 && date <= today) {
    return "7 days ago"
  }

  // Check for "last14"
  const last14 = new Date(today);
  last14.setDate(last14.getDate() - 13);
  if (date >= last14 && date <= today) {
    return "14 days ago"
  }

  // Check for "last30"
  const last30 = new Date(today);
  last30.setDate(last30.getDate() - 29);
  if (date >= last30 && date <= today) {
    return "30 days ago"
  }

  // Check for "thisWeek"
  const thisWeekStart = new Date(today);
  thisWeekStart.setDate(today.getDate() - today.getDay());
  if (date >= thisWeekStart && date <= today) {
    return "thisWeek"
  }

  // Check for "lastWeek"
  const lastWeekStart = new Date(thisWeekStart);
  lastWeekStart.setDate(lastWeekStart.getDate() - 7);
  const lastWeekEnd = new Date(thisWeekStart);
  lastWeekEnd.setDate(lastWeekEnd.getDate() - 1);
  if (date >= lastWeekStart && date <= lastWeekEnd) {
    return "lastWeek"
  }

  // Check for "thisMonth"
  const thisMonthStart = new Date(today.getFullYear(), today.getMonth(), 1);
  if (date >= thisMonthStart && date <= today) {
    return "thisMonth"
  }

  // Check for "lastMonth"
  const lastMonthStart = new Date(today.getFullYear(), today.getMonth() - 1, 1);
  const lastMonthEnd = new Date(today.getFullYear(), today.getMonth(), 0);
  if (date >= lastMonthStart && date <= lastMonthEnd) {
    return "lastMonth"
  }
};