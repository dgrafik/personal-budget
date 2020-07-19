import moment from 'moment'

export default {
  '1': {
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
  },
  '2': {
    id: '2',
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: moment(0).subtract(4, 'days').valueOf()
  },
  '3': {
    id: '3',
    description: 'Credit Card',
    note: '',
    amount: 4500,
    createdAt: moment(0).add(4, 'days').valueOf()
  }
}