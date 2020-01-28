import * as React from 'react';
import styles from './HelloWorld.module.scss';
import { IHelloWorldProps } from './IHelloWorldProps';
import HelloUser from './HelloUser';
import { AppContext } from '../common/AppContext';

export default class HelloWorld extends React.Component<IHelloWorldProps, {}> {
  public render(): React.ReactElement<IHelloWorldProps> {
    return (
      <AppContext.Provider value={{ serviceScope: this.props.serviceScope }}>
        <div className={styles.helloWorld}>
          <HelloUser />
        </div>
      </AppContext.Provider>
    );
  }
}
