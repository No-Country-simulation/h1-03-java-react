package com.no_country.justina.config;

import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.ExternalDocumentation;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import io.swagger.v3.oas.models.security.SecurityScheme;
import org.springdoc.core.models.GroupedOpenApi;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;

/**
 *     Configuracion de Api Swagger
 */
@Configuration
public class SwaggerConfig {

    /**
     * Metodo para configurar el bean de Open API para cargar la informacion basica del proyecto
     * @return openApi informacion a mostrar en la interfaz visual html
     */
    @Bean
    public OpenAPI fimaOpenAPI() {
        return new OpenAPI()
                .info(new Info().title("Justina.io")
                        .description("Aplicación de API Rest para la plataforma Justina")
                        .version("v1.0.0")
                        .license(new License().name("Justina v1.0").url("http://")))
                .externalDocs(new ExternalDocumentation()
                        .description("Documentacion de la API")
                        .url("https://"))
                .components(new Components()
                        .addSecuritySchemes("bearer-key",
                                new SecurityScheme().type(SecurityScheme.Type.HTTP).scheme("bearer").bearerFormat("JWT")));
    }

    public SecurityScheme apiKeySecuritySchema() {
        return new SecurityScheme()
                .name("authorization")
                .description("Description about the TOKEN")
                .in(SecurityScheme.In.HEADER)
                .type(SecurityScheme.Type.APIKEY);
    }
}
