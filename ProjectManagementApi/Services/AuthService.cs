using ProjectManagementApi.DTO;
using ProjectManagementApi.IRepositories;
using ProjectManagementApi.IServices;
using ProjectManagementApi.Model;

namespace ProjectManagementApi.Services
{
    public class AuthService: IAuthService
    {
        private readonly IUserRepository _userRepository;

        public AuthService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public User Authenticate(UserDTO userDTO)
        {
            var user = _userRepository.GetUserByUsername(userDTO.Username);
            if (user == null) return null;

                return user; 
            
        }

        private bool VerifyPassword(string password, string storedHash)
        {
            // Add password verification logic, e.g., using bcrypt
            // For now, just checking equality for demonstration purposes
            return password == storedHash;
        }
    }
}
