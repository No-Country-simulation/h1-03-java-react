package com.no_country.justina.config;

import com.no_country.justina.service.interfaces.IAppointmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Component
@RequiredArgsConstructor
public class ScheduleTask {
  private final IAppointmentService appointmentService;

  @Scheduled(cron = "0 0 22 * * ?")
  public void updateMissingAppointments(){
    LocalDateTime start = LocalDate.now().atTime(0, 0);
    LocalDateTime end = LocalDate.now().atTime(22, 0);
    var page = Pageable.unpaged();
    var pendingAppointmentsToday = this.appointmentService
            .getAllByDoctorOrSpecialty(page, null, null, null,1, start, end);
    pendingAppointmentsToday.forEach(this.appointmentService::missingAppointment);
  }
}
