package com.quickshift.service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.quickshift.entity.Admin;
import com.quickshift.entity.AdminRequest;
import com.quickshift.entity.Calendar;
import com.quickshift.entity.Member;
import com.quickshift.entity.MemberRequest;
import com.quickshift.entity.Shift;
import com.quickshift.entity.Store;
import com.quickshift.entity.Timeplan;
import com.quickshift.form.AddStoreForm;
import com.quickshift.form.CreateAccountForm;
import com.quickshift.repository.AdminRepository;
import com.quickshift.repository.AdminRequestRepository;
import com.quickshift.repository.CalendarRepository;
import com.quickshift.repository.MemberRepository;
import com.quickshift.repository.MemberRequestRepository;
import com.quickshift.repository.ShiftRepository;
import com.quickshift.repository.StoreRepository;
import com.quickshift.repository.TimeplanRepository;

import lombok.Data;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AdminService {
	
	private final AdminRepository adminRep;
	private final StoreRepository storeRep;
	private final MemberRepository memberRep;
	private final TimeplanRepository timeplanRep;
	private final AdminRequestRepository adminRequestRep;
	private final MemberRequestRepository memberRequestRep;
	private final CalendarRepository calendarRep;
	private final ShiftRepository shiftRep;
	private final PasswordEncoder passwordEncoder;
	
	public boolean existMail(String mail) {
		
		return adminRep.findByMail(mail) != null;
	}
	
	public boolean matchPass(String pass1, String pass2) {
		
	    if (pass1 == null || pass2 == null) {
	        return false;
	    }
	    return pass1.equals(pass2);
	}
	
	public boolean isCanLogin(String mail, String pass) {
		
		Admin admin = adminRep.findByMail(mail);
	    //return admin != null && pass.equals(admin.getAdminPass());
		return admin != null && passwordEncoder.matches(pass, admin.getPass());
	}
	/*--------------------------------------------------------
	  Adminテーブル操作
	 --------------------------------------------------------*/
	public Admin findByAdminMail(String mail) {
		return adminRep.findByMail(mail);
	}
	@Transactional
	public void saveAdmin(CreateAccountForm form) {
		
		Admin admin = new Admin();
		admin.setMail(form.getMail());
		admin.setName(form.getName());
		admin.setPass(form.getPass1());
		
		adminRep.save(admin);
	}
	/*--------------------------------------------------------
	  Storeテーブル操作
	 --------------------------------------------------------*/
	public Store findByStoreId(Long id) {
		
		return storeRep.findById(id).get();
	}
	
	public List<Store> findStoreByAdmin(Admin admin){
		
		return storeRep.findByAdmin(admin);
	}
	
	@Transactional
	public void saveStore(AddStoreForm form, Admin admin) {
		
		Store store = new Store();
		store.setName(form.getName());
		store.setPass(encoder(form.getPass1()));
		store.setAdmin(admin);
		
		storeRep.save(store);
	}
	
	@Transactional
	public void updateStoreUrl(Long id, String url) {
		
		storeRep.updateUrl(id, url);
	}
	/*--------------------------------------------------------
	  Memberテーブル操作
	 --------------------------------------------------------*/
	public List<Member> findMemberByStore(Store store){
		
		return memberRep.findByStore(store);
	}
	
	public Member findMemberById(Long id) {
		
		return memberRep.findById(id).get();
	}
	
<<<<<<< HEAD
=======
	public Member findMemberByStoreAndName(Store store, String name) {
		
		return memberRep.findByStoreAndName(store, name);
	}
	
>>>>>>> e2089f548ec708cec6e496c0fa3c3e1deda457f7
	@Transactional
	public void updateMemberName(Long id, String name) {
		
		memberRep.updateName(id, name);
	}
	
	@Transactional
	public void deleteAllMember(Store store) {
		
		memberRep.deleteAllByStore(store);
	}
<<<<<<< HEAD
=======
	
>>>>>>> e2089f548ec708cec6e496c0fa3c3e1deda457f7
	@Transactional
	public void saveMember(Member member) {
		
		memberRep.save(member);
	}
	/*--------------------------------------------------------
	  Timeplanテーブル操作
	 --------------------------------------------------------*/
	public Timeplan findByTimeplanId(Long id) {
		return timeplanRep.findById(id).get();
	}
	
	public List<Timeplan> findTimeplanByStore(Store store){
		
		return timeplanRep.findByStore(store);
	}
	
	@Transactional
	public void deleteAllTimeplan(Store store) {
		
		timeplanRep.deleteAllByStore(store);
	}
	
	@Transactional
	public void saveTimeplan(Timeplan timeplan) {
		
		timeplanRep.save(timeplan);
	}
	
	@Transactional
	public void updateTimeplan(Long id, String name, String from, String to) {
		
		timeplanRep.updateName(id, name, from, to);
	}
	/*--------------------------------------------------------
	  AdminRequestテーブル操作
	 --------------------------------------------------------*/
	@Transactional
	public void saveAdminRequest(AdminRequest request) {
		
		adminRequestRep.save(request);
	}
	
	public List<AdminRequest> findAdminRequestByStore(Store store){
		
		return adminRequestRep.findByStore(store);
	}
	
	@Transactional
	public void updateAdminRequest(String num, String calendar, String timeplan) {
		
		adminRequestRep.updateName(num, calendar, timeplan);
	}
	/*--------------------------------------------------------
	  MemberRequestテーブル操作
	 --------------------------------------------------------*/
<<<<<<< HEAD
=======
	public List<MemberRequest> findMemberRequestByMember(Member member){
		
		return memberRequestRep.findByMember(member);
	}
	
>>>>>>> e2089f548ec708cec6e496c0fa3c3e1deda457f7
	@Transactional
	public void saveMemberRequest(MemberRequest request) {
		
		memberRequestRep.save(request);
	}
<<<<<<< HEAD
=======
	
	@Transactional
	public void deleteMemberRequest(MemberRequest request) {
		
		memberRequestRep.delete(request);
	}
>>>>>>> e2089f548ec708cec6e496c0fa3c3e1deda457f7
	/*--------------------------------------------------------
	  Shiftテーブル操作
	 --------------------------------------------------------*/
	public List<String> findClosingMonth(Store store) {
		
		List<AdminRequest> requests = adminRequestRep.findByStore(store);
		List<String> months = new ArrayList<String>();
		
		for(AdminRequest req : requests) {
			
			String str = req.getCalendar().getCyear() + ":" + req.getCalendar().getCmonth();
			
			if(!months.contains(str)) {
				months.add(str);
			}
		}
		
		return months;
	}
	
	public List<Shift> findShiftByStore(Store store){
		
		return shiftRep.findByStore(store);
	}
	
	/*=*=*=*=*=* 自動シフト作成ロジック *=*=*=*=*=*/
	public List<Shift> autoShift(List<AdminRequest> adminRequests){
		
		List<Member> members = memberRep.findByStore(adminRequests.get(0).getStore());
		List<Shift> shifts = new ArrayList<Shift>();
		List<MemberCount> counts = new ArrayList<MemberCount>();
		
		for(Member member : members) {
			
			MemberCount count = new MemberCount(member);
			counts.add(count);
		}
		
		for(AdminRequest adminRequest : adminRequests) {
			
			Store store = adminRequest.getStore();
			Calendar calendar = adminRequest.getCalendar();
			Timeplan timeplan = adminRequest.getTimeplan();
			int num = adminRequest.getNum();
			
			List<MemberRequest> memberRequests = memberRequestRep.findByCalendarAndStoreAndTimeplan(calendar, store, timeplan);
			
			if(memberRequests.size() > 0) {
				
				List<Integer> indexes = new ArrayList<Integer>();
				
				for(MemberRequest memberRequest : memberRequests) {
					
					for(int i = 0; i < counts.size(); i++) {
						
						String reqName = memberRequest.getMember().getName();
						String couName = counts.get(i).getMember().getName();
						
						if(reqName.equals(couName)) {
							indexes.add(i);
						}
					}
				}
				
				MemberCount minMemberCount = Collections.min(counts, Comparator.comparingInt(MemberCount::getCount));
				int minCount = minMemberCount.getCount();
				List<Integer> minIndexes = new ArrayList<Integer>();
				
				for(int i = 0; i < memberRequests.size(); i++) {
					
					for(Integer index : indexes) {
						
						if(i == index && counts.get(i).getCount() == minCount) {
							
							minIndexes.add(i);
						}
					}
				}
				
				for(int i = 0; i < num; i++) {
					
					int rnd = new java.util.Random().nextInt(minIndexes.size());
					
					Shift shift = new Shift();
					shift.setCalendar(calendar);
					shift.setStore(store);
					shift.setTimeplan(timeplan);
					shift.setMember(members.get(minIndexes.get(rnd)));
					shifts.add(shift);				
				}
			}
		}
		return shifts;
	}
	/*=*=*=*=*=* 自動シフトに必要なクラス *=*=*=*=*=*/
	@Data
	class MemberCount{
		
		private Member member;
		private int count;
		
		public MemberCount(Member member) {
			
			this.member = member;
			count = 0;
		}
	}
	
<<<<<<< HEAD
=======
	@Transactional
	public void saveShift(Shift shift) {
		
		shiftRep.save(shift);
	}
	
>>>>>>> e2089f548ec708cec6e496c0fa3c3e1deda457f7
	/*--------------------------------------------------------
	  パスワード操作
	 --------------------------------------------------------*/
	
	public String encoder(String pass) {
      return passwordEncoder.encode(pass);
    }
	
<<<<<<< HEAD
=======
	public boolean matches(String pass, String storePass) {
		return passwordEncoder.matches(pass, storePass);
	}
	
>>>>>>> e2089f548ec708cec6e496c0fa3c3e1deda457f7
	/*--------------------------------------------------------
	  Calendarテーブル操作
	 --------------------------------------------------------*/
	public Calendar findCalendarById(Long id) {
		
		return calendarRep.findById(id).get();
	}
	
	@Transactional
	public void saveCalendar(Calendar calendar) {
		
		calendarRep.save(calendar);
	}
}