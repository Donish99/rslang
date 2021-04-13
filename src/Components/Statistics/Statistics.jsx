import ShortTermStatistics from "./ShortTermStatistics/ShortTermStatistics"
import LongTermStatistics from "./LongTermStatistics/LongTermStatistics"
import { Container } from "react-bootstrap";

const statisticsData = require('./StatisticsData.json');

const Statistics = () => {
    return (
        <Container>
            <ShortTermStatistics gamesData={statisticsData.games} />
            <LongTermStatistics data={statisticsData.chartsData} />
        </Container>
    )
}

export default Statistics;