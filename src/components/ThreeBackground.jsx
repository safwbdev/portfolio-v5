import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const W = canvas.clientWidth, H = canvas.clientHeight;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    renderer.setSize(W, H);
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, W / H, 0.1, 500);
    camera.position.z = 28;

    scene.add(new THREE.AmbientLight(0xffffff, 0.3));
    const pt1 = new THREE.PointLight(0x38bdf8, 5, 80); pt1.position.set(-15, 10, 15); scene.add(pt1);
    const pt2 = new THREE.PointLight(0x818cf8, 4, 60); pt2.position.set(20, -8, 10); scene.add(pt2);

    const starGroup = new THREE.Group(); scene.add(starGroup);
    function mkStars(count, spread, size, op) {
      const geo = new THREE.BufferGeometry();
      const pos = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        pos[i * 3] = (Math.random() - 0.5) * spread;
        pos[i * 3 + 1] = (Math.random() - 0.5) * spread;
        pos[i * 3 + 2] = (Math.random() - 0.5) * spread * 0.4;
      }
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      return new THREE.Points(geo, new THREE.PointsMaterial({ color: 0xffffff, size, transparent: true, opacity: op, sizeAttenuation: true }));
    }
    starGroup.add(mkStars(2800, 200, 0.12, 0.55));
    starGroup.add(mkStars(500, 200, 0.3, 0.85));

    const geoLib = [new THREE.OctahedronGeometry(1, 0), new THREE.TetrahedronGeometry(1, 0), new THREE.IcosahedronGeometry(1, 0), new THREE.DodecahedronGeometry(1, 0)];
    const objects = [];
    for (let i = 0; i < 16; i++) {
      const s = 0.2 + Math.random() * 0.9, wire = Math.random() > 0.5;
      const mat = new THREE.MeshPhongMaterial({ color: wire ? 0x38bdf8 : [0x0f2a4a, 0x1e1060, 0x0d2038][i % 3], emissive: wire ? 0x092030 : 0x040b1a, wireframe: wire, transparent: true, opacity: wire ? 0.45 : 0.9, shininess: 70 });
      const mesh = new THREE.Mesh(geoLib[i % 4], mat);
      mesh.scale.setScalar(s);
      const r = 7 + Math.random() * 11, th = Math.random() * Math.PI * 2, ph = (Math.random() - 0.5) * 1.4;
      mesh.position.set(r * Math.cos(th) * Math.cos(ph), r * Math.sin(ph) * 1.6, (Math.random() - 0.5) * 8);
      mesh.rotation.set(Math.random() * 6, Math.random() * 6, Math.random() * 6);
      scene.add(mesh);
      objects.push({ mesh, rx: (Math.random() - 0.5) * 0.006, ry: (Math.random() - 0.5) * 0.006, fi: Math.random() * Math.PI * 2, fs: 0.003 + Math.random() * 0.004, fa: 0.08 + Math.random() * 0.1 });
    }

    const nebMat = new THREE.ShaderMaterial({
      uniforms: { t: { value: 0 } },
      vertexShader: `varying vec2 v; void main(){v=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
      fragmentShader: `uniform float t;varying vec2 v;
        float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5);}
        float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y);}
        void main(){vec2 u=(v-.5)*5.;float a=n(u+t*.04)+n(u*2.1-t*.06)*.5+n(u*4.3+t*.03)*.25;a/=1.75;
          vec3 c=mix(vec3(.01,.025,.07),vec3(.04,.01,.12),a);c+=vec3(0.,.008,.025)*a*a*2.;gl_FragColor=vec4(c,1.);}`,
      side: THREE.DoubleSide, depthWrite: false,
    });
    const neb = new THREE.Mesh(new THREE.PlaneGeometry(300, 300), nebMat);
    neb.position.z = -60; scene.add(neb);

    let pmx = 0, pmy = 0;
    const onMouseMove = (e) => { pmx = (e.clientX / innerWidth - 0.5) * 2; pmy = (e.clientY / innerHeight - 0.5) * 2; };
    document.addEventListener('mousemove', onMouseMove);

    let t = 0, rafId;
    const loop = () => {
      rafId = requestAnimationFrame(loop); t += 0.003;
      nebMat.uniforms.t.value = t;
      starGroup.rotation.y = t * 0.018; starGroup.rotation.x = t * 0.007;
      camera.position.x += (pmx * 1.8 - camera.position.x) * 0.022;
      camera.position.y += (-pmy * 1.2 - camera.position.y) * 0.022;
      camera.lookAt(scene.position);
      objects.forEach((o) => { o.mesh.rotation.x += o.rx; o.mesh.rotation.y += o.ry; o.fi += o.fs; o.mesh.position.y += Math.sin(o.fi) * o.fa * 0.01; });
      pt1.position.x = Math.sin(t * 0.5) * 14; pt1.position.y = Math.cos(t * 0.3) * 8;
      pt2.position.x = Math.cos(t * 0.4) * 16; pt2.position.y = Math.sin(t * 0.6) * 9;
      renderer.render(scene, camera);
    };
    loop();

    const onResize = () => {
      const W = canvas.clientWidth, H = canvas.clientHeight;
      renderer.setSize(W, H); camera.aspect = W / H; camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="hero__canvas" />;
}
