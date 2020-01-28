import * as React from 'react';
import { ServiceScope } from '@microsoft/sp-core-library';
import { withServiceScope } from '../common/withServiceScope';

interface IHelloUserProps {
    serviceScope: ServiceScope;
}

interface IHelloUserState {
    Name: string;
}


class HelloUser extends React.Component<IHelloUserProps, IHelloUserState> {

    constructor(props: IHelloUserProps) {
        super(props);
        this.state = {
            Name: ''
         };
    }

    public render(): React.ReactElement<{}> {

            return <div>

            </div>;
        
    }

    public componentDidMount() {
        
    }
}

export default withServiceScope(HelloUser);