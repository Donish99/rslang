import ShortTermStatisticsCard from './ShortTermStatisticsCard'

import styles from './ShortTermStatistics.module.scss';

const statisticsData = require('../StatisticsData.json')

const ShortTermStatistics = () => {

    const games = statisticsData.games;

    return (
        <div className={styles.wrapper}>
            <h4>Краткосрочная статистика</h4>
            <div className={styles.statisticsContainer}>
                <ShortTermStatisticsCard
                    title={games.savanna.title}
                    longestRightAnswer={games.savanna.longestRightAnswer}
                    learntWords={games.savanna.learntWords}
                    percentRightAnswers={games.savanna.percentRightAnswers}
                />
                <ShortTermStatisticsCard
                    title={games.audioCall.title}
                    longestRightAnswer={games.audioCall.longestRightAnswer}
                    learntWords={games.audioCall.learntWords}
                    percentRightAnswers={games.audioCall.percentRightAnswers}
                />
                <ShortTermStatisticsCard
                    title={games.sprint.title}
                    longestRightAnswer={games.sprint.longestRightAnswer}
                    learntWords={games.sprint.learntWords}
                    percentRightAnswers={games.sprint.percentRightAnswers}
                />
                <ShortTermStatisticsCard
                    title={games.listening.title}
                    longestRightAnswer={games.listening.longestRightAnswer}
                    learntWords={games.listening.learntWords}
                    percentRightAnswers={games.listening.percentRightAnswers}
                />
            </div>
        </div>
    )
}

export default ShortTermStatistics;