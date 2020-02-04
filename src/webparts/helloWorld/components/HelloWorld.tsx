import * as React from 'react';
import { IHelloWorldProps } from './IHelloWorldProps';
import HelloUser from './HelloUser';
import { AppContext } from '../common/AppContext';

export default class HelloWorld extends React.Component<IHelloWorldProps, {}> {
  public render(): React.ReactElement<IHelloWorldProps> {
    return (
      //Wrap the topmost component with the Context provider. Also initialise the object with the serviceScope passed in from the SPFx webpart.
      <AppContext.Provider value={{ serviceScope: this.props.serviceScope }}>
      
        <div>
      
          {/*HelloUser and any other nested components will have the serviceScope property filled.
          Even if the components are deeply nested*/}
      
          <HelloUser />
      
        </div>
      
      </AppContext.Provider>
    );
  }
}
