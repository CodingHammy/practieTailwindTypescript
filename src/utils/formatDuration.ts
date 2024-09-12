//if there is less than 2 digits pad digits with leading(before) numbers eg 1 would be 01
// so only leading in the seconds unless there are hours long then both seconds and minutes
// have leading 0s

const LEADING_ZERO_FORMATTER = new Intl.NumberFormat(undefined, {
  minimumIntegerDigits: 2,
});

export function formatDuration(duration: number) {
  const hours = Math.floor(duration / 60 / 60);
  const minutes = Math.floor((duration - hours * 60 * 60) / 60);
  const seconds = duration % 60;
  if (hours > 0) {
    return `${hours}:${LEADING_ZERO_FORMATTER.format(
      minutes,
    )}:${LEADING_ZERO_FORMATTER.format(seconds)}`;
  }
  return `${minutes}:${LEADING_ZERO_FORMATTER.format(seconds)}`;
}
