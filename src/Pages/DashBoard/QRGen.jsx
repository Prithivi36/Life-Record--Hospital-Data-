import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';


const QRGen = ({ text }) => {
  if (!text) return null;

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <QRCodeCanvas
        value={text}
        size={100}
        bgColor="#ffffff"
        fgColor="#000000"
        level="H"
        includeMargin={true}
      />
    </div>
  );
};

export default QRGen;
