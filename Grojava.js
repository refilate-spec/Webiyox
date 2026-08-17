(function(){

"use strict";

/* =========================================================
   RGX GROUP DATA
   YAHAN DATA MANUALLY NAHI DALNA HOGA
   FORM CODE SE DATA YAHAN CONNECT KIYA JA SAKTA HAI.
========================================================= */




/* ICONS */

const rgxIcons={

    WhatsApp:`
    <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.04 2C6.49 2 2 6.49 2 12.03c0 1.77.46 3.5 1.34 5.02L2 22l5.1-1.34a10 10 0 0 0 4.94 1.3h.01c5.54 0 10.03-4.49 10.03-10.03C22.08 6.49 17.59 2 12.04 2Zm0 18.2a8.17 8.17 0 0 1-4.17-1.15l-.3-.18-3.02.79.81-2.95-.2-.31a8.2 8.2 0 0 1-1.27-4.37c0-4.55 3.7-8.25 8.25-8.25s8.25 3.7 8.25 8.25-3.7 8.17-8.25 8.17Z"/>
    </svg>`,

    Telegram:`
    <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M21.9 4.1 18.7 19c-.24 1.05-.86 1.31-1.74.82l-4.8-3.54-2.32 2.23c-.26.26-.48.48-.99.48l.35-4.89 8.9-8.04c.39-.35-.09-.55-.6-.2L6.5 12.8 1.77 11.32c-1.03-.32-1.05-1.03.22-1.52L20.45 2.7c.86-.32 1.61.2 1.45 1.4Z"/>
    </svg>`,

    Facebook:`
    <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.02 4.39 11 10.13 11.93v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.97h-1.52c-1.49 0-1.96.93-1.96 1.88v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.07 24 18.09 24 12.07Z"/>
    </svg>`

};


const rgxColors={
    WhatsApp:"#25D366",
    Telegram:"#2AABEE",
    Facebook:"#1877F2"
};


/* ELEMENTS */

const rgxGrid=document.getElementById("rgx-grid");
const rgxSearch=document.getElementById("rgx-search");
const rgxFilters=document.getElementById("rgx-filters");
const rgxEmpty=document.getElementById("rgx-empty");

const rgxTotal=document.getElementById("rgx-total");
const rgxActive=document.getElementById("rgx-active");
const rgxMembers=document.getElementById("rgx-members");
const rgxResults=document.getElementById("rgx-results");


/* NUMBER */

function rgxFormat(n){

    if(n>=1000000)
        return (n/1000000).toFixed(1)+"M";

    if(n>=1000)
        return (n/1000).toFixed(1)+"k";

    return String(n);
}


/* FILTERS */

function rgxBuildFilters(){

    const categories=[
        "All",
        ...new Set(rgxGroups.map(x=>x.category))
    ];

    const platforms=[
        ...new Set(rgxGroups.map(x=>x.platform))
    ];

    rgxFilters.innerHTML="";

    [...categories,...platforms].forEach((item,index)=>{

        const btn=document.createElement("button");

        btn.type="button";
        btn.className=
            "rgx-filter"+
            (index===0?" active":"");

        btn.textContent=item;

        btn.addEventListener("click",function(){

            document
            .querySelectorAll("#rgx-directory .rgx-filter")
            .forEach(x=>x.classList.remove("active"));

            btn.classList.add("active");

            rgxRender();

        });

        rgxFilters.appendChild(btn);

    });

}


/* ACTIVE FILTER */

function rgxGetFilter(){

    const active=
        rgxFilters.querySelector(".rgx-filter.active");

    return active
        ? active.textContent
        : "All";
}


/* RENDER */

function rgxRender(){

    const query=
        rgxSearch.value.trim().toLowerCase();

    const filter=rgxGetFilter();

    const data=rgxGroups.filter(group=>{

        const searchMatch=
            !query ||
            group.name.toLowerCase().includes(query) ||
            group.platform.toLowerCase().includes(query) ||
            group.category.toLowerCase().includes(query) ||
            group.description.toLowerCase().includes(query);

        const filterMatch=
            filter==="All" ||
            group.category===filter ||
            group.platform===filter;

        return searchMatch && filterMatch;

    });

    rgxGrid.innerHTML="";

    data.forEach(group=>{

        const card=document.createElement("article");

        card.className="rgx-card";

        card.style.setProperty(
            "--rgx-platform",
            rgxColors[group.platform]||"#fff"
        );

        card.innerHTML=`

        <div class="rgx-top">

            <div class="rgx-platform">

                <div class="rgx-icon">
                    ${rgxIcons[group.platform]||""}
                </div>

                <div>

                    <div class="rgx-pname">
                        ${group.platform}
                    </div>

                    <div class="rgx-ptype">
                        Community Group
                    </div>

                </div>

            </div>

            <div class="rgx-status">
                <span class="rgx-status-dot"></span>
                ${group.status}
            </div>

        </div>


        <div class="rgx-content">

            <div class="rgx-category">
                ${group.category}
            </div>

            <h2 class="rgx-card-title">
                ${group.name}
            </h2>

            <p class="rgx-desc">
                ${group.description}
            </p>

        </div>


        <div class="rgx-footer">

            <span class="rgx-members">
                👥 ${rgxFormat(group.members)} Members
            </span>

            <a
                class="rgx-join"
                href="${group.url}"
                target="_blank"
                rel="noopener noreferrer"
            >
                Join
                <svg viewBox="0 0 24 24"
                     fill="none"
                     stroke="currentColor"
                     stroke-width="2">
                    <path d="M5 12h13"/>
                    <path d="m13 6 6 6-6 6"/>
                </svg>
            </a>

        </div>
        `;

        rgxGrid.appendChild(card);

    });

    rgxResults.textContent=
        `Showing ${data.length} ${
            data.length===1?"group":"groups"
        }`;

    rgxEmpty.classList.toggle(
        "show",
        data.length===0
    );

}


/* STATS */

function rgxStats(){

    const total=rgxGroups.length;

    const active=rgxGroups.filter(
        x=>x.status==="Active"
    ).length;

    const members=rgxGroups.reduce(
        (sum,x)=>sum+x.members,
        0
    );

    rgxTotal.textContent=rgxFormat(total);
    rgxActive.textContent=rgxFormat(active);
    rgxMembers.textContent=rgxFormat(members);

}


/* SEARCH */

rgxSearch.addEventListener(
    "input",
    rgxRender
);


/* VIEW */

document
.querySelectorAll("#rgx-directory .rgx-view")
.forEach(btn=>{

    btn.addEventListener("click",function(){

        document
        .querySelectorAll("#rgx-directory .rgx-view")
        .forEach(x=>x.classList.remove("active"));

        btn.classList.add("active");

        rgxGrid.classList.toggle(
            "rgx-list",
            btn.dataset.rgxView==="list"
        );

    });

});


/* INIT */

rgxBuildFilters();
rgxStats();
rgxRender();

})();



  
  // form group filler code start javascript
