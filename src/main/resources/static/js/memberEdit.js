<<<<<<< HEAD
const date = new Date();
let currentMonth;
let currentYear;

function setDate(v) {
    const value = v.split(":");
    
    currentYear = Number(value[0]);
    currentMonth = Number(value[1] - 1);
=======
let currentMonth;
let currentYear;

function setDate(year,month) {
    currentYear = Number(year);
    currentMonth = Number(month) - 1;
>>>>>>> e2089f548ec708cec6e496c0fa3c3e1deda457f7
}

function renderCalendar() {
    document.getElementById("days").innerHTML = "";
    document.getElementById("day").innerHTML = "";

    const monthYear = new Date(currentYear, currentMonth);
    createMonthCalendar(monthYear);
}

function createMonthCalendar(monthYear) {
    const first = new Date(monthYear.getFullYear(), monthYear.getMonth(), 1);
    const last = new Date(monthYear.getFullYear(), monthYear.getMonth() + 1, 0);
<<<<<<< HEAD
=======
    
>>>>>>> e2089f548ec708cec6e496c0fa3c3e1deda457f7
    const firstDay = first.getDate();
    const lastDay = last.getDate();

    console.log(firstDay);
    console.log(lastDay);

    const days = ["日", "月", "火", "水", "木", "金", "土"];
<<<<<<< HEAD
=======
    
>>>>>>> e2089f548ec708cec6e496c0fa3c3e1deda457f7
    const startDay = first.getDay(); 

    const htmldays = document.getElementById("days");
    const htmlday = document.getElementById("day");
    let limit = startDay;
<<<<<<< HEAD
=======

>>>>>>> e2089f548ec708cec6e496c0fa3c3e1deda457f7
    for (let j = 0; j < lastDay; j++) {
        const d = document.createElement("td");
        d.innerHTML = days[limit];
        if(j % 2 === 0) {
<<<<<<< HEAD
            d.classList.add("odd");
        } else {
            d.classList.add("even");
=======
            d.className = "even";
        } else {
            d.className = "odd";
>>>>>>> e2089f548ec708cec6e496c0fa3c3e1deda457f7
        }
        htmldays.appendChild(d);
        limit++;    
        if(limit > 6) {
            limit = 0;
        }
    }

    for (let i = 1; i <= lastDay; i++) {
        const d = document.createElement("td");
        d.innerHTML = i;
        if(i % 2 === 0) {
<<<<<<< HEAD
            d.classList.add("even");
        } else {
            d.classList.add("odd");
=======
            d.className = "odd";
        } else {
            d.className = "even";
>>>>>>> e2089f548ec708cec6e496c0fa3c3e1deda457f7
        }
        htmlday.appendChild(d);
    }
}

<<<<<<< HEAD
function menberAdd(m) {
  const menbers = document.querySelector(".menbers");
  const tr = document.createElement("div");
  const menber = document.createElement("div");
  menber.classList.add("men");
  menber.innerHTML = m;
  tr.classList.add("member-div");
  tr.appendChild(menber);
  menbers.appendChild(tr);

  const shift = document.querySelector(".time");
  const shiftTr = document.createElement("tr");
  shiftTr.classList.add("shift");

  const monthYear = new Date(currentYear, currentMonth);
  const last = new Date(monthYear.getFullYear(), monthYear.getMonth() + 1, 0);
  const lastDay = last.getDate();

  const shifts = document.querySelectorAll(".shift-hidden");
  const timeplans = document.querySelectorAll(".timeplan-hidden");
  for(let j = 0; j < lastDay; j++) {
      const shiftTd = document.createElement("td");
      shiftTd.className = m;
      shiftTd.dataset.id = j + 1;
      const select = document.createElement("select");

      let flag = false;
      const set = new Set();

      timeplans.forEach((t,index) => {
        const op = document.createElement("option");
        op.value = t.value;
        const v = t.value.split(":");
        op.innerHTML = `${v[0].substring(0,2)}:${v[0].substring(2,4)}~${v[1].substring(0,2)}:${v[1].substring(2,4)}`;

        shifts.forEach((s,i) => { 
          const v = s.value.split(":");
            
          if(Number(v[0]) === j + 1 && v[1] === t.dataset.id) {
            flag = true;
            if(set.has(v[0])) {
              let afSelect = setShift(v,timeplans);
              shiftTd.appendChild(afSelect);
            } else {
              op.selected = true;
              op.disabled = true;
              set.add(v[0])
            }
          }
          select.appendChild(op);
        })
      })
      if(flag === false) {
        const op = document.createElement("option");
        op.innerHTML = "休み";
        op.setAttribute("value", "");
        op.selected = true;
        op.disabled  =true;
        select.prepend(op);
      } else {
        const op = document.createElement("option");
        op.innerHTML = "休み";
        op.setAttribute("value", "");
        select.prepend(op);
      }
      shiftTd.prepend(select);
      shiftTd.classList.add("in");
      
      shiftTr.appendChild(shiftTd);
  }
  shift.appendChild(shiftTr);

  scrollBottom();
}

function setShift(value,timeplans) {
  const select = document.createElement("select");
  timeplans.forEach(t => {
    const op = document.createElement("option");
    op.value = t.value;
    const v = t.value.split(":");
    op.innerHTML = `${v[0].substring(0,2)}:${v[0].substring(2,4)}~${v[1].substring(0,2)}:${v[1].substring(2,4)}`;
    if(Number(t.dataset.id) === Number(value[1])) {
      op.selected = true;
      op.disabled = true;
    }
    select.appendChild(op);
  })
  return select;
}

function addShift() {
  const m = document.querySelector(".member-hidden").value;

  const shift = document.querySelector(".time");
  const shiftTr = document.createElement("tr");
  shiftTr.classList.add("shift");

  const monthYear = new Date(currentYear, currentMonth);
  const last = new Date(monthYear.getFullYear(), monthYear.getMonth() + 1, 0);
  const lastDay = last.getDate();

  const shifts = document.querySelectorAll(".shift-hidden");
  const timeplans = document.querySelectorAll(".timeplan-hidden");
  for(let j = 0; j < lastDay; j++) {
      const shiftTd = document.createElement("td");
      shiftTd.className = m;
      const select = document.createElement("select");
      let flag = false;

      timeplans.forEach(t => {
        const op = document.createElement("option");
        op.value = t.value;
        const v = t.value.split(":");
        op.innerHTML = `${v[0].substring(0,2)}:${v[0].substring(2,4)}~${v[1].substring(0,2)}:${v[1].substring(2,4)}`;
        shifts.forEach(s => {
          const v = s.value.split(":");
          select.appendChild(op);
        })
      
      
      })
      if(flag === false) {
        const op = document.createElement("option");
        op.innerHTML = "休み";
        op.setAttribute("value", "");
        op.selected = true;
        op.disabled  =true;
        select.prepend(op);
      }
      shiftTd.appendChild(select);
      shiftTd.classList.add("in");
      
      shiftTr.appendChild(shiftTd);
  }
  shift.appendChild(shiftTr);

  scrollBottom();
}

function delShift() {
  const times = document.querySelector(".time");
  times.lastChild.remove();
}

function submitForm() {
  const shifts = document.querySelectorAll(".shift");
  const form = document.createElement("form");
  form.className = "none";

  const div = document.createElement("div");
  shifts.forEach(s => {
    const tds = s.querySelectorAll("td");
    tds.forEach(td => {
      const selects = td.querySelectorAll("select");
      selects.forEach(se => {
        if(se.value !== "") {
          const input = document.createElement("input");
          input.type = "hidden";
          input.name = "shift";
          input.value = `${td.dataset.id},${se.value}`;//カンマでバックエンドはsplitしてもらう
          div.appendChild(input);
        }
      })
    })
  })
console.log(div);

  form.action = "/";
  form.method = "";
  document.body.appendChild(form);
  form.submit();
  form.remove();
  
}

function scrollBottom() {
const menbers = document.querySelector(".menbers");
requestAnimationFrame(() => {
  menbers.scrollTop = menbers.scrollHeight;
});
}

document.addEventListener("DOMContentLoaded",function() {

  const date = document.querySelector(".date-hidden");
  setDate(date.value);

  renderCalendar();

  const member = document.querySelector(".member-hidden");
  menberAdd(member.value);
  
  const viewP = document.createElement("p");
  const viewYear = document.getElementById("view-year");
  viewP.innerHTML = `${currentYear}年 ${currentMonth + 1}月`;
  viewYear.appendChild(viewP);

  const scrollParent = document.querySelector(".calendar-container");
  const scrollChild = document.querySelector(".menbers");
  let isSyncing = false;

  function syncScroll(source, target) {
      if (!isSyncing) {
          isSyncing = true;
          requestAnimationFrame(() => {
              target.scrollTop = source.scrollTop;
              isSyncing = false;
          });
      }
  }
  
  scrollParent.addEventListener("scroll",function() {
      syncScroll(scrollParent, scrollChild);
  })

  scrollChild.addEventListener("scroll", function() {
      syncScroll(scrollChild, scrollParent);
  })
})
=======
function addTd() {
    const trlen = document.querySelector(".time").children;
    const tr = document.createElement("tr");
    const time = document.querySelector(".time");
    const monthYear = new Date(currentYear, currentMonth);

    const first = new Date(monthYear.getFullYear(), monthYear.getMonth(), 1);
    const last = new Date(monthYear.getFullYear(), monthYear.getMonth() + 1, 0);
    const firstDay = first.getDate();
    const lastDay = last.getDate();
    
    for(let i = 0; i < lastDay; i++) {

        const td = document.createElement("td");
        const input = document.createElement("input");
        td.className = "time-cell";
        td.dataset.id = i + 1;

        input.type = "text";
        input.className = "input-cell";
        input.placeholder = "0人";
        input.setAttribute("value","");

        td.appendChild(input);

        input.addEventListener("change", function() {
            if(input.value.length === 0) {
                input.value = "";
                input.classList.toggle("in1");
            } else {
                input.value = input.value.replace(/人$/, "") + "人";
                input.classList.toggle("in1");
            }
        })

        tr.className = "cells";
        tr.dataset.id = trlen.length + 1;
        tr.appendChild(td);

    }
    time.appendChild(tr);
}

let count = 0;
function createPlan(t,f,n,i) {
    const timePlan = document.querySelector(".time-plan");
    const div = document.createElement("div");
    const div2 = document.createElement("div");
    const to = document.createElement("p");
    const from = document.createElement("p");
    const name = document.createElement("p");
    const c = document.createElement("p");

    to.innerHTML = t.substring(0,2) + ":" + t.substring(2,4);
    to.className = "to-time";
    from.innerHTML =  f.substring(0,2) + ":" + f.substring(2,4);
    from.className = "from-time";
    c.innerHTML = "~";
    name.innerHTML = n;
    div.className = "plan";
    if(i % 2 === 0) {
        div.classList.add("odd");
    } else {
        div.classList.add("even");
    }
    div2.className = "plan-time";
    div.dataset.id = i;

    div2.appendChild(to);
    div2.appendChild(c);
    div2.appendChild(from);
    div.appendChild(name);
    div.appendChild(div2);

    timePlan.appendChild(div);
    count++;
}

function submitForm() {
    const plans = document.querySelectorAll(".plan");
    const cells = document.querySelectorAll(".cells");
    const form = document.createElement("form");

    plans.forEach(p => {
        const planId = p.dataset.id;

        cells.forEach(cs => {
            const cellId = cs.dataset.id;

            if (planId === cellId) { 
                const cellElements = cs.querySelectorAll(".time-cell");

                cellElements.forEach(c => {
                    const input = c.querySelector("input");
                    if (input && input.value.length !== 0 && c.classList.contains("in-shift")) {
                        const hiddenInput = document.createElement("input");
                        hiddenInput.type = "hidden";
                        hiddenInput.name = "request";
                        const num = input.value.substring(input.value - 1, 1);
						const mon = currentMonth + 1;
                        hiddenInput.value = `${currentYear}${String(mon).padStart(2, "0")}${String(c.dataset.id).padStart(2, "0")}:${p.dataset.id}`;
                        form.appendChild(hiddenInput);
                    }
                });
            }
        });
    });
	
	const csrf = document.querySelector("input[name='_csrf']");
	  if (csrf) {
	    const csrfInput = document.createElement("input");
	    csrfInput.type = "hidden";
	    csrfInput.name = "_csrf";
	    csrfInput.value = csrf.value;
	    form.appendChild(csrfInput);
	  }
	  
	const year = document.createElement("input");
	const month = document.createElement("input");
	
	year.type = "hidden";
	year.name = "year";
	year.value = currentYear;
	month.type = "hidden";
	month.name = "month";
	month.value = currentMonth;
	
	form.appendChild(year);
	form.appendChild(month);

    console.log(form);
    	
     form.action = "/completeMemberEdit";
     form.method = "POST"; 
     form.className = "none";
     document.body.appendChild(form); 
     form.submit();
	 form.remove();
}

function setPeople(n) {
    const value = n.split(":");
    const planid = value[0];
    const date = value[1];
    const num = value[2];

    const timePlans = document.querySelectorAll(".cells");
    timePlans.forEach(t => {
        if(t.dataset.id === planid) {
            const dates = t.querySelectorAll(".time-cell");
            dates.forEach(d => {
                if(d.dataset.id === date) {
                    d.classList.add("odd");
                    const input = d.querySelector("input");
                    input.setAttribute("value",`${num}人`);
                    input.addEventListener("input", (event) => event.preventDefault());
                    d.addEventListener("click", function() {
                      d.classList.toggle("in-shift");
                    })
                }
            })
        }
    })
}

function setShift(shift) {
  const values = shift.value.split(":");
  const date = values[0];
  const plan = values[1];

  const cells = document.querySelectorAll(".cells");
  cells.forEach(cs => {
    const dates = cs.querySelectorAll(".time-cell");
    if(cs.dataset.id === plan) {
      dates.forEach(d => {
        if(d.dataset.id === date) {
          d.classList.add("in-shift");
        }
      })
    }
  })
}

const load = () => {
    const inputs = document.querySelectorAll("input");
    inputs.forEach(i => {
        i.addEventListener("input", function() {
            this.value = this.value.replace(/\D/g, '');
        })
    })
}

document.addEventListener("DOMContentLoaded",function() {
    
    const year = document.querySelector(".year-hidden");
    const month = document.querySelector(".month-hidden");
    setDate(year.value,month.value);
    renderCalendar();
    const viewP = document.createElement("p");
    const viewYear = document.getElementById("view-year");
    viewP.innerHTML = `${currentYear}年 ${currentMonth + 1}月`;
    viewYear.appendChild(viewP);

    const timePlan = document.querySelectorAll(".plan-hidden");

    timePlan.forEach(plan => {
        const to = plan.querySelector(".to");
        const from = plan.querySelector(".from");
        const name = plan.querySelector(".plan-name");
        if(name.value !== "") {
            createPlan(to.value, from.value, name.value, plan.id);
        }
    });

    const plans = document.querySelectorAll(".plan");
    
    for(let i = 0; i < plans.length; i++) {
        addTd();
    }


    const nums = document.querySelectorAll(".select-hidden");
    nums.forEach(n => {
        setPeople(n.value);
    })
    


    const scrollParent = document.querySelector(".calendar-container");
    const scrollChild = document.querySelector(".time-plan");
    let isSyncing = false;

    function syncScroll(source, target) {
        if (!isSyncing) {
            isSyncing = true;
            requestAnimationFrame(() => {
                target.scrollTop = source.scrollTop;
                isSyncing = false;
            });
        }
    }
    
    scrollParent.addEventListener("scroll",function() {
        syncScroll(scrollParent, scrollChild);
    })

    scrollChild.addEventListener("scroll", function() {
        syncScroll(scrollChild, scrollParent);
    })

    const shifts = document.querySelectorAll(".shift-hidden");
    if(shifts.length !== 0) {
      shifts.forEach(s => {
        setShift(s);
      })
    }
    

    load();
})

>>>>>>> e2089f548ec708cec6e496c0fa3c3e1deda457f7
