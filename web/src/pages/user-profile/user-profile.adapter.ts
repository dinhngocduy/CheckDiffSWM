import { useRef, useState } from "react";

interface IProfile {
  name: string;
  email: string;
  password: string;
  address: string;
  fullName: string;
  note: string;
  phoneNum: string;
  image: string;
  permission: IPermissions;
}

interface IPermissions {
  admin: boolean;
  control: boolean;
  fillProduct: boolean;
}

export const UserProfileAdapter = () => {
  const [profile, setProfile] = useState<IProfile>({
    name: "",
    email: "",
    password: "",
    address: "",
    fullName: "",
    note: "",
    phoneNum: "",
    permission: {
      admin: false,
      control: false,
      fillProduct: false,
    },
    image: "",
  });

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const addressRef = useRef();
  const fullNameRef = useRef();
  const noteRef = useRef();
  const phoneNumRef = useRef();

  const adminRef = useRef();
  const controlRef = useRef();
  const fillRef = useRef();

  const imageRef = useRef();

  const saveInfo = () => {

    const data = {
        name: (nameRef.current as any).returnText(),
        email: (emailRef.current as any).returnText(),
        password: (passwordRef.current as any).returnText(),
        address: (addressRef.current as any).returnText(),
        fullName: (fullNameRef.current as any).returnText(),
        note: (noteRef.current as any).returnText(),
        phoneNum: (phoneNumRef.current as any).returnText(),
        permission: {
          admin: (adminRef.current as any).returnChecked(),
          control: (controlRef.current as any).returnChecked(),
          fillProduct: (fillRef.current as any).returnChecked(),
        },
        image: (imageRef.current as any).returnLogo(),
    }

    setProfile(data);

    console.log("USER PROFILE: ", data);
    
  };

  const cancelChange = () => {
    setProfile({
      name: (nameRef.current as any).resetText(),
      email: (emailRef.current as any).resetText(),
      password: (passwordRef.current as any).resetText(),
      address: (addressRef.current as any).resetText(),
      fullName: (fullNameRef.current as any).resetText(),
      note: (noteRef.current as any).resetText(),
      phoneNum: (phoneNumRef.current as any).resetText(),
      permission: {
        admin: (adminRef.current as any).returnChecked(),
        control: (controlRef.current as any).returnChecked(),
        fillProduct: (fillRef.current as any).returnChecked(),
      },
      image: (imageRef.current as any).resetLogo(),
    });
  };

  return {
    nameRef,
    emailRef,
    passwordRef,
    phoneNumRef,
    fullNameRef,
    noteRef,
    addressRef,
    adminRef,
    controlRef,
    fillRef,
    imageRef,
    saveInfo,
    cancelChange,
  };
};
