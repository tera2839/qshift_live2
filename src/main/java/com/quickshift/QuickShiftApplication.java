package com.quickshift;

<<<<<<< HEAD
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

=======
import java.time.LocalDate;
import java.time.Year;
import java.time.YearMonth;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;

import com.quickshift.entity.Calendar;
>>>>>>> e2089f548ec708cec6e496c0fa3c3e1deda457f7
import com.quickshift.service.AdminService;

import lombok.RequiredArgsConstructor;

@SpringBootApplication
@RequiredArgsConstructor
public class QuickShiftApplication {
	
	private final AdminService service;

	public static void main(String[] args) {
		SpringApplication.run(QuickShiftApplication.class, args);
	}
	
<<<<<<< HEAD
//	@EventListener(ApplicationReadyEvent.class)
//	public void initialize() {
//		System.out.println("""
//				=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=
//							起動完了
//				=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=
//				""");
//		int currentYear = Year.now().getValue();
//		int currentMonth = LocalDate.now().getMonthValue();
//		
//		for(int i = -1; i < 2; i++) {
//			
//			for(int j = 1; j < 13; j++) {
//			
//				YearMonth yearMonth = YearMonth.of(currentYear + i, j);
//				int maxDay = yearMonth.lengthOfMonth();
//				
//				for(int k = 1; k < maxDay + 1; k++) {
//					
//					Calendar calendar = new Calendar();
//					calendar.setCyear(currentYear + i);
//					calendar.setCmonth(j); 
//					calendar.setCdate(k);
//					String str = "" + (currentYear + i) + j + k;
//					Long lo = Long.parseLong(str);
//					calendar.setId(lo);
//					service.saveCalendar(calendar);
//				}
//			}
//		}
//		System.out.println("""
//				=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=
//					   カレンダー登録完了
//				=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=
//				""");
//	}
=======
	@EventListener(ApplicationReadyEvent.class)
	public void initialize() {
		System.out.println("""
				=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=
							起動完了
				=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=
				""");
		int currentYear = Year.now().getValue();
		int currentMonth = LocalDate.now().getMonthValue();
		
		for(int i = -1; i < 2; i++) {
			
			for(int j = 1; j < 13; j++) {
			
				YearMonth yearMonth = YearMonth.of(currentYear + i, j);
				int maxDay = yearMonth.lengthOfMonth();
				
				for(int k = 1; k < maxDay + 1; k++) {
					
					Calendar calendar = new Calendar();
					calendar.setCyear(currentYear + i);
					calendar.setCmonth(j);
					calendar.setCdate(k);
					String month = j + "";
					if(month.length() == 1) {
						month = "0" + month;
					}
					String date = k + "";
					if(date.length() == 1) {
						date = "0" + date;
					}
					String str = "" + (currentYear + i) + month + date;
					Long lo = Long.parseLong(str);
					calendar.setId(lo);
					service.saveCalendar(calendar);
				}
			}
		}
		System.out.println("""
				=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=
					   カレンダー登録完了
				=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=
				""");
	}
>>>>>>> e2089f548ec708cec6e496c0fa3c3e1deda457f7
}