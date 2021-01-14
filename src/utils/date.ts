export const dateFromString = (input: string): Date => {
  const [_, rawYear, rawMonth] = /(\d{4})-(\d{2})/.exec(input) ?? [];

  if (!rawYear || !rawMonth) {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth());
  }

  const year = +rawYear;
  const monthIndex = +rawMonth - 1;

  return new Date(year, monthIndex);
};

export const stringFromDate = (input: Date): string => {
  return input.toISOString().slice(0, 7);
};
