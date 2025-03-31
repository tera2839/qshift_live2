package com.quickshift.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.quickshift.entity.Calendar;
<<<<<<< HEAD
=======
import com.quickshift.entity.Member;
>>>>>>> e2089f548ec708cec6e496c0fa3c3e1deda457f7
import com.quickshift.entity.MemberRequest;
import com.quickshift.entity.Store;
import com.quickshift.entity.Timeplan;

@Repository
public interface MemberRequestRepository extends JpaRepository<MemberRequest, Long>{
<<<<<<< HEAD
=======
	List<MemberRequest> findByMember(Member member);
>>>>>>> e2089f548ec708cec6e496c0fa3c3e1deda457f7
	List<MemberRequest> findByCalendarAndStoreAndTimeplan(Calendar calendar, Store store, Timeplan timeplan);
}