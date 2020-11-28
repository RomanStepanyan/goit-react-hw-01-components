import s from './Statistics.module.css'

const setBg = () => {
    return "#" + Math.floor(Math.random()*16777215).toString(16);
}

const Statistics = ({title, stats }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.list}>
        {stats.map(stat =>(
            <li key = {stat.id} className={s.item} style={{backgroundColor:setBg()}}>
                <span className={s.label}>{stat.label}</span>
                <span className={s.percentage}>{stat.percentage}</span>
            </li>
        ))}      
      </ul>
    </section>
  );
};

export default Statistics;
