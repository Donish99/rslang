import ShortTermStatisticsCard from './ShortTermStatisticsCard'

import styles from './ShortTermStatistics.module.scss';

const statisticsData = require('../StatisticsData.json')

const ShortTermStatistics = () => {

    const games = statisticsData.games;
    const allWordsPerDay = Number(games.savanna.learntWords) + Number(games.audioCall.learntWords)
        + Number(games.sprint.learntWords) + Number(games.listening.learntWords)
    const persejtRightAnswersPerDay = (Number(games.savanna.percentRightAnswers) + Number(games.audioCall.percentRightAnswers)
        + Number(games.sprint.percentRightAnswers) + Number(games.listening.percentRightAnswers)) / 4
    return (
        <div className={styles.wrapper}>
            <h3 className={styles.title}>Краткосрочная статистика</h3>
            <div className={styles.allShortStat}>
                <div className={styles.subtitle}>
                    <span className={styles.name}>
                        Количество изученных слов за день:
                    </span>
                    {allWordsPerDay}
                </div>
                <div className={styles.subtitle}>
                    <span className={styles.name}>
                        Процент правильных ответов за день:
                    </span>
                    {persejtRightAnswersPerDay}%
                </div>
            </div>
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