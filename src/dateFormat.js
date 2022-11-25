import moment from 'moment';

export default function dateFormat(date) {
  return moment(date).format('YYYY-MM-DD');
}
