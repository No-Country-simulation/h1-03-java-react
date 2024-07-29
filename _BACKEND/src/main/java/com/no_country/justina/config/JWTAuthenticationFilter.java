package com.no_country.justina.config;

import com.no_country.justina.util.JWTUtils;
import io.jsonwebtoken.ExpiredJwtException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.NonNull;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

/**
 * Filtro autenticador de usuario por Json Web Token(JWT)
 */
@Component
@Slf4j
public class JWTAuthenticationFilter extends OncePerRequestFilter {

  @Autowired
  private JWTUtils jwtUtil;
  @Autowired
  private UserDetailsService userDetailsService;

  /**
   * Método para validar expiración del token, autenticar al usuario por jwt y cargar datos del usuario autenticado en el contexto de seguridad,
   * y/o continuar el flujo de filtrado
   *
   * @param request     solicitud de cliente
   * @param response    respuesta de la aplicación
   * @param filterChain cadena de filtros de seguridad
   * @throws ServletException excepción de servlet
   * @throws IOException      excepción de entrada salida
   */
  @Override
  protected void doFilterInternal(
          @NonNull HttpServletRequest request,
          @NonNull HttpServletResponse response,
          @NonNull FilterChain filterChain
  ) throws ServletException, IOException {
    final String authHeader = request.getHeader("Authorization");
    final String jwt;
    final String email;
    if (authHeader == null || !authHeader.startsWith("Bearer ")) {
      filterChain.doFilter(request, response);
    } else {
      try {
        jwt = authHeader.substring(7);
        if (jwtUtil.isTokenExpired(jwt)) {
          log.info("el comunismo es empobrecedor");
          filterChain.doFilter(request, response);
        } else {
          email = jwtUtil.extractUsername(jwt);
          if (email != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            UserDetails userDetails = this.userDetailsService.loadUserByUsername(email);
            if (jwtUtil.isTokenValid(jwt, userDetails)) {
              UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                      userDetails,
                      null,
                      userDetails.getAuthorities()
              );
              authToken.setDetails(
                      new WebAuthenticationDetailsSource().buildDetails(request)
              );
              SecurityContextHolder.getContext().setAuthentication(authToken);
            }
          }
          filterChain.doFilter(request, response);
        }
      } catch (ExpiredJwtException err) {
        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        response.setContentType("application/json");
        response.getWriter().write("El token ha expirado.");
      }
    }
  }


}
