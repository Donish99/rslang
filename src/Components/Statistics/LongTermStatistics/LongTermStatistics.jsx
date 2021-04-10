import styles from './LongTermStatistics.module.scss';
import Chart from '../Chart/Chart';

const LongTermStatistics = ({data}) => {
    return (
        <div className={styles.wrapper}>
            <h3 className={styles.title}>Долгосрочная статистика</h3>
           <Chart 
                data={data} 
                chartName="Words for all time" 
                areaDataKey="wordsSummaryAllTime" 
                color="rgba(255, 143, 0, 1)" 
           />
           <Chart 
                data={data} 
                chartName="Words per day" 
                areaDataKey="wordsPerDay" 
                color="#82ca9d"
           />
        </div>
    )
}

export default LongTermStatistics;