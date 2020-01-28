import * as React from 'react';
import { ServiceScope } from '@microsoft/sp-core-library';
import { withServiceScope } from '../common/withServiceScope';
import { MSGraphClientFactory, MSGraphClient } from '@microsoft/sp-http';

interface IHelloUserProps {
    serviceScope: ServiceScope;
}

interface IHelloUserState {
    Name: string;
}

class HelloUser extends React.Component<IHelloUserProps, IHelloUserState> {

    private msGraphClientFactory: MSGraphClientFactory;

    constructor(props: IHelloUserProps) {
        super(props);
        this.state = { Name: ''};
        
        //this.props has the serviceScope property due to the withServiceScope Higher Order Component passing it in.
        this.msGraphClientFactory = this.props.serviceScope.consume(MSGraphClientFactory.serviceKey);
    }

    public render(): React.ReactElement<{}> {

        return <div>
            {this.state.Name &&
                <span>Hello {this.state.Name}</span>
            }
        </div>;

    }

    public componentDidMount() {
        this.msGraphClientFactory.getClient()
            .then((client: MSGraphClient): void => {
                client
                    .api('/me')
                    .get((error, user: any, rawResponse?: any) => {
                        this.setState({ Name: user.displayName });
                    });
            });
    }
}

//This part is key as it wraps the current component with a Higher Order Component allowing the serviceScope to be passed in as a property.
export default withServiceScope(HelloUser);