import { useState, useEffect } from 'react';
import klaroConfig from '../lib/klaro-config';
import { ConsentWrapper } from '../lib/ConsentContext';

function KlaroWrapper({ children }) {
    const [consents, setConsents] = useState({});
    const [klaroManager, setKlaroManager] = useState();
    const [klaroObject, setKlaroObject] = useState();
    const [isKlaroLoaded, setKlaroLoaded] = useState(false);

    useEffect(() => {
        const loadKlaro = async () => {
            const Klaro = await import("klaro/dist/klaro-no-css")
            Klaro.setup(klaroConfig);
            setKlaroManager(Klaro.getManager());
            setKlaroObject(Klaro);
            setKlaroLoaded(true);
        }
        loadKlaro();
    }, [])

    useEffect(() => {
        const setKlaroConsents = async () => {
            if (klaroManager) {
                let videoConsents = {}
                if (klaroManager?.getConsent('vimeo')) videoConsents = ({ ...videoConsents, vimeo: true });
                if (klaroManager?.getConsent('youtube')) videoConsents = ({ ...videoConsents, youtube: true });
                if (klaroManager?.getConsent('facebook')) videoConsents = ({ ...videoConsents, facebook: true });
                if (videoConsents !== consents) setConsents(videoConsents)
                let w1 = {
                    update: function (obj, name, data) {
                        if (name == "applyConsents") location.reload();
                    }
                }
                klaroManager.watch(w1);
            }
        }
        setKlaroConsents();
    }, [klaroManager])

    if (!isKlaroLoaded) {
        return null;
    }

    return (
        <ConsentWrapper openModal={() => klaroObject?.show()} consents={consents}>
            {children}
        </ConsentWrapper>
    );
}

export default KlaroWrapper;
