import React from 'react'
import styles from './index.less'
export default function Cmp({cmp}) {
    const {style, value} = cmp;
    console.log("cmp",cmp);
  return (
    <div className={styles.cmp} style={style}>
        {value}
    </div>
  )
}
