/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package primer_login.login.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import primer_login.login.model.Usuario;
import primer_login.login.repository.UsuarioRepo;

@Service
public class UsuarioService implements IUsuarioService {

    @Autowired
    private UsuarioRepo usuarioRepo;

    @Override
    public void crearUsuario(Usuario usuario) {
        usuarioRepo.save(usuario);
    }

    @Override
    public void eliminarUsuario(Long id) {
        usuarioRepo.deleteById(id);
    }

    @Override
    public List<Usuario> traerUsuarios() {
        return usuarioRepo.findAll();
    }

    @Override
    public Usuario traerUsuarioPorID(Long id) {
        return usuarioRepo.findById(id).orElse(null);
    }

    @Override
    public void editarUsuario(Long id, String nombre, String telefono, String emaail, String contraseña) {
        Usuario usuario = this.traerUsuarioPorID(id);
        usuario.setPassword(contraseña);
        usuario.setEmail(emaail);
        usuario.setNombre(nombre);
        usuario.setTelefono(telefono);
        usuarioRepo.save(usuario);

    }

}
