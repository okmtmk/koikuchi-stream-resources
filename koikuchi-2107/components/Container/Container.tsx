import React from 'react'
import styles from './Container.module.scss'

const container: React.FC = ({ children }) => (
    <div className={styles.container}>{children}</div>
)
export default container;