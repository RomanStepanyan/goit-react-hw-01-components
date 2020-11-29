import s from './TransactionHistory.module.css'

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr>
          <th className={s.headTitle}>Type</th>
          <th className={s.headTitle}>Amount</th>
          <th className={s.headTitle}>Currency</th>
        </tr>
      </thead>
      <tbody className={s.tbody}>
        {items.map((item) => (
          <tr key = {item.id} className={s.row}>
            <td className={s.type}>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
