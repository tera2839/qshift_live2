const date = new Date();
let currentMonth;
let currentYear;

function setDate(v) {
    const value = v.split(":");
    
    currentYear = Number(value[0]);
    currentMonth = Number(value[1] - 1);
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
    const firstDay = first.getDate();
    const lastDay = last.getDate();

    console.log(firstDay);
    console.log(lastDay);

    const days = ["日", "月", "火", "水", "木", "金", "土"];
    const startDay = first.getDay(); 

    const htmldays = document.getElementById("days");
    const htmlday = document.getElementById("day");
    let limit = startDay;
    for (let j = 0; j < lastDay; j++) {
        const d = document.createElement("td");
        d.innerHTML = days[limit];
        if(j % 2 === 0) {
            d.classList.add("odd");
        } else {
            d.classList.add("even");
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
            d.classList.add("even");
        } else {
            d.classList.add("odd");
        }
        htmlday.appendChild(d);
    }
}

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