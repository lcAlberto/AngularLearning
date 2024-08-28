import { IFilterOptions } from '../src/app/interfaces/filter-interface';
import { IUser } from '../src/app/interfaces/user-interface';

const filterByStatus = (status: boolean | undefined, originalList: IUser[]) => {
  if (status === undefined) return originalList;
  console.log(originalList, status);
  return originalList.filter((item) => item.active === status);
};

const filterByDate = (
  start: Date | undefined,
  end: Date | undefined,
  originalList: IUser[]
) => {
  if (!start || !end) return originalList;
  return originalList.filter((item) => {
    const itemDate = new Date(item.created_at);
    return itemDate > start && itemDate < end;
  });
};

const filterByName = (term: string, originalList: IUser[]) => {
  if (term.length === 0) return originalList;
  return originalList.filter((item) =>
    item.name.toLowerCase().includes(term.toLocaleLowerCase())
  );
};

export const FilterUserList = (filter: IFilterOptions, originalList: IUser[]) => {
  let filtered = [];

  filtered = filterByName(filter.name, originalList);
  filtered = filterByDate(filter.startDate, filter.endDate, filtered);
  filtered = filterByStatus(filter.status, filtered);

  return filtered;
};
