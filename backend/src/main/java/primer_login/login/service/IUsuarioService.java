/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package primer_login.login.service;

import java.util.List;
import primer_login.login.model.Usuario;

public interface IUsuarioService {

    public void crearUsuario(Usuario usuario);

    public void eliminarUsuario(Long id);

    public List<Usuario> traerUsuarios();

    public Usuario traerUsuarioPorID(Long id);

    public void editarUsuario(Long id, String nombre, String telefono, String emaail, String contraseña);

}
