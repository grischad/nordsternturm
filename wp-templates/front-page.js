import { useEffect } from 'react';

export default function Component() {




  useEffect(() => {
    const newPath = `/de/startseite`;
    window.location.href = newPath;

  }, []);



  return <></>
}
