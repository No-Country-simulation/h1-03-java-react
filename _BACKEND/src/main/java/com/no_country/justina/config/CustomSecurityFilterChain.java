package com.no_country.justina.config;

import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class CustomSecurityFilterChain {

  private final JWTAuthenticationFilter jwtAuthenticationFilter;
  private final AuthenticationProvider authenticationProvider;


  /**
   * Método para configurar la seguridad de la aplicacion web, autorizaciones, tipo de sesion, proveedor de autenticacion y filtros
   *
   * @param httpSecurity          configuracion de seguridad http
   * @param authenticationManager administrador de autenticacion
   * @return securityFilterChain configuracion de la cadena de filtros de seguridad http
   * @throws Exception mensaje de excepcion si la configuracion falla
   */
  @Bean
  SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity, AuthenticationManager authenticationManager) throws Exception {

    return httpSecurity
            .csrf(AbstractHttpConfigurer::disable)
            .cors(Customizer.withDefaults())
            .authorizeHttpRequests(auth ->
                    auth.requestMatchers("/api/v1/users-login",
                                    "/api/v1/roles/**",
                                    "/swagger-ui/**",
                                    "/v3/api-docs/**").permitAll()
                            .requestMatchers(HttpMethod.POST, "/api/v1/users").permitAll()
                            .requestMatchers(
                                    HttpMethod.GET, "/api/v1/medical-histories/{id}").hasRole("PATIENT")
                            .requestMatchers(
                                    "/api/v1/users/**").hasAnyRole("DOCTOR", "PATIENT")
                            .requestMatchers(
                                    "/api/v1/doctors/**",
                                    "/api/v1/medical-histories/**").hasRole("DOCTOR")
                            .requestMatchers(
                                    "/api/v1/doctors/**",
                                    "/api/v1/shifts/**").hasRole("DOCTOR")
                            .requestMatchers(HttpMethod.GET,
                                    "/api/v1/doctors/**",
                                    "/api/v1/shifts/**").hasRole("PATIENT")
                            .requestMatchers(
                                    "/api/v1/patients/**", "/api/v1/appointments/**").hasRole("PATIENT")
                            .anyRequest().authenticated()
            )
            .sessionManagement(session ->
                    session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .authenticationProvider(authenticationProvider)
            .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class)
            .exceptionHandling(custom -> custom
                    .authenticationEntryPoint(authenticationEntryPoint())
                    .accessDeniedHandler(accessDeniedHandler()))
            .build();
  }

  /**
   * This method customize the message for unauthorized access.
   * @return AuthenticationEntryPoint
   */
  @Bean
  public AuthenticationEntryPoint authenticationEntryPoint() {
    return (request, response, authException) -> {
      response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
      response.getWriter().write("Unauthorized: Please log in to access this resource.");
    };
  }
  /**
   * This method handled the logic associated with exceptions for insufficient permissions.
   * @return AccessDeniedHandler
   * */
  @Bean
  public AccessDeniedHandler accessDeniedHandler() {
    return (request, response, accessDeniedException) -> {
      response.setStatus(HttpServletResponse.SC_FORBIDDEN);
      response.getWriter().write("Access Denied: You do not have permission to access this resource.");
    };
  }
}
