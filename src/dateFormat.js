import moment from 'moment';

export default function dateFormat(date) {
  moment(date).format('YYYY-MM-DD');
}
