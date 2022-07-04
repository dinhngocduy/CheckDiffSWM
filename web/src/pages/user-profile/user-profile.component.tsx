import "./user-profile.scss";
import TextField from "./components/fields/text-field.component";
import Logo from "./components/logo/Logo";
import { MdCheck } from "react-icons/md";
import CustomCheckBox from "./components/authority/CustomCheckBox";
import { UserProfileAdapter } from "./user-profile.adapter";

const UserProfileComponent = () => {
  const {
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
  } = UserProfileAdapter();

  return (
    <div className="card-view">
      <div className="card-view__title">Thông tin tài khoản</div>
      <div className="card-view__body">
        <div className="card-view__body__left">
          <Logo ref={imageRef} />
        </div>
        <div className="card-view__body__right">
          <div className="card-view__body__right__column">
            <TextField label="Tên đăng nhập" ref={nameRef} />
            <TextField label="Mật khẩu" password={true} ref={passwordRef} />
            <TextField label="Họ và Tên" ref={fullNameRef} />
            <TextField label="SĐT" ref={phoneNumRef} />
          </div>
          <div className="card-view__body__right__column">
            <TextField label="Email" ref={emailRef} />
            <TextField label="Địa chỉ" ref={addressRef} />
            <TextField label="Ghi chú" ref={noteRef} />
          </div>
        </div>
      </div>
      <div className="card-view__authority">
        <div className="card-view__authority__title">Phân quyền</div>
        <div className="group-radio">
          <CustomCheckBox label="Admin" ref={adminRef} />
          <CustomCheckBox label="Kiểm soát" ref={controlRef} />
          <CustomCheckBox label="Fill hàng" ref={fillRef} />
        </div>
      </div>
      <div className="card-view__footer">
        <button
          className="card-view__footer__cancel"
          onClick={(e: any) => cancelChange()}
        >
          Hủy thay đổi
        </button>
        <button
          className="card-view__footer__save"
          onClick={(e: any) => saveInfo()}
        >
          <MdCheck size={"20px"} />
          Lưu lại
        </button>
      </div>
    </div>
  );
};

export default UserProfileComponent;
