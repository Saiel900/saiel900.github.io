const script = document.createElement("script");
script.src = "https://cdn.jsdelivr.net/npm/three@0.152.2/build/three.min.js";
script.onload = startParticles;
document.head.appendChild(script);

function startParticles(){

  const canvas = document.createElement("canvas");
  document.body.appendChild(canvas);

  canvas.style.position = "fixed";
  canvas.style.top = "0";
  canvas.style.left = "0";
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  canvas.style.pointerEvents = "none";
  canvas.style.zIndex = "0";

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  camera.position.z = 60;

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true
  });

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  /* ===== PARTICLES ===== */

  const group = new THREE.Group();

  const geometry = new THREE.SphereGeometry(1, 24, 24);

  const colors = [0x5b2d8b, 0x00bcd4, 0xd4af37];

  for(let i=0;i<50;i++){

    const material = new THREE.MeshBasicMaterial({
      color: colors[Math.floor(Math.random()*colors.length)],
      transparent:true,
      opacity:0.18
    });

    const particle = new THREE.Mesh(geometry, material);

    particle.position.set(
      (Math.random()-0.5)*120,
      (Math.random()-0.5)*120,
      (Math.random()-0.5)*120
    );

    particle.userData = {
      vx:(Math.random()-0.5)*0.02,
      vy:(Math.random()-0.5)*0.02,
      vz:(Math.random()-0.5)*0.02
    };

    group.add(particle);
  }

  scene.add(group);

  /* ===== OPACITY CONTROL ===== */

  let particleOpacityTarget = 0.18;

  function animate(){

    requestAnimationFrame(animate);

    group.children.forEach(p=>{

      p.position.x += p.userData.vx;
      p.position.y += p.userData.vy;
      p.position.z += p.userData.vz;

      p.rotation.x += 0.002;
      p.rotation.y += 0.002;

      // smooth opacity transition
      p.material.opacity += (particleOpacityTarget - p.material.opacity) * 0.02;

    });

    renderer.render(scene,camera);
  }

  /* ===== WHITE SECTION DETECTION ===== */

  function updateParticleVisibility(){

    const whiteSections = document.querySelectorAll(
      ".about, .services, .corporate, .articles, .logos, .timeline, .contact"
    );

    let visibleInWhite = false;

    whiteSections.forEach(sec=>{
      const rect = sec.getBoundingClientRect();

      if(rect.top < window.innerHeight * 0.7 && rect.bottom > window.innerHeight * 0.3){
        visibleInWhite = true;
      }
    });

    if(visibleInWhite){
      particleOpacityTarget = 0.18;
    }else{
      particleOpacityTarget = 0.03;
    }

  }

  window.addEventListener("scroll", updateParticleVisibility);
  updateParticleVisibility();

  animate();

  /* ===== RESPONSIVE ===== */

  window.addEventListener("resize",()=>{
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

}