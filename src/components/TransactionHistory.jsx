import { Transaction } from './Transaction';

export const TransactionHistory = ({ prop }) => {
  return (
    <table class="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {prop.map(transaction => (
        <tbody key={transaction.id}>
          <Transaction transaction={transaction} />
        </tbody>
      ))}
    </table>
  );
};
