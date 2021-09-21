export default function validate({ username, password },ment) {
    const errors = {};

    if(ment==="유저없음"){
        errors.username = "존재하지 않는 유저입니다."
    } else if(ment==="비밀번호틀림"){
        errors.password = "비밀번호가 틀립니다."
    }
    
    console.log(errors)
  
    return errors;
  }