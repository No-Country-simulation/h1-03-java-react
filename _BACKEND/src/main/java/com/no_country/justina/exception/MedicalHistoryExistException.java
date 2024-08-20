package com.no_country.justina.exception;

public class MedicalHistoryExistException extends RuntimeException{
  public MedicalHistoryExistException( long id) {
    super("Historia clínica existente para el paciente con id: "+id);
  }
}
