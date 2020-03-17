const applyFilters = (array, filterObject) => {
  return array.filter(row => {
    const stringStatement =
      row.email.includes(filterObject.string) ||
      row.name.includes(filterObject.string) ||
      row.address.includes(filterObject.string);
    return (
      stringStatement &&
      row.active === !filterObject.boolean &&
      filterObject.weekday.includes(row.weekday)
    );
  });
};

export default applyFilters;
