import { useEffect, useState } from 'react';
import { IOSView } from 'react-device-detect';
import Image from 'next/image';

const CameraPermission = ({ language }) => {
    const [permissionStatus, setPermissionStatus] = useState('loading');
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (!navigator.permissions || !navigator.permissions.query) {
            setPermissionStatus('unsupported');
            return;
        }

        navigator.permissions.query({ name: 'camera' }).then((status) => {
            setPermissionStatus(status.state);

            status.onchange = () => {
                setPermissionStatus(status.state);
            };
        });
    }, []);

    return (
        <IOSView>
            {permissionStatus !== 'granted' && <>
                <a className="text-sm w-10" onClick={() => setShowModal(true)}>{language === 'de' ? 'Kamera dauerhaft erlauben' : 'Permanently allow camera'}</a>
                {showModal &&
                    <div className="fixed z-10 inset-0 overflow-y-auto" onClick={() => setShowModal(false)}>
                        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center">
                            <div className="fixed inset-0 transition-opacity">
                                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                            </div>
                            <div className="inline-block align-center bg-white rounded-sm text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" onClick={e => e.stopPropagation()}>
                                <button onClick={() => setShowModal(false)} className="absolute top-0 right-0 w-10 h-10">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="black" className="bi bi-x" viewBox="0 0 16 16">
                                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                </button>
                                <div className="bg-white px-4 pt-5 pb-4">
                                    <div className="flex flex-wrap gap-2">
                                        <div className="mt-3 w-full">
                                            {language === 'de' ? 'Um der Nordsternturm-Tour dauerhaft die Erlaubnis der Kameranutzung zu geben, tippen Sie in der Adressleiste auf:' : 'To permanently give the Nordsternturm tour the permission to use the camera, tap in the address bar on:'}
                                        </div>
                                        <div class="basis-4/5 relative">

                                            {language === 'de' ?
                                                <Image
                                                    src="/kamera.jpg"
                                                    alt="Anleitung"
                                                    width={597}
                                                    height={613}
                                                    quality="100"
                                                />
                                                :
                                                <Image
                                                    src="/camera.jpg"
                                                    alt="How-to"
                                                    width={594}
                                                    height={613}
                                                    quality="100"
                                                />
                                            }


                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                }
            </>
            }
        </IOSView>
    );
};

export default CameraPermission;
