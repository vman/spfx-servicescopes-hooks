import * as React from 'react';
import { ServiceScope } from '@microsoft/sp-core-library';
import { withServiceScope } from '../common/withServiceScope';
import { MSGraphClientFactory, MSGraphClient, AadHttpClientFactory, AadHttpClient, AadHttpClientConfiguration, HttpClientResponse } from '@microsoft/sp-http';

interface IHelloUserProps {
    serviceScope: ServiceScope;
}

interface IHelloUserState {
    Name: string;
}


class HelloUser extends React.Component<IHelloUserProps, IHelloUserState> {

    private aadHttpClientFactory: AadHttpClientFactory;

    constructor(props: IHelloUserProps) {
        super(props);
        this.state = {
            Name: ''
         };

        this.aadHttpClientFactory = this.props.serviceScope.consume(AadHttpClientFactory.serviceKey);
    }

    public render(): React.ReactElement<{}> {

            return <div>

            </div>;
        
    }

    public componentDidMount() {
        //this.aadHttpClientFactory.getClient().
    }
}

export default withServiceScope(HelloUser);