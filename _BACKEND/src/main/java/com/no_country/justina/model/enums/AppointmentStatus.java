package com.no_country.justina.model.enums;

import lombok.Getter;

@Getter
public enum AppointmentStatus {
  PENDING(1),
  SUCCESS(2),
  MISSING(3),
  RESCHEDULE(4),
  CANCELLED(5);

  private final int id;
  AppointmentStatus(int id) {
    this.id = id;
  }

  public static AppointmentStatus fromId(int id) {
    for (AppointmentStatus status : values()) {
      if (status.getId() == id) {
        return status;
      }
    }
    throw new IllegalArgumentException("Estado de cita inválido. id:" + id);
  }
}
