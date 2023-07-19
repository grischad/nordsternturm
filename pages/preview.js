import { WordPressTemplate } from '@faustwp/core';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Preview(props) {
  const router = useRouter();
  const params = router.query;
  console.log("🚀 ~ file: preview.js:7 ~ Preview ~ params:", params)
  // Loggen Sie die Props beim ersten Rendern
  console.log('Initial props', props);

  // Verwenden Sie useEffect, um die Props zu loggen, wenn sie sich ändern
  useEffect(() => {
    console.log('Props changed', props);
  }, [props]);

  // Loggen Sie die Props direkt vor der Verwendung in WordPressTemplate
  console.log('Props before using in WordPressTemplate', props);

  // Versuchen Sie, die Props in einem try/catch-Block zu verwenden, um Fehler abzufangen
  try {
    return <WordPressTemplate {...params} />;
  } catch (error) {
    console.error('Error using props in WordPressTemplate', error);
  }

  // Wenn es einen Fehler gibt, geben Sie eine Fehlermeldung zurück
  return <div>Error using props in WordPressTemplate. Check the console for more details.</div>;
}
