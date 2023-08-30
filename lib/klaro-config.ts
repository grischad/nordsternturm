const klaroConfig = {
    privacyPolicy: '/datenschutz',
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
                    description: 'Is used to save the user\'s cookie settings.'
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
                    description: 'Is used to save the user\'s cookie settings.'
                },
                de: {
                    description: 'Setzt folgende Cookies: fr (facebook.com / 3 Monate): Wird von Facebook verwendet, um personalisierte Werbung anzuzeigen, basierend auf früheren Besuchen und Interaktionen. / xs (facebook.com / 1 Jahr): Wird verwendet, um die Authentifizierung und Sicherheit von Benutzersitzungen aufrechtzuerhalten. / datr (facebook.com / 13 Monate): Hilft Facebook, böswillige Aktivitäten zu erkennen und die Sicherheit der Plattform zu gewährleisten. / dpr (facebook.com / 1 Woche): Speichert Informationen über die Bildschirmauflösung des Benutzers, um eine optimierte Darstellung von Facebook-Inhalten zu ermöglichen. / wd (facebook.com / 1 Woche): Speichert Informationen über die Browserfenstergröße des Benutzers, um das Layout der Facebook-Seite zu optimieren. / c_user (facebook.com / 1 Jahr): Speichert die Facebook-Benutzer-ID des angemeldeten Benutzers, um eine nahtlose Navigation und Interaktion auf der Plattform zu ermöglichen. / sb (facebook.com / 14 Monate): Wird verwendet, um die Browser- und Geräteinformationen des Benutzers zu speichern und böswillige Aktivitäten auf der Plattform zu verhindern.'
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
                'title': 'Ihre Cookie-Einstellungen für mietenlachenweinen.de',
                'description': 'Wir setzen selber keine nicht-notwendigen Cookies, doch binden wir Videos ein, deren Seiten Cookies setzen. Klicken Sie auf „Alle akzeptieren“, um alle Cookies zu akzeptieren, wählen Sie einzelne Videoquellen aus und klicken Sie auf „Ausgewählte akzeptieren“ oder auf „Ich lehne ab“. Sie können die Cookies auch jederzeit nachträglich über den Link "Cookies" in der Fußzeile der Seite abwählen.',
            },
            'acceptSelected': 'Ausgewählte akzeptieren',
            'purposes': {
                maps: {
                    title: 'Karten'
                },
                media: {
                    title: 'Externe Medien'
                },
            },
        }
    },
}

export default klaroConfig;