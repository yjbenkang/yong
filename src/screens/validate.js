export default function validate({ username, password },ment) {
    const errors = {};
    if(ment==="유저없음"){
        errors.username = "존재하지 않는 유저입니다."
    } else if(ment==="비밀번호틀림"){
        errors.password = "비밀번호가 틀립니다."
    }
  
    if (!username) {
      errors.username = "유저네임이 입력되지 않았습니다.";
    }
    if (!password) {
      errors.password = "비밀번호가 입력되지 않았습니다.";
    }
      
    return errors;
  }