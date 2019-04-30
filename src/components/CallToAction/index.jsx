import * as React from 'react';

import { Link as RouterLink } from 'react-router-dom';

const styles = require("./CallToAction.less");

export const Container = ({ children }) => (
  <div className={styles.container}>
    <div className={styles.innerContainer}>
    {children}
    </div>
  </div>
);



export const Link = ({ children, ...props }) => (
    <RouterLink className={styles.link} {...props} >
        {children}
    </RouterLink>
);
