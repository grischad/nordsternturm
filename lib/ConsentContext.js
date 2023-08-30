import { createContext, useContext } from 'react';


const ConsentContext = createContext({});


export const ConsentWrapper = ({
    children,
    consents,
    openModal
}) => {

    return (

        <ConsentContext.Provider value={{ consents, openModal }}>
            {children}
        </ConsentContext.Provider>
    );
}

export const useConsentContext = () => {
    return useContext(ConsentContext);
}
