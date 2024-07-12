package com.no_country.justina.exception;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

import java.time.LocalDateTime;

@ControllerAdvice
public class GlobalExceptionHandler {

  @ExceptionHandler(EntityNotFoundException.class)
  public ResponseEntity<?> handleNotFound(EntityNotFoundException e, WebRequest request){
    var error = new ErrorDetails(LocalDateTime.now(), e.getMessage(), request.getDescription(false));
    return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
  }

  @ExceptionHandler(MedicalHistoryExistException.class)
  public ResponseEntity<?> handleDuplicatedMedicalHistory(MedicalHistoryExistException e, WebRequest request){
    var error = new ErrorDetails(LocalDateTime.now(), e.getMessage(), request.getDescription(false));
    return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
  }

  @ExceptionHandler(Exception.class)
  public ResponseEntity<?> handleGlobalExceptions(Exception ex, WebRequest request){
    ErrorDetails error = new ErrorDetails(LocalDateTime.now(), ex.getMessage(), request.getDescription(false) );
    return new ResponseEntity<>(error, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
