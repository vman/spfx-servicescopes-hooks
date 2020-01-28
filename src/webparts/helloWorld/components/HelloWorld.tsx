import * as React from 'react';
import styles from './HelloWorld.module.scss';
import { IHelloWorldProps } from './IHelloWorldProps';
import HelloUser from './HelloUser';
import { AppContext } from '../common/AppContext';

export default class HelloWorld extends React.Component<IHelloWorldProps, {}> {
  public render(): React.ReactElement<IHelloWorldProps> {
    return (
      //Wrap your topmost component with the Context provider. 
      <AppContext.Provider value={{ serviceScope: this.props.serviceScope }}>
      
        <div className={styles.helloWorld}>
      
          {/*HelloUser and any other nested components will have the serviceScope property filled.
          No matter how deeply nested the components*/}
      
          <HelloUser />
      
        </div>
      
      </AppContext.Provider>
    );
  }
}
