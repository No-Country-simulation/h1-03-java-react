package com.no_country.justina.exception;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.validation.FieldError;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

/**
 * Clase global para manejar excepciones en la aplicación.
 */
@ControllerAdvice
public class GlobalExceptionHandler {

  /**
   * Maneja la excepción EntityNotFoundException.
   *
   * @param e       la excepción lanzada
   * @param request la solicitud web que causó la excepción
   * @return una respuesta HTTP con detalles del error y el estado NOT_FOUND (404)
   */
  @ExceptionHandler(EntityNotFoundException.class)
  public ResponseEntity<ErrorDetails> handleNotFound(EntityNotFoundException e, WebRequest request){
    var error = new ErrorDetails(LocalDateTime.now(), 404, "NOT_FOUND", e.getMessage(),
            request.getDescription(false));
    return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
  }

  /**
   * Maneja la excepción MethodArgumentNotValidException.
   *
   * @param e la excepción lanzada
   * @return una respuesta HTTP con un mapa de errores y el estado BAD_REQUEST (400)
   */
  @ExceptionHandler(MethodArgumentNotValidException.class)
  public ResponseEntity<Map<String, String>> handleInvalidField(MethodArgumentNotValidException e){
    Map<String, String> errors = new HashMap<>();
    e.getBindingResult().getAllErrors().forEach((err)->{
      String fieldName = ((FieldError) err).getField();
      String message = err.getDefaultMessage();
      errors.put(fieldName, message);
    });
    return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
  }

  /**
   * Maneja la excepción MedicalHistoryExistException.
   *
   * @param e       la excepción lanzada
   * @param request la solicitud web que causó la excepción
   * @return una respuesta HTTP con detalles del error y el estado BAD_REQUEST (400)
   */
  @ExceptionHandler(MedicalHistoryExistException.class)
  public ResponseEntity<ErrorDetails> handleDuplicatedMedicalHistory(MedicalHistoryExistException e,
                                                                     WebRequest request){
    var error = new ErrorDetails(LocalDateTime.now(),400, "BAD_REQUEST", e.getMessage(),
            request.getDescription(false));
    return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
  }

  /**
   * Maneja la excepción EmailExistsException.
   *
   * @param e       la excepción lanzada
   * @param request la solicitud web que causó la excepción
   * @return una respuesta HTTP con detalles del error y el estado BAD_REQUEST (400)
   */
  @ExceptionHandler(EmailExistsException.class)
  public ResponseEntity<ErrorDetails> handleEmailException(EmailExistsException e, WebRequest request){
    var error = new ErrorDetails(LocalDateTime.now(), 400, "BAD_REQUEST", e.getMessage(),
            request.getDescription(false));
    return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
  }

  /**
   * Maneja la excepción IllegalArgumentException.
   *
   * @param e       la excepción lanzada
   * @param request la solicitud web que causó la excepción
   * @return una respuesta HTTP con detalles del error y el estado BAD_REQUEST (400)
   */
  @ExceptionHandler(IllegalArgumentException.class)
  public ResponseEntity<ErrorDetails> handleIllegalArgument(IllegalArgumentException e, WebRequest request) {
    var error = new ErrorDetails(LocalDateTime.now(), 400, "BAD_REQUEST", e.getMessage(),
            request.getDescription(false));
    return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
  }

  /**
   * Maneja la excepción HttpMessageNotReadableException.
   *
   * @param e       la excepción lanzada
   * @param request la solicitud web que causó la excepción
   * @return una respuesta HTTP con detalles del error y el estado BAD_REQUEST (400)
   */
  @ExceptionHandler(HttpMessageNotReadableException.class)
  public ResponseEntity<ErrorDetails> handleHttpMessageNotReadable(HttpMessageNotReadableException e,
                                                                   WebRequest request) {
    var error = new ErrorDetails(LocalDateTime.now(), 400, "BAD_REQUEST",
            "El tipo de formato ingresado es incorrecto", request.getDescription(false));
    return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
  }

  /**
   * Maneja la excepción HttpRequestMethodNotSupportedException.
   *
   * @param e       la excepción lanzada
   * @param request la solicitud web que causó la excepción
   * @return una respuesta HTTP con detalles del error y el estado METHOD_NOT_ALLOWED (405)
   */
  @ExceptionHandler(HttpRequestMethodNotSupportedException.class)
  public ResponseEntity<ErrorDetails> handleHttpRequestMethodNotSupported(HttpRequestMethodNotSupportedException e, WebRequest request) {
    var error = new ErrorDetails(LocalDateTime.now(), 405, "METHOD_NOT_ALLOWED", e.getMessage(),
            request.getDescription(false));
    return new ResponseEntity<>(error, HttpStatus.METHOD_NOT_ALLOWED);
  }

  /**
   * Captura los mensajes de excepcion de ya existe el email, contraseña incorrecta y excepciones generales,
   * y los devuelve en una respuesta http
   * @param e mensaje de excepcion
   * @return respuesta http con mensaje
   */
  @ExceptionHandler(Exception.class)
  public ResponseEntity<ErrorDetails> badRequestExceptions(Exception e, WebRequest request){
    var errorDetails = new ErrorDetails(LocalDateTime.now(), 400, "BAD_REQUEST", e.getMessage(),
            request.getDescription(false));
    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorDetails);
  }
}
