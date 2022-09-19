export default function orderByProps(object, arrProps) {
  const arraySortProps = [];
  const arrayWithArrProps = [];

  arrProps.forEach((key) => {
    if (key in object) {
      arrayWithArrProps.push({
        key,
        value: object[key],
      });
    }
  });

  for (const key in object) {
    if (!arrProps.includes(key)) {
      arraySortProps.push({
        key,
        value: object[key],
      });
    }
  }

  arraySortProps.sort((a, b) => {
    if (a.key < b.key) {
      return -1;
    }
    return 1;
  });

  return [...arrayWithArrProps, ...arraySortProps];
}
