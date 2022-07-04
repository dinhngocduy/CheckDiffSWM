import React, { useImperativeHandle, useState } from 'react';
import './logo.scss';
import { LogoProps } from './logo.props';
import { MdOutlineAddAPhoto } from 'react-icons/md';

const Logo = React.forwardRef((props: LogoProps, ref: any) => {
  const [file, setFile] = useState('');
  const [uploaded, setUploaded] = useState<boolean>(false)

  const handleUpload = (e: any) => {
    if (e.target.files.length > 0) {
      const file = URL.createObjectURL(e.target.files[0]);
      setFile(file);
      setUploaded(true);
    }
  }

  useImperativeHandle(ref, () => ({
    returnLogo: () => file,
    resetLogo: () => {
      setUploaded(false)
      setFile('')
    }
  }))
  
  return (
    <div className='logo'>
        <div className="logo__title">
            Ảnh logo
        </div>
        <div className="logo__container">
          {uploaded? 
            <img className="logo__container__image" style={{backgroundImage: `url(${file})`}}/>
            : 
            <div className="logo__container__rectangle"></div>
          }
          <label className="logo__container__bt">
            <input type='file' accept='image/*' style={{display: 'none'}} onChange={handleUpload}/>
            <MdOutlineAddAPhoto size='45px'/>
          </label>
        </div>
    </div>
  )
})

export default Logo