let companyName = 'New Digital Enterprises, Inc.';
let anOffering = 'a revolutionary new platform';
let aTargetAudience = 'the world';
let solveAProblem = 'create new dynamic markets for business';
let secretSauce = 'by building invite-only Internets';

let first = 'My company, ' + companyName;
let second = 'is developing ' + anOffering;
let third = 'to help ' + aTargetAudience;

let mainDiv = document.getElementById("main");
mainDiv.innerHTML = first + '\n' + second + '\n' + third + '\n' + solveAProblem + '\n' + secretSauce;
console.log(mainDiv);
