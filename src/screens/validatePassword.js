export default function validatePassword({ oldPassword, newPassword, newPasswordConfirmation },ment) {
    const errors = {};
    if(ment==="현재비밀번호틀림"){
        errors.oldPassword = "현재 비밀번호가 틀립니다."
    } else if(ment==="새비밀번호틀림"){
        errors.newPassword = "새 비밀번호와 새 비밀번호 확인이 다릅니다."
    }
  
    if (!oldPassword) {
      errors.oldPassword = "현재 비밀번호를 입력하세요.";
    }
    if (!newPassword) {
      errors.newPassword = "새 비밀번호를 입력하세요.";
    }
    if (!newPasswordConfirmation) {
        errors.newPasswordConfirmation = "새 비밀번호 확인을 입력하세요.";
      }
      
    return errors;
  }