(function(){

"use strict";


/* =========================================================
   GFM DATA
========================================================= */

let gfmData=[];

let gfmEditIndex=-1;


/* ELEMENTS */

const gfmForm=
    document.getElementById("gfm-form");

const gfmName=
    document.getElementById("gfm-name");

const gfmPlatform=
    document.getElementById("gfm-platform");

const gfmCategory=
    document.getElementById("gfm-category");

const gfmMembers=
    document.getElementById("gfm-members");

const gfmDescription=
    document.getElementById("gfm-description");

const gfmUrl=
    document.getElementById("gfm-url");

const gfmStatus=
    document.getElementById("gfm-status");

const gfmBody=
    document.getElementById("gfm-table-body");

const gfmEmpty=
    document.getElementById("gfm-empty");

const gfmSearch=
    document.getElementById("gfm-search");

const gfmCount=
    document.getElementById("gfm-count");

const gfmCode=
    document.getElementById("gfm-code");

const gfmSubmit=
    document.getElementById("gfm-submit");


/* LOAD */

try{

    const saved=
        localStorage.getItem("gfm_groups");

    if(saved){
        gfmData=JSON.parse(saved);
    }

}catch(error){

    gfmData=[];

}


/* SAVE */

function gfmSave(){

    localStorage.setItem(
        "gfm_groups",
        JSON.stringify(gfmData)
    );

}


/* ESCAPE */

function gfmEscape(value){

    return String(value)
        .replace(/&/g,"&amp;")
        .replace(/</g,"&lt;")
        .replace(/>/g,"&gt;")
        .replace(/"/g,"&quot;")
        .replace(/'/g,"&#039;");

}


/* RENDER TABLE */

function gfmRender(){

    const query=
        gfmSearch.value
        .trim()
        .toLowerCase();

    const filtered=
        gfmData.filter(item=>{

            return(
                item.name.toLowerCase().includes(query) ||
                item.platform.toLowerCase().includes(query) ||
                item.category.toLowerCase().includes(query)
            );

        });


    gfmBody.innerHTML="";


    filtered.forEach((item,index)=>{

        const realIndex=
            gfmData.indexOf(item);

        const row=
            document.createElement("tr");

        row.innerHTML=`

            <td>${index+1}</td>

            <td>
                <span class="gfm-name">
                    ${gfmEscape(item.name)}
                </span>
            </td>

            <td>
                <span class="gfm-platform">
                    ${gfmEscape(item.platform)}
                </span>
            </td>

            <td>
                ${gfmEscape(item.category)}
            </td>

            <td>
                ${Number(item.members).toLocaleString()}
            </td>

            <td>
                <span class="gfm-status">
                    ${gfmEscape(item.status)}
                </span>
            </td>

            <td>

                <div class="gfm-row-actions">

                    <button
                        class="gfm-small-btn"
                        data-gfm-edit="${realIndex}"
                        type="button"
                    >
                        Edit
                    </button>

                    <button
                        class="gfm-small-btn gfm-delete"
                        data-gfm-delete="${realIndex}"
                        type="button"
                    >
                        Delete
                    </button>

                </div>

            </td>

        `;

        gfmBody.appendChild(row);

    });


    gfmEmpty.style.display=
        filtered.length ? "none" : "block";

    gfmCount.textContent=
        `${gfmData.length} ${
            gfmData.length===1
            ? "Group"
            : "Groups"
        }`;

    gfmGenerate();

}


/* ADD / EDIT */

gfmForm.addEventListener(
    "submit",
    function(event){

        event.preventDefault();


        const item={

            name:gfmName.value.trim(),

            platform:gfmPlatform.value,

            category:gfmCategory.value.trim(),

            members:Number(gfmMembers.value)||0,

            description:gfmDescription.value.trim(),

            url:gfmUrl.value.trim(),

            status:gfmStatus.value

        };


        if(gfmEditIndex===-1){

            gfmData.push(item);

        }else{

            gfmData[gfmEditIndex]=item;

            gfmEditIndex=-1;

            gfmSubmit.textContent="+ Add Group";

        }


        gfmSave();

        gfmForm.reset();

        gfmRender();

    }
);


/* RESET */

document
.getElementById("gfm-reset")
.addEventListener(
    "click",
    function(){

        gfmEditIndex=-1;

        gfmSubmit.textContent="+ Add Group";

        gfmForm.reset();

    }
);


/* TABLE ACTIONS */

gfmBody.addEventListener(
    "click",
    function(event){

        const edit=
            event.target.dataset.gfmEdit;

        const del=
            event.target.dataset.gfmDelete;


        /* EDIT */

        if(edit!==undefined){

            const item=
                gfmData[Number(edit)];

            if(!item) return;


            gfmEditIndex=
                Number(edit);

            gfmName.value=
                item.name;

            gfmPlatform.value=
                item.platform;

            gfmCategory.value=
                item.category;

            gfmMembers.value=
                item.members;

            gfmDescription.value=
                item.description;

            gfmUrl.value=
                item.url;

            gfmStatus.value=
                item.status;

            gfmSubmit.textContent=
                "Update Group";

            gfmForm.scrollIntoView({
                behavior:"smooth",
                block:"start"
            });

        }


        /* DELETE */

        if(del!==undefined){

            const index=
                Number(del);

            if(!confirm(
                "Delete this group?"
            )) return;


            gfmData.splice(index,1);

            gfmSave();

            gfmRender();

        }

    }
);


/* SEARCH */

gfmSearch.addEventListener(
    "input",
    gfmRender
);


/* GENERATE DIRECTORY DATA */

function gfmGenerate(){

    const output=
`const groups = ${JSON.stringify(
    gfmData,
    null,
    4
)};`;

    gfmCode.value=output;

}


/* COPY */

document
.getElementById("gfm-copy")
.addEventListener(
    "click",
    async function(){

        try{

            await navigator.clipboard.writeText(
                gfmCode.value
            );

            this.textContent="Copied!";

            setTimeout(()=>{
                this.textContent="Copy Data";
            },1500);

        }catch(error){

            gfmCode.select();

            document.execCommand("copy");

            this.textContent="Copied!";

            setTimeout(()=>{
                this.textContent="Copy Data";
            },1500);

        }

    }
);


/* INIT */

gfmRender();

})();
