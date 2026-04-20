const proyectos=[{
  id:1,categoria:"deporte",
  titulo:"Final de Fútbol",
  fecha:"15/03/2024",
  portada:"https://images.unsplash.com/photo-1508098682722?auto=format&fit=crop&w=800",
  descripcion:"Una colección de las mejores jugadas de la final local.",
  galeria:[
    "https://images.unsplash.com/photo-1508098682722?auto=format&fit=crop&w=1200",
    "https://images.unsplash.com/photo-1517466787929?auto=format&fit=crop&w=1200",
    "https://images.unsplash.com/photo-1574629810360?auto=format&fit=crop&w=1200"
  ]
}];

const $=s=>document.querySelector(s),
isM=innerWidth<=768;

let p=null,i=0,
grid=$("#galeria-grid"),
bus=$("#buscador"),
cats=document.querySelectorAll("#menu-categorias li"),
modal=$("#modal-carrusel"),
img=$("#img-carrusel");

// ================= PROYECTOS =================
function mostrar(f="todos",b=""){
  grid.innerHTML="";
  let d=proyectos.filter(x=>
    (f=="todos"||x.categoria==f)&&
    x.titulo.toLowerCase().includes(b.toLowerCase())
  );

  if(!d.length){
    grid.innerHTML="<p style='grid-column:1/-1;text-align:center;color:#999'>No hay resultados</p>";
    return;
  }

  d.forEach((x,idx)=>{
    let c=document.createElement("div");
    c.className="card";
    c.style.opacity=0;
    c.style.transform="translateY(15px)";

    setTimeout(()=>{
      c.style.transition=".5s";
      c.style.opacity=1;
      c.style.transform="translateY(0)";
    },idx*(isM?50:80));

    c.innerHTML=`
      <div class="img-container"><img src="${x.portada}" loading="lazy"></div>
      <div class="card-info"><h3>${x.titulo}</h3><span>${x.fecha}</span></div>
    `;

    c.onclick=()=>open(x);
    grid.appendChild(c);
  });
}

// ================= CARRUSEL =================
function open(x){
  p=x;i=0;
  modal.style.display="flex";
  document.body.style.overflow="hidden";
  show();
}

const close=()=>{modal.style.display="none";document.body.style.overflow="auto"}

const nav=n=>{
  i=(i+n+p.galeria.length)%p.galeria.length;
  show();
}

function show(){
  img.style.opacity=0;
  setTimeout(()=>{
    img.src=p.galeria[i];
    img.style.opacity=1;
  },120);
}

// ================= UI =================
bus.oninput=e=>{
  let c=$('#menu-categorias .active').dataset.categoria;
  mostrar(c,e.target.value);
};

cats.forEach(c=>{
  c.onclick=()=>{
    cats.forEach(x=>x.classList.remove("active"));
    c.classList.add("active");
    mostrar(c.dataset.categoria,bus.value);
  };
});

// ================= INPUTS =================
document.onkeydown=e=>{
  if(modal.style.display=="flex"){
    if(e.key=="Escape")close();
    if(e.key=="ArrowRight")nav(1);
    if(e.key=="ArrowLeft")nav(-1);
  }
};

// swipe
let sx=0;
modal?.addEventListener("touchstart",e=>sx=e.touches[0].clientX);
modal?.addEventListener("touchend",e=>{
  let dx=e.changedTouches[0].clientX-sx;
  if(dx>50)nav(-1);
  if(dx<-50)nav(1);
});

modal.addEventListener("click",e=>e.target==modal&&close());

// ================= INIT =================
mostrar();