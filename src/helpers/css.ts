type TClassNamesProps = boolean | undefined | null | 0;

export function classNames(...classes: (string | TClassNamesProps)[]): string {
  return classes.filter(Boolean).join(' ');
}
