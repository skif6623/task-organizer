import { formatDistanceToNow } from 'date-fns';

export const formatDate = changeDate => {
  const date = new Date(changeDate);
  return formatDistanceToNow(date, { addSuffix: true });
};
