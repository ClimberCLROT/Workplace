var now  = new Date();
var weekday = new Array(7);
    weekday[0]=  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
var day = now.getDay();
var headerArray = ["Employee Name","Role","Location"];
var employeeArray = [
    ["David Anderson","CEO",DavidAttendance(day)],
    ["Goncalo Pereira","Technical Lead",GoncaloAttendance(day)],
    ["Rob Targett","Consultant",RobAttendance(day)],
    ["Eric Park","Consultant",KishanAttendance(day)],
    ];
var tab = document.getElementsByTagName('table')[0];
var headerRow = document.createElement('tr');
tab.appendChild(headerRow);
function DavidAttendance(weekday){
    if(weekday === 5 || weekday === 6 || weekday === 0) return "Out of Office";
    return "In Office";
}
function GoncaloAttendance(weekday){
    if(weekday === 5 || weekday === 6 || weekday === 0) return "Out of Office";
    return "In Office";
}
function RobAttendance(weekday){
    if(weekday === 2 || weekday === 4) return "In Office";
    return "Out of Office";
}
function KishanAttendance(weekday){
    if(weekday === 0 || weekday === 6) return "In Office";
    return "On Client Site";
}
function StandardAttendance(weekday){
    if(weekday === 0 || weekday === 6) return "Out of Office";
    return "In Office";
}


for (row = 0; row < headerArray.length; row++){
    thead = document.createElement('th')
    th = document.createTextNode(headerArray[row]);
    thead.appendChild(th);
    headerRow.appendChild(thead);
}


for (row = 0; row < employeeArray.length; row++){
    tr = document.createElement('tr');
    for (col = 0; col < employeeArray[row].length; col++){
      td = document.createElement('td');
      tn = document.createTextNode(employeeArray[row][col]);
      td.appendChild(tn);
      tr.appendChild(td);
    }

    tab.appendChild(tr);
}
  