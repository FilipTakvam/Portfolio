import React from 'react';
import styles from '../styles/navtrigger.module.scss';

type NavTriggerProps = {
    isMobileNavOpen: boolean,
    setIsMobileNavOpen: React.Dispatch<React.SetStateAction<boolean>>,
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>,
    isActive: boolean,
}

function NavTrigger({ isMobileNavOpen, setIsMobileNavOpen, setIsActive, isActive }: NavTriggerProps) {
    const handleToggle = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
        setIsActive(!isActive);
    };

    return (
        <div
            onClick={handleToggle}
            className={`
                ${styles.navTrigger}
                ${isActive ? styles.open : ''}
            `}
        >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
}

export default NavTrigger;
