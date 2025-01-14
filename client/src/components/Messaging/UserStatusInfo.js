import React, {useState} from 'react';
import styles from './styles/UserStatusInfo.module.css';
import ThemeToggle from '../ThemeToggle/index.js';
import LocKRoom from '../LookRoom/index';
import imageRetryIcon from './assets/image-retry.png';
import DeleteChatLink from '../DeleteChatLink';


export const UserStatusInfo = ({online, getSetUsers, channelID, sender, handleDeleteLink}) => {
    const [loading, setLoading] = useState(false);

    const fetchKeyAgain = async () => {
        if (loading) return;

        setLoading(true);
        await getSetUsers(channelID);
        setLoading(false);
    };

    return (

        <div className={styles.userInfo}>
            {online ? (
                <span className={styles.userInfoOnline}>
          Alice {'<'}Online{'>'}
        </span>
            ) : (
                <div className={styles.userOnlineWaiting}>
                    Waiting for Alice to join...
                    <img
                        className={
                            loading ? `${styles.retryImageIcon} ${styles.loading}` : `${styles.retryImageIcon}`
                        }
                        src={imageRetryIcon}
                        onClick={fetchKeyAgain}
                        alt="retry-icon"
                    />
                </div>
            )}
            <DeleteChatLink handleDeleteLink={handleDeleteLink}/>
            <ThemeToggle/>
            <LocKRoom   channelId={channelID} sender={sender}/>
        </div>
    );
};
