const content = [
    [
      "React is extremely popular",
      "It makes building complex, interactive UIs a breeze",
      "It's powerful & flexible",
      "It has a very active and versatile ecosystem"
    ],
    [
      "Components, JSX & Props",
      "State",
      "Hooks (e.g., useEffect())",
      "Dynamic rendering"
    ],
    [
      "Official web page (react.dev)",
      "Next.js (Fullstack framework)",
      "React Native (build native mobile apps with React)"
    ]
  ];

btnWhy = document.getElementById("btn-whyReact");
btnCore = document.getElementById("btn-core-features");
btnRelated = document.getElementById("btn-related-resources");
contentArea = document.getElementById("content-area");

const hightlightBtn = (btn)=>{
    btnWhy.className = "";
    btnCore.className = "";
    btnRelated.className = "";
    btn.classList.add("active");
}

const displayContent = (items)=>{
    let listContent = "";
    for(const item of items){
        listContent += `<li>${item}</li>`
    }
    console.log(listContent);
    const list = document.createElement('ul');
    contentArea.innerHTML = "";
    list.innerHTML = listContent;
    contentArea.appendChild(list);
}

const handleClick = (event)=>{
    const btnId = event.target.id;
    hightlightBtn(event.target);
    console.log(btnId);
    if(btnId === 'btn-whyReact')
    displayContent(content[0]);
    if(btnId === 'btn-core-features')
    displayContent(content[1]);
    if(btnId === 'btn-related-resources')
    displayContent(content[2]);
}

displayContent(content[0]);

btnWhy.addEventListener("click", handleClick);
btnCore.addEventListener("click", handleClick);
btnRelated.addEventListener("click", handleClick);