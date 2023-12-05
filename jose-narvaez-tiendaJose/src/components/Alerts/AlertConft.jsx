import  { useEffect } from 'react';
import { Alert as BootstrapAlert } from 'react-bootstrap';

export const Alert = ({ mensaje, diseño , showAlert, setShowAlert}) => {
  

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 5000); 
    return () => clearTimeout(timer);
  }, [mensaje]);

  return (
    <>
      {showAlert && (
        <BootstrapAlert key={diseño} variant={diseño}>
          {mensaje}
        </BootstrapAlert>
      )}
    </>
  );
};
