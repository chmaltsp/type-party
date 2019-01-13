import { format } from 'date-fns';

export const MMMDDDYYYY = (iso: string) => {
  return format(iso, 'MMM DD, YYYY');
};
