(this["webpackJsonppersonal-wallet"]=this["webpackJsonppersonal-wallet"]||[]).push([[0],{27:function(e,n,t){},28:function(e,n,t){},29:function(e,n,t){},30:function(e,n,t){},31:function(e,n,t){},32:function(e,n,t){},33:function(e,n,t){},34:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t(1),s=t.n(c),l=t(20),r=t.n(l),j=(t(27),t(9)),i=t(10),u=t(7),b=t(8),o=t(2);t(28);function d(e){var n=Object(c.useState)(""),t=Object(u.a)(n,2),s=t[0],l=t[1],r={name:"",balance:"",transactions:[]},b={Date:"",amount:"",conBalance:""},o=e.users.map((function(e,n){return e.name}));o=[" "].concat(Object(j.a)(o));return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("form",{onSubmit:function(n){return function(n){n.preventDefault();var t=n.target[0].value;e.users.forEach((function(a,c){if(a.name===t){b.Date=new Date,b.Date=b.Date.toString().slice(0,15),b.amount=n.target[1].value,b.conBalance=Number(a.balance)+Number(b.amount),b.conBalance=Number(b.conBalance).toFixed(2),b.amount="+".concat(b.amount);var s=Object(i.a)({},b);r.balance=s.conBalance,r.name=a.name,r.transactions=a.transactions,r.transactions.push(s),e.addFunds(r),l("Funds added successfully")}}))}(n)},className:"add-funds",children:[Object(a.jsx)("label",{htmlFor:"name",children:"Name"}),Object(a.jsx)("select",{id:"name",name:"name",children:o.map((function(e,n){return Object(a.jsx)("option",{value:"".concat(e),children:e},"".concat(e,"_").concat(n))}))}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{htmlFor:"amount",children:"Amount (Rs)"}),Object(a.jsx)("input",{type:"text",id:"amount",name:"amount"})," ",Object(a.jsx)("br",{}),Object(a.jsx)("div",{className:"sub",children:Object(a.jsx)("input",{type:"submit",value:"Submit"})})]}),Object(a.jsx)("p",{className:"add-funds-msg",children:s})]})}t(29);function m(e){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("table",{children:[Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Name"}),Object(a.jsx)("th",{children:"Date"}),Object(a.jsx)("th",{children:"Amount (Rs)"}),Object(a.jsx)("th",{children:"Balance (Rs)"})]}),e.users.map((function(e,n){return e.transactions.map((function(n){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:e.name}),Object(a.jsx)("td",{children:n.Date}),Object(a.jsx)("td",{children:n.amount}),Object(a.jsx)("td",{children:n.conBalance})]})}))}))]})})}t(30);function h(e){var n=e.val;return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("table",{children:[Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"User Id"}),Object(a.jsx)("th",{children:"Name"}),Object(a.jsx)("th",{children:"Phone"}),Object(a.jsx)("th",{children:"Balance (Rs)"})]}),n.map((function(e,n){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"Usr ".concat(e.id)}),Object(a.jsx)("td",{children:e.name}),Object(a.jsx)("td",{children:e.phnum}),Object(a.jsx)("td",{children:e.balance})]},"".concat(e,"_").concat(n))}))]})})}t(31);function O(e){var n=Object(c.useState)(""),t=Object(u.a)(n,2),s=t[0],l=t[1],r=e.users.map((function(e,n){return e.name}));r=[" "].concat(Object(j.a)(r));return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("form",{onSubmit:function(n){return function(n){n.preventDefault();var t=n.target[0].value;e.users.forEach((function(e,n){e.name===t&&l(e.balance)}))}(n)},className:"check-balance",children:[Object(a.jsx)("label",{htmlFor:"name",children:"Name"}),Object(a.jsx)("select",{id:"name",name:"name",children:r.map((function(e,n){return Object(a.jsx)("option",{value:"".concat(e),children:e},"".concat(e,"_").concat(n))}))}),Object(a.jsx)("div",{className:"sub",children:Object(a.jsx)("input",{type:"submit",value:"Get Balance"})})]}),""!==s?Object(a.jsx)("p",{className:"availBal",children:"Available Balance is ".concat(s)}):null]})}t(32);function x(e){var n=Object(c.useState)(""),t=Object(u.a)(n,2),s=t[0],l=t[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("form",{onSubmit:function(n){return function(n){n.preventDefault();var t={id:"",name:"",phnum:"",amount:"",balance:""};t.id=e.lisT.length+1,t.name=n.target[0].value,t.phnum=n.target[1].value,t.amount=n.target[2].value,t.balance=Number(t.amount);var a=Object(i.a)({},t);e.setUser(a),l("User has Added Successfully!")}(n)},className:"new-wallet",children:[Object(a.jsx)("label",{htmlFor:"name",children:"Name"}),Object(a.jsx)("input",{type:"text",id:"name",name:"name"})," ",Object(a.jsx)("br",{}),Object(a.jsx)("label",{htmlFor:"phone",children:"Phone"}),Object(a.jsx)("input",{type:"number",id:"phone",name:"Phone"})," ",Object(a.jsx)("br",{}),Object(a.jsx)("label",{htmlFor:"amount",children:"Amount (RS)"}),Object(a.jsx)("input",{type:"text",id:"amount",name:"amount"})," ",Object(a.jsx)("br",{}),Object(a.jsxs)("div",{className:"sub",children:[Object(a.jsx)("input",{type:"submit",value:"Submit"})," ",Object(a.jsx)("br",{})]})]}),Object(a.jsx)("p",{className:"usr-msg",children:s})]})}t(33);function p(e){var n=Object(c.useState)(""),t=Object(u.a)(n,2),s=t[0],l=t[1],r={name:"",balance:"",transactions:[]},b={Date:"",amount:"",conBalance:""},o=e.users.map((function(e,n){return e.name}));o=[" "].concat(Object(j.a)(o));return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("form",{onSubmit:function(n){return function(n){n.preventDefault();var t=n.target[0].value;e.users.forEach((function(a,c){if(a.name===t){b.Date=new Date,b.Date=b.Date.toString().slice(0,15),b.amount=n.target[1].value,b.conBalance=Number(a.balance)-Number(b.amount),b.conBalance=Number(b.conBalance).toFixed(2),b.amount="-".concat(b.amount);var s=Object(i.a)({},b);r.balance=b.conBalance,r.name=a.name,r.transactions=a.transactions,r.transactions.push(s),e.addFunds(r),l("Funds deducted successfully")}}))}(n)},className:"spend-funds",children:[Object(a.jsx)("label",{htmlFor:"name",children:"Name"}),Object(a.jsx)("select",{id:"name",name:"name",children:o.map((function(e,n){return Object(a.jsx)("option",{value:"".concat(e),children:e},"".concat(e,"_").concat(n))}))}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{htmlFor:"amount",children:"Amount (Rs)"}),Object(a.jsx)("input",{type:"text",id:"amount",name:"amount"})," ",Object(a.jsx)("br",{}),Object(a.jsx)("div",{className:"sub",children:Object(a.jsx)("input",{type:"submit",value:"Submit"})})]}),Object(a.jsx)("p",{className:"spend-funds-msg",children:s})]})}t(34);var f=function(){var e={id:"",name:"",phnum:"",balance:"",transactions:[{Date:"",amount:"",conBalance:""}]},n=Object(c.useState)([{id:"1",name:"Name1",phnum:"9988998777",balance:"765.43",transactions:[{Date:"Sun Jan 31 2021",amount:"+200",conBalance:"456"}]},{id:"2",name:"Name2",phnum:"7763423688",balance:"443.24",transactions:[{Date:"Sun Jan 31 2021",amount:"-200",conBalance:"600"}]},{id:"3",name:"Name3",phnum:"3434565466",balance:"20.05",transactions:[{Date:"Sun Jan 31 2021",amount:"+20",conBalance:"20.05"}]}]),t=Object(u.a)(n,2),s=t[0],l=t[1],r=function(e){s.forEach((function(n,t){n.name===e.name&&(n.balance=e.balance,n.transactions=e.transactions)}))};return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("div",{className:"Title",children:Object(a.jsx)("h1",{children:"Personal Wallet UI"})}),Object(a.jsxs)("div",{className:"body-container",children:[Object(a.jsx)("div",{className:"navbar",children:Object(a.jsx)("nav",{children:Object(a.jsxs)("ul",{className:"nav-text",children:[Object(a.jsx)("li",{children:Object(a.jsx)(b.b,{to:"/",children:"All Wallets"})}),Object(a.jsx)("li",{children:Object(a.jsx)(b.b,{to:"/newWallet",children:"New Wallet"})}),Object(a.jsx)("li",{children:Object(a.jsx)(b.b,{to:"/checkBalance",children:"Check Balance"})}),Object(a.jsx)("li",{children:Object(a.jsx)(b.b,{to:"/addFunds",children:"Add Funds"})}),Object(a.jsx)("li",{children:Object(a.jsx)(b.b,{to:"/spendFunds",children:"Spend Funds"})}),Object(a.jsx)("li",{children:Object(a.jsx)(b.b,{to:"/allTransactions",children:"All Transactions"})})]})})}),Object(a.jsx)("div",{className:"main-container",children:Object(a.jsxs)(o.c,{children:[Object(a.jsx)(o.a,{path:"/newWallet",children:Object(a.jsx)(x,{lisT:s,setUser:function(n){e.id=n.id,e.name=n.name,e.phnum=n.phnum,e.balance=n.balance;var t=Object(i.a)({},e);s.push(t),l(Object(j.a)(s))}})}),Object(a.jsx)(o.a,{path:"/checkBalance",children:Object(a.jsx)(O,{users:s})}),Object(a.jsx)(o.a,{path:"/addFunds",children:Object(a.jsx)(d,{users:s,addFunds:r})}),Object(a.jsx)(o.a,{path:"/spendFunds",children:Object(a.jsx)(p,{users:s,addFunds:r})}),Object(a.jsx)(o.a,{path:"/allTransactions",children:Object(a.jsx)(m,{users:s})}),Object(a.jsx)(o.a,{path:"/",children:Object(a.jsx)(h,{val:s})})]})})]})]})},v=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,41)).then((function(n){var t=n.getCLS,a=n.getFID,c=n.getFCP,s=n.getLCP,l=n.getTTFB;t(e),a(e),c(e),s(e),l(e)}))};r.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(b.a,{children:Object(a.jsx)(f,{})})}),document.getElementById("root")),v()}},[[40,1,2]]]);
//# sourceMappingURL=main.714a5ff4.chunk.js.map