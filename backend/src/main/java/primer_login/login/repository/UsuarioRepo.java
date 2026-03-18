package primer_login.login.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import primer_login.login.model.Usuario;

@Repository
public interface UsuarioRepo extends JpaRepository<Usuario, Long>{
    
    Optional<Usuario> findByEmail(String email);

}
