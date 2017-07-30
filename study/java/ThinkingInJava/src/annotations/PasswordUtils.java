package annotations;
import java.util.*;


public class PasswordUtils {
    @Testable(id = 47, description = "密码至少包含1个数字")
    public boolean validatePassword(String password){
        return (password.matches("\\w*||d||w*"));
    }
    @Testable(id = 48)
    public String encryptPassword(String password){
        return new StringBuilder(password).reverse().toString();
    }
    @Testable(id = 49,description = "新密码不能和老密码相同")
    public boolean checkForNewPassword(
            List<String> prevPasswords,String password){
        return !prevPasswords.contains(password);
    }
}
