var N=Object.defineProperty;var y=(o,l,r)=>l in o?N(o,l,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[l]=r;var d=(o,l,r)=>y(o,typeof l!="symbol"?l+"":l,r);import{r as _,a as f,j as e,b as k,F as S}from"./index-Dsrk8M0t.js";class q extends _.Component{constructor(r){super(r);d(this,"getUniqueSemesters",r=>{const a=r.map(t=>t.lec_class_id.class_semester_id.id);return[...new Set(a)].sort()});d(this,"getUniqueSections",r=>{const a=r.map(t=>t.lec_class_id.class_section_id.name);return[...new Set(a)].sort()});d(this,"renderTables",()=>{const{hec_rev_crc:r,department:a,season:n,batch:t,lectures:m}=this.state;return this.getUniqueSemesters(m).map((x,h)=>{let u=0;const i=m.filter(c=>c.lec_class_id.class_semester_id.id===x);if(i){const c=this.getUniqueSections(i),g=i.filter(s=>s.lec_class_id.class_section_id.name===c[0]);return e.jsx("div",{className:"mb-16",children:e.jsx("div",{className:"overflow-x-auto custom-scrollbar",children:e.jsxs("table",{className:"table-auto min-w-full border border-collapse border-black font-sans font-normal max-sm:text-xs sm:text-sm md:text-md lg:text-lg whitespace-nowrap",children:[e.jsxs("thead",{className:"bg-sky-400 font-bold",children:[e.jsx("tr",{children:e.jsx("th",{style:{fontFamily:"serif"},colSpan:8,className:"border border-black py-1 font-extrabold max-sm:text-lg sm:text-xl md:text-2xl lg:text-3xl",children:`${a.toUpperCase()}-${x} (${n.toSentenceCase()}-${t}) Batch`})}),r&&e.jsx("tr",{children:e.jsxs("th",{colSpan:8,className:"border border-black font-thin font-mono",children:["(",r,")"]})}),e.jsxs("tr",{children:[e.jsx("th",{colSpan:4,className:"border border-black font-bold",children:"COURSE DETAILS"}),e.jsx("th",{colSpan:4,className:"border border-black font-bold",children:"COURSE INSTRUCTORS"})]}),e.jsxs("tr",{children:[e.jsx("th",{className:"border border-black font-semibold bg-gray-400",children:"Course"}),e.jsx("th",{className:"border border-black font-semibold bg-gray-400",children:"Courses"}),e.jsx("th",{className:"border border-black font-semibold bg-gray-400",children:"Credit"}),e.jsx("th",{className:"border border-black font-semibold bg-gray-400",children:"Pre-requisite"}),e.jsx("th",{className:"border border-black font-semibold bg-gray-400",children:"Course"}),e.jsx("th",{colSpan:c.length,className:"border border-black font-semibold bg-gray-400",children:"Section"})]}),e.jsxs("tr",{children:[e.jsx("th",{className:"border border-black font-semibold bg-gray-400",children:"Codes"}),e.jsx("th",{className:"border border-black font-semibold bg-gray-400",children:"Title"}),e.jsx("th",{className:"border border-black font-semibold bg-gray-400",children:"Hrs"}),e.jsx("th",{className:"border border-black font-semibold bg-gray-400"}),e.jsx("th",{className:"border border-black font-semibold bg-gray-400",children:"Coordinator"}),c.map((s,b)=>e.jsx("th",{className:"border border-black font-semibold bg-gray-400",children:s},b))]})]}),e.jsxs("tbody",{children:[g&&g.map((s,b)=>{var p;return u+=s.lec_course_id.credit_hours,e.jsxs("tr",{className:s.lec_instr_id===null?"bg-red-200":"bg-green-100",children:[e.jsx("td",{className:"border border-black px-4 py-2 bg-yellow-300",children:s.lec_course_id.code}),e.jsx("td",{className:"border border-black px-4 py-2 bg-yellow-300",children:s.lec_course_id.name}),e.jsx("td",{className:"border border-black px-4 py-2 text-center",children:s.lec_course_id.credit_hours}),e.jsx("td",{className:"border border-black px-4 py-2 text-center",children:"None <?op>"}),e.jsx("td",{className:"border border-black px-4 py-2 bg-gray-300",children:((p=s.lec_course_id.crs_coordinator_id)==null?void 0:p.user.name)||"N/A"}),Array.from({length:s.lec_class_id.class_semester_id.has_sections}).map((v,j)=>e.jsx("td",{className:"border border-black px-4 py-2",children:s.lec_instr_id?s.lec_instr_id.user.name:"No Instructor Assigned"},j))]},b)}),e.jsxs("tr",{children:[e.jsx("td",{colSpan:"2",className:"border border-black bg-gray-400 pl-3 p-2 font-bold",children:"Total Credits"}),e.jsx("td",{colSpan:"1",className:"border border-black p-2 text-center font-bold bg-gray-400",children:u}),e.jsx("td",{colSpan:"5",className:"border border-black p-2"})]}),h===0&&e.jsxs(e.Fragment,{children:[e.jsx("tr",{children:e.jsx("td",{colSpan:"8",className:"border border-none py-4 text-center font-bold"})}),e.jsx("tr",{children:e.jsxs("td",{colSpan:"2",className:"border border-black border-t-gray-500 border-r-gray-500 px-4 py-2 bg-green-600 ",children:[" ","DeficencyCourse"]})}),e.jsxs("tr",{className:"bg-green-100",children:[e.jsx("td",{className:"border border-black px-4 py-2 bg-yellow-300",children:"MTH0001"}),e.jsx("td",{className:"border border-black px-4 py-2 bg-yellow-300",children:"Foundation Math-I"}),e.jsx("td",{className:"border border-black px-4 py-2 text-center",children:"3"}),e.jsx("td",{className:"border border-black px-4 py-2 text-center",children:"None"}),e.jsx("td",{className:"border border-black bg-gray-300 px-4 py-2 text-center"}),e.jsx("td",{colSpan:c.length,className:"border border-black px-4 py-2 bg-green-100",children:"Ms. Asma Parveen"})]})]})]})]})})},h)}})});this.state={lectures:[],loading:null,department:"bsse",season:"fall",batch:"2024",hec_rev_crc:null}}async componentDidMount(){document.title="Course Allocation",this.setState({hec_rev_crc:"HEC Revised Curriculum 2023"}),await this.initCourseAllocation()}async initCourseAllocation(){this.setState({loading:!0}),await f.get("/course_allocation/lectures/").then(r=>{this.setState({lectures:r.data,loading:!1})}).catch(r=>{console.error("Error fetching lectures data:",r),this.setState({loading:!1})})}render(){const{season:r,batch:a,lectures:n,loading:t}=this.state;return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"px-5 flex flex-col font-bold dark:text-white",children:[e.jsxs("span",{className:"text-center text-xl underline py-3",children:["Course Offering - ",`${r.toSentenceCase()} ${a}`]}),e.jsxs("div",{className:"flex flex-row items-center justify-between",children:[e.jsx("span",{className:"text-left lg:text-sm py-2",children:"Ver 1.0"}),e.jsx("button",{type:"button",title:t?"":"Click to Re-render Course Allocation table(s)",className:t?"cursor-default":"",onClick:async()=>{t||await this.initCourseAllocation()},children:e.jsx(k.ReloadStatusCircles,{condition:t})})]})]}),e.jsx("div",{className:"p-4 bg-grey-100 border border-sky-50 mt-2 min-h-screen",children:t?e.jsxs("div",{children:[e.jsx("p",{className:"text-center text-blue-500 mb-5 scale-125",children:"Loading..."}),e.jsx(S,{className:"loader m-auto scale-150 text-indigo-500"})]}):n.length===0?e.jsxs("div",{className:"text-center",children:[e.jsx("p",{className:"text-red-500 mb-3",children:"No Course Allocation Schedule Created Yet!"}),e.jsx("button",{onClick:async()=>await this.initCourseAllocation(),className:"border border-blue-700 font-mono dark:bg-sky-400 hover:dark:bg-sky-700 p-2 rounded-lg hover:bg-blue-700 hover:text-gray-200 hover:scale-110",children:"Click to Try Again!"})]}):this.renderTables()})]})}}export{q as default};
