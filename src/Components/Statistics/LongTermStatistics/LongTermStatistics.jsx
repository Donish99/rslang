import styles from './LongTermStatistics.module.scss';
import Chart from '../Chart/Chart';

const LongTermStatistics = ({data}) => {
    return (
        <div className={styles.wrapper}>
            <h3 className={styles.title}>Долгосрочная статистика</h3>
           <Chart 
                id='allTime'
                data={data} 
                chartName="Изученные слова за все время" 
                areaDataKey="wordsSummaryAllTime" 
                color="rgba(255, 143, 0, 1)" 
           />
           <Chart 
                id='today'
                data={data} 
                chartName="Изученные слова за день" 
                areaDataKey="wordsPerDay" 
                color="#82ca9d"
                // color="rgba(255, 143, 0, 1)" 

           />
        </div>
    )
}

export default LongTermStatistics;