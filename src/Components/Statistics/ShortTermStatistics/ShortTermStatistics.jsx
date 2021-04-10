import ShortTermStatisticsCard from '../ShortTermStatisticCard/ShortTermStatisticsCard'

import styles from './ShortTermStatistics.module.scss';

const ShortTermStatistics = ({gamesData}) => {

    const allWordsPerDay = Number(gamesData.savanna.learntWords) + Number(gamesData.audioCall.learntWords)
        + Number(gamesData.sprint.learntWords) + Number(gamesData.listening.learntWords)
    const persejtRightAnswersPerDay = (Number(gamesData.savanna.percentRightAnswers) + Number(gamesData.audioCall.percentRightAnswers)
        + Number(gamesData.sprint.percentRightAnswers) + Number(gamesData.listening.percentRightAnswers)) / 4
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
                    title={gamesData.savanna.title}
                    longestRightAnswer={gamesData.savanna.longestRightAnswer}
                    learntWords={gamesData.savanna.learntWords}
                    percentRightAnswers={gamesData.savanna.percentRightAnswers}
                />
                <ShortTermStatisticsCard
                    title={gamesData.audioCall.title}
                    longestRightAnswer={gamesData.audioCall.longestRightAnswer}
                    learntWords={gamesData.audioCall.learntWords}
                    percentRightAnswers={gamesData.audioCall.percentRightAnswers}
                />
                <ShortTermStatisticsCard
                    title={gamesData.sprint.title}
                    longestRightAnswer={gamesData.sprint.longestRightAnswer}
                    learntWords={gamesData.sprint.learntWords}
                    percentRightAnswers={gamesData.sprint.percentRightAnswers}
                />
                <ShortTermStatisticsCard
                    title={gamesData.listening.title}
                    longestRightAnswer={gamesData.listening.longestRightAnswer}
                    learntWords={gamesData.listening.learntWords}
                    percentRightAnswers={gamesData.listening.percentRightAnswers}
                />
            </div>
        </div>
    )
}

export default ShortTermStatistics;