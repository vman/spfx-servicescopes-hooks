import { ServiceScope } from '@microsoft/sp-core-library';
import * as React from 'react';

export interface AppContextProps {
    serviceScope: ServiceScope;
}

export const AppContext = React.createContext<AppContextProps>({
    serviceScope: null
});