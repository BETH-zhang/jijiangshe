import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

function IndexPage() {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to jijiangshe!</h1>
      <div className={styles.welcome} />

    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
