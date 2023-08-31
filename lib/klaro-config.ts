const klaroConfig = {
    privacyPolicy: 'https://www.nordsternturm.de/impressum-datenschutz.php',
    acceptAll: true,
    mustConsent: true,

    services: [
        {
            purposes: ['media'],
            name: "youtube",
            // contextualConsentOnly: true // this option enables inline consent
            translations: {
                zz: {
                    title: 'YouTube & Google'
                },
                en: {
                    description: 'Is used to save the user\'s cookie settings.'
                },
                de: {
                    description: 'Setzt folgende Cookies: SOCS (google.com / 13 Monate): Wird verwendet, um die Cookie-Entscheidungen des Nutzers zu speichern. / __Secure-ENID (google.com / 13 Monate): Speichert die bevorzugten Einstellungen und andere Informationen. / CONSENT (google.com / 13 Monate): Wird verwendet, um die Cookie- Entscheidungen des Nutzers zu speichern. / AEC (google.com / 6 Monate): Soll sicher stellen, dass Anfragen innerhalb einer Browsersitzung vom Nutzer und nicht von anderen Websites gestellt werden. / __Secure-3PSIDCC, __Secure-3PSID, __Secure-3PAPISID, __Secure-1PSID, __Secure-1PSIDCC, __Secure-APISID, __Secure-1PAPISID, SAPISID, APISID (google.com / 2 Jahre): Wird für Targetingzwecke verwendet, um ein Profil der Interessen der Website-Besucher zu erstellen, um relevante und personalisierte Google-Werbung anzuzeigen. / SIDCC (google.com / 90 Tage), 1P_JAR (google.com / 30 Tage), SSID (google.com / 2 Jahre): Enthält Informationen über die Nutzung der Website durch den Endnutzer und über die Werbung, die er möglicherweise vor dem Besuch der Website gesehen hat. / HSID, SID (google.com / 2 Jahre): Enthält verschlüsselte und digital signierte Aufzeichnungen über die Google-Konto-ID des Nutzers und die letzte Anmeldezeit. / SEARCH_SAMESITE (google.com / 3 Monate): Verhindert, dass der Browser dieses Cookie in Verbindung mit seitenübergreifenden Anfragen sendet. / DV (google.com / 1 Tag): Wird verwendet, um Informationen darüber zu sammeln, wie Besucher die Website nutzen, und um diese Informationen zur Erstellung von Berichten und zur Verbesserung der Website zu nutzen. Die Cookies sammeln Informationen in anonymer Form, einschließlich der Anzahl der Besucher der Website, woher die Besucher auf die Website gekommen sind und welche Seiten sie besucht haben. / NID (google.com / 6 Monate): Enthält eine eindeutige Kennung, die Google verwendet, um sich an Nutzerpräferenzen und andere Informationen zu erinnern, wie z. B. Ihre bevorzugte Sprache (z. B. Englisch), die Anzahl der Suchergebnisse, die pro Seite angezeigt werden sollen (z. B. 10 oder 20) und ob Sie den SafeSearch-Filter von Google aktivieren möchten oder nicht. / OTZ (google.com / 30 Tage): Verknüpft Aktivitäten von Website-Besuchern mit anderen Geräten, die zuvor über das Google-Konto eingeloggt sind. Auf diese Weise wird die Werbung auf verschiedene Geräte zugeschnitten.'
                },
            },
        },
        {
            purposes: ['media'],
            name: "vimeo",
            // contextualConsentOnly: true // this option enables inline consent
            translations: {
                zz: {
                    title: 'Vimeo'
                },
                en: {
                    description: 'Sets the following cookies: _uetvid (vimeo.com / 13 months): Used to track the user\'s interaction with embedded Vimeo videos and improve video playback. / _uetsid (vimeo.com / 1 day): Used to track user sessions on the website. / __cf_bm (vimeo.com / 1 day): Used by Cloudflare to distinguish malicious visitors and protect the website from spam and abuse. / _ga (vimeo.com / 13 months): Used by Google Analytics to store the unique ID of users and collect information about the use of the website. / _fbp (vimeo.com / 3 months): Used by Facebook to display personalized advertising based on previous visits and interactions. / _gcl_au (vimeo.com / 3 months): Used by Google AdSense to measure the efficiency of advertisements on websites. / is_logged_in (vimeo.com / 9 years): Stores the user\'s login status to enable seamless navigation on the website. / _clck (vimeo.com / 4 months): Used to track and analyze user actions on the website. / has_logged_in (vimeo.com / 9 years): Stores whether the user has ever logged in to the website to improve the user experience. / _ttp (vimeo.com / 5 months): Used to enable the tracking of user activities and interactions. / player (vimeo.com / 8 months): Stores user preferences and tracks the use of the Vimeo video player to provide a better user experience. / sd_client_id (vimeo.com / 15 months): Used to store unique user IDs and track the use of the website. / afUserId (vimeo.com / 13 months): Stores a unique user ID to track user activities and interactions on the website. / _abexps (vimeo.com / 4 months): Used for A/B testing and the optimization of Vimeo services. / _tt_enable_cookie (vimeo.com / 5 months): Used to determine whether the user has allowed the setting of cookies. / __ssid (vimeo.com / 7 years): Stores a unique session ID to track user interactions on the website. / OptanonConsent (vimeo.com / 1 year): Stores the user\'s consent to cookies and privacy policies on the website. / vuid (vimeo.com / 1 year): Used to track the use of the Vimeo video player features and improve the user experience. / _delighted_web (vimeo.com / 9 years): Used to collect user feedback and improve the user experience on the website.'
                },
                de: {
                    description: 'Setzt folgende Cookies: _uetvid (vimeo.com / 13 Monate): Wird verwendet, um die Interaktion des Benutzers mit eingebetteten Vimeo-Videos zu verfolgen und die Videowiedergabe zu verbessern. / _uetsid (vimeo.com / 1 Tag): Dient zur Verfolgung von Benutzersitzungen auf der Website. / __cf_bm (vimeo.com / 1 Tag): Wird von Cloudflare verwendet, um böswillige Besucher zu unterscheiden und die Website vor Spam und Missbrauch zu schützen. / _ga (vimeo.com / 13 Monate): Wird von Google Analytics verwendet, um die eindeutige ID von Benutzern zu speichern und Informationen über die Nutzung der Website zu sammeln. / _fbp (vimeo.com / 3 Monate): Wird von Facebook verwendet, um personalisierte Werbung anzuzeigen, basierend auf früheren Besuchen und Interaktionen. / _gcl_au (vimeo.com / 3 Monate): Wird von Google AdSense verwendet, um die Effizienz von Werbeanzeigen auf Websites zu messen. / is_logged_in (vimeo.com / 9 Jahre): Speichert den Anmeldestatus des Benutzers, um eine nahtlose Navigation auf der Website zu ermöglichen. / _clck (vimeo.com / 4 Monate): Wird verwendet, um Benutzeraktionen auf der Website zu verfolgen und zu analysieren. / has_logged_in (vimeo.com / 9 Jahre): Speichert, ob der Benutzer sich jemals auf der Website angemeldet hat, um die Benutzererfahrung zu verbessern. / _ttp (vimeo.com / 5 Monate): Wird verwendet, um das Tracking von Benutzeraktivitäten und Interaktionen zu ermöglichen. / player (vimeo.com / 8 Monate): Speichert Benutzerpräferenzen und verfolgt die Nutzung des Vimeo-Videoplayers, um eine bessere Benutzererfahrung zu bieten. / sd_client_id (vimeo.com / 15 Monate): Wird verwendet, um eindeutige Benutzer-IDs zu speichern und die Nutzung der Website zu verfolgen. / afUserId (vimeo.com / 13 Monate): Speichert eine eindeutige Benutzer-ID, um Benutzeraktivitäten und Interaktionen auf der Website zu verfolgen. / _abexps (vimeo.com / 4 Monate): Wird für A/B-Testing und die Optimierung von Vimeo-Diensten verwendet. / _tt_enable_cookie (vimeo.com / 5 Monate): Wird verwendet, um festzustellen, ob der Benutzer das Setzen von Cookies zugelassen hat. / __ssid (vimeo.com / 7 Jahre): Speichert eine eindeutige Sitzungs-ID, um Benutzerinteraktionen auf der Website zu verfolgen. / OptanonConsent (vimeo.com / 1 Jahr): Speichert die Zustimmung des Benutzers zu Cookies und Datenschutzrichtlinien auf der Website. / vuid (vimeo.com / 1 Jahr): Wird verwendet, um die Nutzung der Vimeo-Videoplayer-Funktionen zu verfolgen und die Benutzererfahrung zu verbessern. / _delighted_web (vimeo.com / 9 Jahre): Wird verwendet, um Benutzerfeedback zu sammeln und die Benutzererfahrung auf der Website zu verbessern.'
                },
            },
        },        
        {
            purposes: ['media'],
            name: "facebook",
            // contextualConsentOnly: true // this option enables inline consent
            translations: {
                zz: {
                    title: 'Facebook'
                },
                en: {
                    description: 'Sets the following cookies: fr (facebook.com / 3 months): Used by Facebook to display personalized advertising based on previous visits and interactions. / xs (facebook.com / 1 year): Used to maintain the authentication and security of user sessions. / datr (facebook.com / 13 months): Helps Facebook detect malicious activities and ensure the security of the platform. / dpr (facebook.com / 1 week): Stores information about the user\'s screen resolution to enable an optimized display of Facebook content. / wd (facebook.com / 1 week): Stores information about the user\'s browser window size to optimize the layout of the Facebook page. / c_user (facebook.com / 1 year): Stores the Facebook user ID of the logged-in user to enable seamless navigation and interaction on the platform. / sb (facebook.com / 14 months): Used to store the user\'s browser and device information and prevent malicious activities on the platform.'
                },
                de: {
                    description: 'Setzt folgende Cookies: fr (facebook.com / 3 Monate): Wird von Facebook verwendet, um personalisierte Werbung anzuzeigen, basierend auf früheren Besuchen und Interaktionen. / xs (facebook.com / 1 Jahr): Wird verwendet, um die Authentifizierung und Sicherheit von Benutzersitzungen aufrechtzuerhalten. / datr (facebook.com / 13 Monate): Hilft Facebook, böswillige Aktivitäten zu erkennen und die Sicherheit der Plattform zu gewährleisten. / dpr (facebook.com / 1 Woche): Speichert Informationen über die Bildschirmauflösung des Benutzers, um eine optimierte Darstellung von Facebook-Inhalten zu ermöglichen. / wd (facebook.com / 1 Woche): Speichert Informationen über die Browserfenstergröße des Benutzers, um das Layout der Facebook-Seite zu optimieren. / c_user (facebook.com / 1 Jahr): Speichert die Facebook-Benutzer-ID des angemeldeten Benutzers, um eine nahtlose Navigation und Interaktion auf der Plattform zu ermöglichen. / sb (facebook.com / 14 Monate): Wird verwendet, um die Browser- und Geräteinformationen des Benutzers zu speichern und böswillige Aktivitäten auf der Plattform zu verhindern.'
                },
            },
        },
        {
            purposes: ['media'],
            name: "soundcloud",
            // contextualConsentOnly: true // this option enables inline consent
            translations: {
                zz: {
                    title: 'Soundcloud'
                },
                en: {
                    description: 'Sets the following cookies: __qca (quantcast.com / 13 months): Used for audience measurement and insights. / _fbp (facebook.com / 3 months): Used by Facebook to deliver a series of advertisement products such as real time bidding from third party advertisers. / _ga, _gid (google.com / 13 months): Used to distinguish users. / _gcl_au (google.com / 3 months): Used to store and track conversions. / ab.storage.sessionId (braze.com / 1 year): It is a randomly-generated string used to determine whether the user is starting a new or existing session to sync messages and calculate session analytics. / ajs_anonymous_id, ajs_user_id (segment.com / 1 year): Used to store a unique identifier for analytics tracking. / connect_session, cookie_consent, IR_20541, IR_gbd, ja (soundcloud.com / Session): This cookie is used to maintain a user’s session on SoundCloud. The "cookie_consent" cookie specifically stores the user’s consent to SoundCloud’s use of cookies. / datadome (datadome.co / 1 year): Its purpose is to protect companies from various malicious bot activities such as content scraping, account takeovers, fraudulent transactions, skewed analytics, and more. / eupubconsent-v2 (iabeurope.eu / 1 year): Used to store information for remarketing purposes. / OptanonAlertBoxClosed, OptanonConsent (onetrust.com / 1 year): Set by the OneTrust Cookie Consent solution. "OptanonAlertBoxClosed" records that the user has closed the cookie information notice, and "OptanonConsent" stores cookie consent preferences. / rubicon_last_sync (rubiconproject.com / 1 day): Used for cookie syncing with Rubicon Project’s server. / sc_anonymous_id (soundcloud.com / 13 months): Used by SoundCloud for analytics tracking. / sc_session (soundcloud.com / 1 week), sclocale (soundcloud.com / 1 year), soundcloud_session_hint (soundcloud.com / Session): Used by SoundCloud for various purposes, including storing session information and language preferences.'
                },
                de: {
                    description: 'Setzt folgende Cookies: __qca (quantcast.com / 13 Monate): Verwendet für die Messung des Publikums und dessen Einblicke. / _fbp (facebook.com / 3 Monate): Verwendet von Facebook, um eine Reihe von Werbeprodukten zu liefern, wie zum Beispiel Echtzeit-Bieten von Drittanbietern. / _ga, _gid (google.com / 13 Monate): Verwendet um Nutzer zu unterscheiden. / _gcl_au (google.com / 3 Monate): Verwendet um Umrechnungen zu speichern und zu verfolgen. / ab.storage.sessionId (braze.com / 1 Jahr): Es ist eine zufällig generierte Zeichenfolge, die dazu dient zu bestimmen, ob der Benutzer eine neue oder bestehende Sitzung startet, um Nachrichten zu synchronisieren und Sitzungsanalysen zu berechnen. / ajs_anonymous_id, ajs_user_id (segment.com / 1 Jahr): Verwendet um einen einzigartigen Identifier für die Analyseverfolgung zu speichern. / connect_session, cookie_consent, IR_20541, IR_gbd, ja (soundcloud.com / Sitzung): Dieses Cookie wird verwendet, um eine Benutzersitzung auf SoundCloud aufrechtzuerhalten. Das Cookie "cookie_consent" speichert zusätzlich die Zustimmung des Benutzers zur Verwendung von Cookies durch SoundCloud. / datadome (datadome.co / 1 Jahr): Sein Zweck ist es, Unternehmen vor verschiedenen schädlichen Bot-Aktivitäten zu schützen, wie z.B. Inhalts-Scraping, Account-Übernahmen, betrügerische Transaktionen, verzerrte Analysen und mehr. / eupubconsent-v2 (iabeurope.eu / 1 Jahr): Verwendet um Informationen für Remarketing-Zwecke zu speichern. / OptanonAlertBoxClosed, OptanonConsent (onetrust.com / 1 Jahr): Eingestellt von der OneTrust Cookie Consent-Lösung. "OptanonAlertBoxClosed" registriert, dass der Benutzer den Cookie-Informationen Hinweis geschlossen hat und "OptanonConsent" speichert die Cookie-Zustimmungspräferenzen. / rubicon_last_sync (rubiconproject.com / 1 Tag): Verwendet für das Cookie-Synchronisieren mit dem Rubicon Project-Server. / sc_anonymous_id (soundcloud.com / 13 Monate): Verwendet von SoundCloud für die Analyseverfolgung. / sc_session (soundcloud.com / 1 Woche), sclocale (soundcloud.com / 1 Jahr), soundcloud_session_hint (soundcloud.com / Sitzung): Verwendet von SoundCloud für verschiedene Zwecke, einschließlich der Speicherung von Sitzungsinformationen und Spracheinstellungen.'
                },
            },
        },
        {
            purposes: ['media'],
            name: "mixcloud",
            // contextualConsentOnly: true // this option enables inline consent
            translations: {
                zz: {
                    title: 'Mixcloud'
                },
                en: {
                    description: 'Sets the following cookies:  _fbp (facebook.com / 3 months): Used by Facebook to deliver a series of advertisement products such as real time bidding from third party advertisers. / _ga, _gid (google.com / 13 months): Used to distinguish users. / _gcl_au (google.com / 3 months): Used to store and track conversions. / FPID (google.com / 13 months): Used by Google Analytics to replace the _ga cookie, which is readable with JavaScript. / c (mixcloud.com / 13 Monate): Is used to store information about your current session on the website / Translate the following text into English: csrftoken (mixcloud.com / 1 year): Used by Mixcloud to prevent Cross-Site Request Forgery (CSRF) attacks  / FPLC (google.com / 1 day): Used by Google Analytics to perform cross-domain tracking / mx_t (mixcloud.com / 13 months): Used to implement audio files on the website. It enables the embedding of the Mix Cloud audio player'
                },
                de: {
                    description: 'Setzt folgende Cookies: _fbp (facebook.com / 3 Monate): Verwendet von Facebook, um eine Reihe von Werbeprodukten zu liefern, wie zum Beispiel Echtzeit-Bieten von Drittanbietern. / _ga, _gid (google.com / 13 Monate): Verwendet um Nutzer zu unterscheiden. / _gcl_au (google.com / 3 Monate): Verwendet um Umrechnungen zu speichern und zu verfolgen. / FPID (google.com / 13 Monate): Von Google Analytics verwendet wird, um das _ga-Cookie zu ersetzen, das mit JavaScript lesbar ist. / c (mixcloud.com / 13 Monate):  Wird verwendet, um Informationen über deine aktuelle Sitzung auf der Website zu speichern / csrftoken (mixcloud.com / 1 Jahr): Von Mixcloud verwendet, um Cross-Site Request Forgery (CSRF) Angriffe zu verhindern / FPLC (google.com / 1 Tag): Von Google Analytics verwendet, um Cross-Domain-Tracking durchzuführen / mx_t (mixcloud.com / 13 Monate):  Verwendet, um Audio-Dateien auf der Website zu implementieren. Es ermöglicht das Einbetten des Mix Cloud Audio-Players.'
                },
            },
        },
        {
            purposes: ['media'],
            name: "other",
            contextualConsentOnly: true,
            // contextualConsentOnly: true // this option enables inline consent
            translations: {
                en: {
                    title: 'others',
                    description: 'Here you agree to show other embeddings from several third party sites. Please refer to the privacy policy of these sites or information on which cookies they set.'
                },
                de: {
                    title: 'anderen',
                    description: 'Hier stimmen Sie zu, andere Einbettungen von verschiedenen Drittanbieter-Websites anzuzeigen. Bitte beachten Sie die Datenschutzrichtlinien dieser Websites oder Informationen zu den von ihnen gesetzten Cookies.'
                },
            },
        }
    ],
    translations: {
        'de': {
            'consentNotice': {
                description: 'Hallo! Könnten wir bitte einige zusätzliche Dienste zur Optimierung der Website-Funktionen aktivieren? Sie können Ihre Zustimmung später jederzeit ändern oder zurückziehen.',
            },
            'consentModal': {
                'title': 'Ihre Cookie-Einstellungen für nordsternturm-tour.de',
                'description': 'Wir setzen selber keine nicht-notwendigen Cookies, doch binden wir Videos und andere externe Inhalte ein, deren Seiten Cookies setzen. Klicken Sie auf „Alle akzeptieren“, um alle Cookies zu akzeptieren, wählen Sie einzelne Quellen aus und klicken Sie auf „Ausgewählte akzeptieren“ oder auf „Ich lehne ab“. Sie können die Cookies auch jederzeit nachträglich über den Link "Cookies" in der Fußzeile der Seite abwählen.',
            },
            'acceptSelected': 'Ausgewählte akzeptieren',
            'purposes': {
                media: {
                    title: 'Externe Medien'
                },
            },
        },
        'en': {
            'consentNotice': {
                description: 'Hello! Could we please activate some additional services to optimize the website functions? You can change or withdraw your consent at any time.',
            },
            'consentModal': {
                'title': 'Your cookie settings for nordsternturm-tour.de',
                'description': 'We do not set any non-essential cookies ourselves, but we embed videos and other external content, whose pages set cookies. Click on "Accept all" to accept all cookies, select individual sources and click on "Accept selected" or "I decline". You can also deselect the cookies at any time later via the "Cookies" link in the footer of the page.',
            },
            'acceptSelected': 'Accept selected',
            'purposes': {
                media: {
                    title: 'External media'
                },
            },
        }
    },
}

export default klaroConfig;