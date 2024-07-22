package com.no_country.justina.exception;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class GlobalExceptionHandler {

  @ExceptionHandler(EntityNotFoundException.class)
  public ResponseEntity<?> handleNotFound(EntityNotFoundException e, WebRequest request){
    var error = new ErrorDetails(LocalDateTime.now(), e.getMessage(), request.getDescription(false));
    return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
  }

  @ExceptionHandler(MethodArgumentNotValidException.class)
  public ResponseEntity<?> handleInvalidField(MethodArgumentNotValidException e){
    Map<String, String> errors = new HashMap<>();
    e.getBindingResult().getAllErrors().forEach((err)->{
      String fieldname = ((FieldError) err).getField();
      String message = err.getDefaultMessage();
      errors.put(fieldname, message);
    });
    return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
  }

  @ExceptionHandler(MedicalHistoryExistException.class)
  public ResponseEntity<?> handleDuplicatedMedicalHistory(MedicalHistoryExistException e, WebRequest request){
    var error = new ErrorDetails(LocalDateTime.now(), e.getMessage(), request.getDescription(false));
    return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
  }

  @ExceptionHandler(EmailExistsException.class)
  public ResponseEntity<?> handleEmailException(EmailExistsException e, WebRequest request){
    var error = new ErrorDetails(LocalDateTime.now(), e.getMessage(), request.getDescription(false));
    return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
  }

  @ExceptionHandler(IllegalArgumentException.class)
  public ResponseEntity<?> handleIlegalArgument(IllegalArgumentException e, WebRequest request) {
    var error = new ErrorDetails(LocalDateTime.now(), e.getMessage(), request.getDescription(false));
    return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
  }

//  @ExceptionHandler(Exception.class)
//  public ResponseEntity<?> handleGlobalExceptions(Exception ex, WebRequest request){
//    ErrorDetails error = new ErrorDetails(LocalDateTime.now(), ex.getMessage(), request.getDescription(false) );
//    return new ResponseEntity<>(error, HttpStatus.INTERNAL_SERVER_ERROR);
//  }
}
