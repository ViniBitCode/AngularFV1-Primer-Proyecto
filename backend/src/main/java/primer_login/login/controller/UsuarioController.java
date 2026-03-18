/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package primer_login.login.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import primer_login.login.model.Usuario;
import primer_login.login.service.IUsuarioService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UsuarioController {

    @Autowired
    private IUsuarioService usuarioService;

    @PostMapping("/registro")
    public ResponseEntity<String> registrarUsuario(@RequestBody Usuario usuario) {

        usuarioService.crearUsuario(usuario);

        return ResponseEntity.ok("Usuario registrado con exito");

    }

    @PostMapping("/cuarta-pagina-login")
    public ResponseEntity<?> iniciarSesion(@RequestBody Usuario usuario_login) {

        System.out.println("Intento de login - Email: " + usuario_login.getEmail() + " | Pass: " + usuario_login.getPassword());

        // 2. Llamamos al servicio que busca y compara
        Optional<Usuario> usuarioValidado = usuarioService.iniciarSesion(usuario_login.getEmail(), usuario_login.getPassword());

        // 3. Evaluamos el resultado
        if (usuarioValidado.isPresent()) {
            System.out.println("Login EXITOSO para: " + usuario_login.getEmail());
            return ResponseEntity.ok(usuarioValidado.get()); // Enviamos el usuario completo a Angular
        } else {
            System.out.println("Login FALLIDO para: " + usuario_login.getEmail());
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Credenciales incorrectas");
        }
    }

}
