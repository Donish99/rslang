import ReactPlayer from 'react-player'
import styles from './Player.module.scss'


const Player = () => {
    return (
        <div className={styles.wrapper}>
            <ReactPlayer url='https://www.youtube.com/watch?v=f4ioMGDQblI'
                controls='true'
                width='100%'
                height='100%'
                className={styles.player}
            />
        </div>
    )
}

export default Player;