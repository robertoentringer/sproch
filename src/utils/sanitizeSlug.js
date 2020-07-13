export default (string = '') =>
  string
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[-_,/;'":!?()]+/g, ' ')
    .split(' ')
    .splice(0, 10)
    .join(' ')
    .trim()
    .replace(/\s+/g, '-')
    .toLowerCase()
