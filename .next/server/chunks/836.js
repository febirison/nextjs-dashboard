exports.id=836,exports.ids=[836],exports.modules={2093:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var s=r(92710),o=r(80706),n=r(721),i=r.n(n);function a(){return(0,s.jsxs)("div",{className:`${i().className} flex flex-row items-center leading-none text-white`,children:[(0,s.jsx)(o.A,{className:"h-12 w-12 rotate-[15deg]"}),(0,s.jsx)("p",{className:"text-[44px]",children:"Acme"})]})}},3894:()=>{},5488:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});var s=r(92710),o=r(66245),n=r.n(o),i=r(55737),a=r(2093),c=r(29511);function l(){return(0,s.jsxs)("div",{className:"flex h-full flex-col px-3 py-4 md:px-2",children:[(0,s.jsx)(n(),{className:"mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40",href:"/",children:(0,s.jsx)("div",{className:"w-32 text-white md:w-40",children:(0,s.jsx)(a.A,{})})}),(0,s.jsxs)("div",{className:"flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2",children:[(0,s.jsx)(i.default,{}),(0,s.jsx)("div",{className:"hidden h-auto w-full grow rounded-md bg-gray-50 md:block"}),(0,s.jsx)("form",{children:(0,s.jsxs)("button",{className:"flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",children:[(0,s.jsx)(c.A,{className:"w-6"}),(0,s.jsx)("div",{className:"hidden md:block",children:"Sign Out"})]})})]})]})}function d({children:e}){return(0,s.jsxs)("div",{className:"flex h-screen flex-col md:flex-row md:overflow-hidden",children:[(0,s.jsx)("div",{className:"w-full flex-none md:w-64",children:(0,s.jsx)(l,{})}),(0,s.jsx)("div",{className:"flex-grow p-6 md:overflow-y-auto md:p-12",children:e})]})}},8491:()=>{},11347:(e,t,r)=>{"use strict";r.d(t,{YL:()=>n,c6:()=>o,vv:()=>s});let s=e=>(e/100).toLocaleString("en-US",{style:"currency",currency:"USD"}),o=(e,t="en-US")=>{let r=new Date(e);return new Intl.DateTimeFormat(t,{day:"numeric",month:"short",year:"numeric"}).format(r)},n=e=>{let t=[],r=1e3*Math.ceil(Math.max(...e.map(e=>e.revenue))/1e3);for(let e=r;e>=0;e-=1e3)t.push(`$${e/1e3}K`);return{yAxisLabels:t,topLabel:r}}},16395:(e,t,r)=>{"use strict";r.d(t,{default:()=>u});var s=r(59260),o=r(15319),n=r(2902),i=r(71546),a=r(77199),c=r.n(a),l=r(86482),d=r(13362);let m=[{name:"Dashboard",href:"/dashboard",icon:o.A},{name:"Customers",href:"/dashboard/customers",icon:n.A},{name:"Invoices",href:"/dashboard/invoices",icon:i.A}];function u(){let e=(0,l.usePathname)();return(0,s.jsx)(s.Fragment,{children:m.map(t=>{let r=t.icon;return(0,s.jsxs)(c(),{href:t.href,className:(0,d.A)("flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",{"bg-sky-100 text-blue-600":e===t.href}),children:[(0,s.jsx)(r,{className:"w-6"}),(0,s.jsx)("p",{className:"hidden md:block",children:t.name})]},t.name)})})}},32953:(e,t,r)=>{Promise.resolve().then(r.bind(r,75320))},41010:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var s=r(92710);r(8491);var o=r(72060),n=r.n(o);function i({children:e}){return(0,s.jsx)("html",{lang:"en",children:(0,s.jsx)("body",{className:`${n().className} antialiased`,children:e})})}},46875:(e,t,r)=>{Promise.resolve().then(r.bind(r,55737)),Promise.resolve().then(r.t.bind(r,66245,23))},50890:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var s=r(59260);function o({error:e,reset:t}){return(0,s.jsxs)("main",{className:"flex h-full flex-col items-center justify-center",children:[(0,s.jsx)("h2",{className:"text-center",children:"Something went wrong!"}),(0,s.jsx)("button",{className:"mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400",onClick:()=>t(),children:"Try again"})]})}r(39045)},52620:(e,t,r)=>{"use strict";r.d(t,{MX:()=>l,Pt:()=>d,Q5:()=>a,Yu:()=>m,gn:()=>u,nr:()=>i,zP:()=>c});var s=r(86584),o=r(11347);let n=(0,s.A)(process.env.POSTGRES_URL,{ssl:"require"});async function i(){try{console.log("Fetching revenue data..."),await new Promise(e=>setTimeout(e,3e3));let e=await n`SELECT * FROM revenue`;return console.log("Data fetch completed after 3 seconds."),e}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch revenue data.")}}async function a(){try{return(await n`
      SELECT invoices.amount, customers.name, customers.image_url, customers.email, invoices.id
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      ORDER BY invoices.date DESC
      LIMIT 5`).map(e=>({...e,amount:(0,o.vv)(e.amount)}))}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch the latest invoices.")}}async function c(){try{let e=n`SELECT COUNT(*) FROM invoices`,t=n`SELECT COUNT(*) FROM customers`,r=n`SELECT
         SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid",
         SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS "pending"
         FROM invoices`,s=await Promise.all([e,t,r]),i=Number(s[0][0].count??"0"),a=Number(s[1][0].count??"0"),c=(0,o.vv)(s[2][0].paid??"0"),l=(0,o.vv)(s[2][0].pending??"0");return{numberOfCustomers:a,numberOfInvoices:i,totalPaidInvoices:c,totalPendingInvoices:l}}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch card data.")}}async function l(e,t){try{return await n`
      SELECT
        invoices.id,
        invoices.amount,
        invoices.date,
        invoices.status,
        customers.name,
        customers.email,
        customers.image_url
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      WHERE
        customers.name ILIKE ${`%${e}%`} OR
        customers.email ILIKE ${`%${e}%`} OR
        invoices.amount::text ILIKE ${`%${e}%`} OR
        invoices.date::text ILIKE ${`%${e}%`} OR
        invoices.status ILIKE ${`%${e}%`}
      ORDER BY invoices.date DESC
      LIMIT ${6} OFFSET ${(t-1)*6}
    `}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch invoices.")}}async function d(e){try{let t=await n`SELECT COUNT(*)
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE
      customers.name ILIKE ${`%${e}%`} OR
      customers.email ILIKE ${`%${e}%`} OR
      invoices.amount::text ILIKE ${`%${e}%`} OR
      invoices.date::text ILIKE ${`%${e}%`} OR
      invoices.status ILIKE ${`%${e}%`}
  `;return Math.ceil(Number(t[0].count)/6)}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch total number of invoices.")}}async function m(e){try{return(await n`
      SELECT
        invoices.id,
        invoices.customer_id,
        invoices.amount,
        invoices.status
      FROM invoices
      WHERE invoices.id = ${e};
    `).map(e=>({...e,amount:e.amount/100}))[0]}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch invoice.")}}async function u(){try{return await n`
      SELECT
        id,
        name
      FROM customers
      ORDER BY name ASC
    `}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch all customers.")}}},55737:(e,t,r)=>{"use strict";r.d(t,{default:()=>s});let s=(0,r(678).registerClientReference)(function(){throw Error("Attempted to call the default export of \"D:\\\\WDD430\\\\nextjs-dashboard\\\\app\\\\ui\\\\dashboard\\\\nav-links.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\WDD430\\nextjs-dashboard\\app\\ui\\dashboard\\nav-links.tsx","default")},57590:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,51867,23)),Promise.resolve().then(r.t.bind(r,99751,23)),Promise.resolve().then(r.t.bind(r,82395,23)),Promise.resolve().then(r.t.bind(r,4394,23)),Promise.resolve().then(r.t.bind(r,60334,23)),Promise.resolve().then(r.t.bind(r,64722,23)),Promise.resolve().then(r.t.bind(r,35776,23)),Promise.resolve().then(r.t.bind(r,8154,23))},69401:(e,t,r)=>{Promise.resolve().then(r.bind(r,50890))},75320:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});let s=(0,r(678).registerClientReference)(function(){throw Error("Attempted to call the default export of \"D:\\\\WDD430\\\\nextjs-dashboard\\\\app\\\\dashboard\\\\invoices\\\\error.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\WDD430\\nextjs-dashboard\\app\\dashboard\\invoices\\error.tsx","default")},83667:(e,t,r)=>{Promise.resolve().then(r.bind(r,16395)),Promise.resolve().then(r.t.bind(r,77199,23))},94542:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,86161,23)),Promise.resolve().then(r.t.bind(r,8425,23)),Promise.resolve().then(r.t.bind(r,31553,23)),Promise.resolve().then(r.t.bind(r,83152,23)),Promise.resolve().then(r.t.bind(r,94448,23)),Promise.resolve().then(r.t.bind(r,59556,23)),Promise.resolve().then(r.t.bind(r,13554,23)),Promise.resolve().then(r.t.bind(r,44244,23))},99166:()=>{}};